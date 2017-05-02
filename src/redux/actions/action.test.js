import * as types from "./actions"
import * as actions from "./actionCreators"
import { fromJS } from "immutable"

describe("actions", () => {
    it("should create an action to update the header", () => {
        const config = fromJS({headerColor: "green"})
        const expectedAction = {
            type: types.UPDATE_HEADER,
            config,
        }
        expect(actions.updateHeader(config)).toEqual(expectedAction)
    })
})