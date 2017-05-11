import { fromJS } from "immutable"
import content, { tags } from "../../contents"

const newTags = tags.map(tag => {
    return fromJS({
        filter: tag.get("filter"),
        title: tag.get("title"),
    })
})

const newContent = content.map(content => {
    return fromJS({
        title: content.get("title"),
        show: true,
        tags: content.get("tags").map(tag => tag.get("title")),
    })
})

const DEFAULT_STATE = fromJS({
    headerColor: "blue",
    tags: newTags,
    content: newContent,
    requiredFilters: 0,
    jwtToken: "",
})

export default DEFAULT_STATE