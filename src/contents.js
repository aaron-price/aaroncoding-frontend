/* eslint-disable */
import { fromJS } from "immutable"
// Components
import Accordion from "./ongoing/30Days/1-accordion/Accordion"
import MineSweeper from "./ongoing/30Days/4-minesweeper/Minesweeper"
import Zipper from "./ongoing/30Days/5-zipper/Zipper"
import Hovers from "./ongoing/30Days/6-hovers/Hovers"
import Menus from "./ongoing/30Days/7-menus/Menus"
import Gears from "./ongoing/30Days/8-gears/Gears"
import FilterSettings from "./ongoing/30Days/9-filterSettings/FilterSettings"
import Api from "./ongoing/30Days/10-api/Api"
import PaperDemo from "./ongoing/30Days/11-Paper/Paper"
import Container from "./ongoing/30Days/12-loadingBar/LoadingBar"
import Memory from "./ongoing/30Days/13-memory/Memory"
import DynamicSearchContainer from "./ongoing/30Days/14-dynamicSearch/DynamicSearch"
import MenuBar from "./app/Menu"
import FormContainer from "./ongoing/30Days/16-form/Form"
import CharacterGen from "./ongoing/30Days/17-characterGen/CharacterGen"
import UserAuth from "./app/auth/AuthContainer"
import Chat from "./ongoing/30Days/19-chat/Chat"
import Stats from "./ongoing/30Days/20-stats/Stats"
import Lightbox from "./ongoing/30Days/21-lightbox/Lightbox"
import Stats2 from "./ongoing/30Days/22-stats2/StatsPt2"
import VideoPlayer from "./ongoing/30Days/23-vidPlayer/VideoPlayer"
import Mail from "./ongoing/30Days/24-mail/Mail"
import HTTPS from "./ongoing/30Days/25-HTTPS/HTTPS"
import VidBG from "./ongoing/30Days/26-vidBg/VidBG"
import SlideList from "./ongoing/30Days/27-slideList/SlideList"
import Stranger from "./ongoing/30Days/28-stranger/Stranger"
import Parallax from "./ongoing/30Days/29-parallax/Parallax"
import Walkthrough from "./ongoing/30Days/30-walkthrough/Walkthrough"

// Tags
let preTags = {}
function buildTagsObj(title, text) {
    preTags[title] = {filter: "allowed", title, text}
}
buildTagsObj("ajax","AJAX")
buildTagsObj("algorithms","Algorithms")
buildTagsObj("animation", "Animation")
buildTagsObj("api","RESTful APIs")
buildTagsObj("aws","Amazon Web Services (AWS)")
buildTagsObj("buttons","Buttons")
buildTagsObj("game","Game")
buildTagsObj("hover","Hover Effect")
buildTagsObj("immutable","ImmutableJS")
buildTagsObj("jquery","JQuery")
buildTagsObj("material","Material UI")
buildTagsObj("mockup","Mockup Design")
buildTagsObj("react","React")
buildTagsObj("redux","Redux")
buildTagsObj("node", "Node JS")
buildTagsObj("sass","SASS / SCSS")
buildTagsObj("security","Security")
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
        title: "Walkthrough tutorial",
        component: Walkthrough,
        tags: applyTags(["react", "ui"]),
    },
    {
        title: "Parallax",
        component: Parallax,
        tags: applyTags(["react", "ui", "animation"]),
    },
    {
        title: "Stranger Logos",
        component: Stranger,
        tags: applyTags(["react", "ui", "animation"]),
    },
    {
        title: "Sliding List",
        component: SlideList,
        tags: applyTags(["react", "ui", "animation"]),
    },
    {
        title: "Video background",
        component: VidBG,
        tags: applyTags(["react", "ui", "aws"]),
    },
    {
        title: "HTTPS, and custom domain",
        component: HTTPS,
        tags: applyTags(["animation", "api", "node", "security"]),
    },
    {
        title: "Email integration",
        component: Mail,
        tags: applyTags(["react", "ui", "api", "node"]),
    },
    {
        title: "Video Player",
        component: VideoPlayer,
        tags: applyTags(["react", "ui"]),
    },
    {
        title: "Animated Line Graph",
        component: Stats2,
        tags: applyTags(["react", "svg", "animation", "algorithms"]),
    },
    {
        title: "Lightbox",
        component: Lightbox,
        tags: applyTags(["react", "ui", "aws"]),
    },
    {
        title: "Animated bar graph",
        component: Stats,
        tags: applyTags(["react", "svg", "animation"]),
    },
    {
        title: "Chat app",
        component: Chat,
        tags: applyTags(["ui", "react", "material", "mockup"]),
    },
    {
        title: "User authentication",
        component: UserAuth,
        tags: applyTags(["ui", "react", "material", "redux", "node", "api", "immutable", "ajax"]),
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
        tags: applyTags(["ajax","api", "node"]),
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
        component: Accordion,
        tags: applyTags(["tdd", "ui", "vanilla", "vim"]),
    },
]

// Automagically add a path and some formatting, before returning an immutable List of immutable Maps.
const contents = fromJS(contentsPrebuild.map((content, i) => {
    let newContent = content
    newContent.path = content.title
                             .replace(/(and\s)|(a\s)|[,\(\)\[\]\{\}]/g, "") // Remove "and", "a", and various punctuation.
                             .replace(/\s/g, "_")   // Convert spaces to underscores
                             .toLowerCase()         // Keep it all lowercase
    newContent.day = contentsPrebuild.length - i    // Number: how many consecutive days at this point.
    return newContent
}))

export default contents