import { renderComponent, expect } from "../helpers/test_helpers"
import Hovers from "./Hovers"

describe("Comment List", () => {
    let component
    beforeEach(() => {
        component = renderComponent(Hovers)
    })
    it("should contain a list", () => {
        expect(component).to.exist
    })
})