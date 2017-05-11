import { UPDATE_HEADER, UPDATE_FILTERS, UPDATE_JWTTOKEN, UPDATE_USER } from "../actions/actions"
import DEFAULT_STATE from "../store/default_state"
import { mergeDee, fromJS } from "immutable"

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
    case UPDATE_HEADER:
        return state.set("headerColor", action.config.get("headerColor"))
    case UPDATE_JWTTOKEN:
        return state.set("jwtToken", action.config.get("newToken"))
    case UPDATE_USER:
        return state.setIn(["user", "username"], action.config.getIn(["user", "username"]))

    case UPDATE_FILTERS:
        // PHASE1 = Get the state and payload
        const phase1 = state
        const tagTitle = action.tag
        const newFilter = action.newFilter

        // PHASE2 = Increment "requiredFilters"
        const prevRequired = state.get("requiredFilters")
        const phase2 = newFilter === "required" ?
            phase1.set("requiredFilters", prevRequired + 1) :
            phase1.set("requiredFilters", prevRequired)


        // PHASE3 = Decrement "requiredFilters"
        const prevFilter = state.getIn(["tags", tagTitle, "filter"])
        const phase3 = newFilter !== "required" && prevFilter === "required" ?
            phase2.set("requiredFilters", phase2.get("requiredFilters") - 1) :
            phase2.set("requiredFilters", phase2.get("requiredFilters"))

        // PHASE4 = update the tag's filter string
        const phase4 = phase3.setIn(["tags", tagTitle, "filter"], newFilter)

        // PHASE5 = hide all content with disallowed tags
        const disallowFilteredContent = phase4.get("content").map(content => {
            const disallowed = content.get("tags").filter(tag => {
                return phase4.getIn(["tags", tag, "filter"]) === "disallowed"
            })
            return disallowed.size > 0 ? content.set("show", false) : content.set("show", true)
        })
        const phase5 = phase4.set("content", disallowFilteredContent)

        // PHASE6 = If there are required tags, hide everything that doesn't contain them
        let phase6 = {}
        if (phase5.get("requiredFilters") > 0) {
            // Array of tags that must be present
            let requiredTagsMutable = []
            phase5.get("tags").forEach(tag => {
                if (tag.get("filter") === "required") { requiredTagsMutable.push(tag.get("title")) }
            })
            const requiredTags = fromJS(requiredTagsMutable)

            // Loop over content, get an array of content objects that pass
            const validatedContent = phase5.get("content").map(content => {
                // Get array of strings for each tag in content
                const contentTags = content.get("tags")
                // If content contains all required tags, then it passes
                const passes = requiredTags.every(reqTag => {
                    return contentTags.includes(reqTag)
                })
                const disallowed = disallowFilteredContent

                // Set the "show" property accordingly
                return !passes ? content.set("show", false) : content
            })
            phase6 = phase5.set("content", validatedContent)
        } else {
            phase6 = phase5
        }
        return phase6
    default:
        return state
    }
}


/* For example
 state = MAP({
     headerColor: "green",
     tags: [
         ...,
         {
             title: "tdd",
             filter: "disallowed",
         }
     ],
         content: [
         ...,
         {
             title: "Zipper",
             show: true,
             tags: ["animation", "tdd"]
         }
     ]
 })
 */

export default rootReducer