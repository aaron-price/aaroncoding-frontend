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
import MenuBar from "./15-menuBar/MenuBar"
import FormContainer from "./16-form/Form"
import CharacterGen from "./17-characterGen/CharacterGen"
import UserAuth from "./app/auth/AuthContainer"
import Chat from "./19-chat/Chat"
import Stats from "./20-stats/Stats"

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
buildTagsObj("immutable","ImmutableJS")
buildTagsObj("jquery","JQuery")
buildTagsObj("material","Material UI")
buildTagsObj("mockup","Mockup Design")
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

let contentsPrebuild = [
    {
        title: "Animated statistics",
        component: Stats,
        tags: applyTags(["react", "svg"]),
    },
    {
        title: "Chat app",
        component: Chat,
        tags: applyTags(["ui", "react", "material", "mockup"]),
    },
    {
        title: "User authentication",
        component: UserAuth,
        tags: applyTags(["ui", "react", "material", "redux", "api", "immutable", "ajax"]),
    },
    {
        title: "Random Story Generator",
        component: CharacterGen,
        tags: applyTags(["ui", "react", "material"]),
    },
    {
        title: "Form demo",
        component: FormContainer,
        tags: applyTags(["ui", "react", "material"]),
    },
    {
        title: "Menu bar",
        component: MenuBar,
        tags: applyTags(["ui", "react", "material"]),
    },
    {
        title: "Dynamic Search",
        component: DynamicSearchContainer,
        tags: applyTags(["ui", "react", "immutable"]),
    },
    {
        title: "Memory Game",
        component: Memory,
        tags: applyTags(["game", "react"]),
    },
    {
        title: "Loading Bar",
        component: Container,
        tags: applyTags(["animation", "react", "jquery"]),
    },
    {
        title: "Paper Demo",
        component: PaperDemo,
        tags: applyTags(["animation", "react", "material"]),
    },
    {
        title: "Api",
        component: Api,
        tags: applyTags(["ajax","api"]),
    },
    {
        title: "Filter Settings",
        component: FilterSettings,
        tags: applyTags(["react","redux", "immutable"]),
    },
    {
        title: "Gears",
        component: Gears,
        tags: applyTags(["animation","react","svg"]),
    },
    {
        title: "Menu colour settings",
        component: Menus,
        tags: applyTags(["react","redux"]),
    },
    {
        title: "Hovers",
        component: Hovers,
        tags: applyTags(["animation","buttons","hover","react","sass","ui"]),
    },
    {
        title: "Zipper",
        component: Zipper,
        tags: applyTags(["animation","react","svg"]),
    },
    {
        title: "Minesweeper",
        component: MineSweeper,
        tags: applyTags(["game","react","svg","tdd"]),
    },
    {
        title: "Jezzball",
        tags: applyTags(["animation", "game", "svg", "tdd", "vanilla", "vim"]),
    },
    {
        title: "CreateElements",
        tags: applyTags(["tdd", "vanilla", "vim"]),
    },
    {
        title: "Accordion",
        tags: applyTags(["tdd", "ui", "vanilla", "vim"]),
    },
]

// Automagically add a path and some formatting, before returning an immutable List of immutable Maps.
const contents = fromJS(contentsPrebuild.map((content, i) => {
    let newContent = content
    newContent.path = content.title
                             .replace(/\s/g, "_")   // Convert spaces to underscores
                             .toLowerCase()         // Keep it all lowercase
    newContent.day = contentsPrebuild.length - i    // Number: how many consecutive days at this point.
    return newContent
}))

export default contents