import reducer from "./reducers"
import * as types from "../actions/actions"

describe("todos reducer", () => {
    it("should return the initial state", () => {
        expect(
            reducer(undefined, {})
        ).toEqual(
            {
                headerColor: "green",
            }
        )
    })
    it("should update header colour", () => {
        expect(
            reducer({}, {
                type: types.UPDATE_HEADER,
                config: {headerColor: "blue"},
            })
        ).toEqual(
            {
                headerColor: "blue",
            }
        )

        expect(
            reducer({}, {
                type: types.UPDATE_HEADER,
                config: {headerColor: "red"},
            })
        ).toEqual(
            {
                headerColor: "red",
            }
        )

        expect(
            reducer({}, {
                type: types.UPDATE_HEADER,
                config: {headerColor: "green"},
            })
        ).toEqual(
            {
                headerColor: "green",
            }
        )
    })
})