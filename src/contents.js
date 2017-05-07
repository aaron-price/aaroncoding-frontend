import { fromJS } from "immutable"
// Components
import MineSweeper from "./4-minesweeper/Minesweeper"
import Zipper from "./5-zipper/Zipper"
import Hovers from "./6-hovers/Hovers"
import Menus from "./7-menus/Menus"
import Gears from "./8-gears/Gears"
import FilterSettings from "./9-filterSettings/FilterSettings"
import Api from "./10-api/Api"
import PaperDemo from "./11-Paper/Paper"
import Container from "./12-loadingBar/LoadingBar"
import Memory from "./13-memory/Memory"
import DynamicSearchContainer from "./14-dynamicSearch/DynamicSearch"


// Tags
let preTags = {}
function buildTagsObj(title, text) {
    preTags[title] = {filter: "allowed", title, text}
}
buildTagsObj("ajax","AJAX")
buildTagsObj("animation", "Animation")
buildTagsObj("api","RESTful APIs")
buildTagsObj("buttons","Buttons")
buildTagsObj("game","Game")
buildTagsObj("hover","Hover Effect")
buildTagsObj("jquery","JQuery")
buildTagsObj("material","Material UI")
buildTagsObj("react","React")
buildTagsObj("redux","Redux")
buildTagsObj("sass","SASS / SCSS")
buildTagsObj("svg","SVG")
buildTagsObj("tdd","TDD / BDD")
buildTagsObj("ui","UI / UX / Design")
buildTagsObj("vim","Vim")
buildTagsObj("vanilla","Only Vanilla Javascript")

export const tags = fromJS(preTags)


function applyTags(arr) {
    return arr.map(str => tags.get(str))
}

let contents = fromJS([
    {
        title: "Accordion",
        day: 1,
        tags: applyTags(["tdd", "ui", "vanilla", "vim"]),
    },
    {
        title: "CreateElements",
        day: 2,
        tags: applyTags(["tdd", "vanilla", "vim"]),
    },
    {
        title: "Jezzball",
        day: 3,
        tags: applyTags(["animation", "game", "svg", "tdd", "vanilla", "vim"]),
    },
    {
        title: "Minesweeper",
        day: 4,
        component: MineSweeper,
        tags: applyTags(["game","react","svg","tdd"]),
    },
    {
        title: "Zipper",
        day: 5,
        component: Zipper,
        tags: applyTags(["animation","react","svg"]),
    },
    {
        title: "Hovers",
        day: 6,
        component: Hovers,
        tags: applyTags(["animation","buttons","hover","react","sass","ui"]),
    },
    {
        title: "Menu colour settings",
        day: 7,
        component: Menus,
        tags: applyTags(["react","redux"]),
    },
    {
        title: "Gears",
        day: 8,
        component: Gears,
        tags: applyTags(["animation","react","svg"]),
    },
    {
        title: "Filter Settings",
        day: 9,
        component: FilterSettings,
        tags: applyTags(["react","redux"]),
    },
    {
        title: "Api",
        day: 10,
        component: Api,
        tags: applyTags(["ajax","api"]),
    },
    {
        title: "Paper Demo",
        day: 11,
        component: PaperDemo,
        tags: applyTags(["animation", "react", "material"]),
    },
    {
        title: "Loading Bar",
        day: 12,
        component: Container,
        tags: applyTags(["animation", "react", "jquery"]),
    },
    {
        title: "Memory Game",
        day: 13,
        component: Memory,
        tags: applyTags(["game", "react"]),
    },
    {
        title: "Dynamic Search",
        day: 14,
        component: DynamicSearchContainer,
        tags: applyTags(["ui", "react"]),
    },
])

export default contents