let tags = {
    'animation': { title: 'Animation' },
    'api': { title: 'API' },
    'back': { title: 'Backend' },
    'bootstrap': { title: 'Bootstrap' },
    'day': { title: 'Built in 1 day' },
    'django': { title: 'Django' },
    'design': { title: 'Design' },
    'front': { title: 'Frontend' },
    'game': { title: 'Game' },
    'html': { title: 'HTML' },
    'js': { title: 'Javascript' },
    'mockup': { title: 'Mockup' },
    'node': { title: 'NodeJS' },
    'oss': { title: 'Open Source' },
    'python': { title: 'Python' },
    'photoshop': { title: 'Photoshop' },
    'react': { title: 'ReactJS' },
    'sass': { title: 'CSS, SASS, and postCSS' },
    'svg': { title: 'SVG' },
}
// Add visibility: 'show' to every tag`
Object.keys(tags).forEach(tag => tags[tag].visibility = 'show' )

const oss_projects = [
    {
        title: 'ReactJo Scaffolding Engine',
        description: 'Spin up microservice react apps in minutes',
        href: 'https://www.reactjo.com',
        tags: [
            tags.api, tags.back, tags.django, tags.front, tags.js, tags.node,
            tags.oss, tags.python, tags.react, tags.sass
        ],
    },
    {
        title: 'Sweet Render',
        description: 'A templating engine which can replace React\'s JSX syntax.',
        href: 'https://www.npmjs.com/package/sweet-render',
        tags: [
            tags.front, tags.html, tags.js, tags.oss, tags.react
        ],
    },
    {
        title: 'console.dog',
        description: 'A lame joke, but it really does work.',
        href: 'https://www.npmjs.com/package/console-dog',
        tags: [
            tags.js, tags.oss
        ],
    },
]
const mockup_projects = [
    /*
    {
        title: 'Network Monitor',
        description: 'Ping!',
        href: '/mockups/network_monitor',
        tags: [
            tags.day, tags.front, tags.html, tags.js
        ],
    }
    */
]
const micro_projects = [
    {
        title: 'Day 1: Accordion',
        description: 'A simple js accordion.',
        href: '/30days/accordion',
        tags: [
            tags.day, tags.front, tags.html, tags.js
        ],
    },{
        title: 'Day 2: Drag and Drop',
        description: 'Literal pixel pushing.',
        href: '/30days/drag_drop',
        tags: [
            tags.day, tags.front, tags.html, tags.js, tags.react
        ],
    },{
        title: 'Day 3: Collision',
        description: 'Today I made some responsive collision detection.',
        href: '/30days/collision',
        tags: [
            tags.animation, tags.day, tags.front, tags.js, tags.react
        ],
    },{
        title: 'Day 4: Minesweeper',
        description: 'A nostalgic game from my youth.',
        href: '/30days/minesweeper',
        tags: [
            tags.day, tags.front, tags.game, tags.js, tags.svg
        ],
    },{
        title: 'Day 5: Zipper',
        description: 'A whimsical animation.',
        href: '/30days/zipper',
        tags: [
            tags.animation, tags.day, tags.front, tags.js, tags.svg
        ],
    },
    {
        title: 'Day 6: Hovers',
        description: 'A demo of several button hover-effects.',
        href: '/30days/hovers',
        tags: [
            tags.animation, tags.day, tags.front, tags.react, tags.sass
        ],
    },
    {
        title: 'Day 7: Redux menu colour',
        description: 'Change the menu colour using redux.',
        href: '/30days/menu_colours',
        tags: [
            tags.day, tags.front, tags.sass, tags.js, tags.react
        ],
    },
    {
        title: 'Day 8: Animated Gears',
        description: 'They just keep spinning, and spinning, and spinning...',
        href: '/30days/gears',
        tags: [
            tags.animation, tags.day, tags.front, tags.sass, tags.js, tags.react
        ],
    },
    {
        title: 'Day 9: Filter Settings',
        description: 'Adjust the available list of projects.',
        href: '#filters',
        tags: [
            tags.day, tags.front, tags.js, tags.react,
        ],
    },
    {
        title: 'Day 10: Cross origin API and Ajax',
        description: 'Today I made two servers.',
        href: '/30days/api',
        tags: [
            tags.day, tags.back, tags.js, tags.node, tags.api
        ],
    },
    {
        title: 'Day 11: Higher-Order Components',
        description: 'A simple demo of HOC in React.',
        href: '/30days/higher_order',
        tags: [
            tags.day, tags.front, tags.js, tags.react
        ],
    },
    {
        title: 'Day 12: Loading Bar',
        description: 'A simple loading bar.',
        href: '/30days/loading',
        tags: [
            tags.animation, tags.day, tags.front, tags.js, tags.react, tags.sass
        ],
    },
    {
        title: 'Day 13: Memory Game',
        description: 'Uh... I don\'t remember what I was going to put here.',
        href: '/30days/memory',
        tags: [
            tags.day, tags.front, tags.js, tags.react
        ],
    },
    {
        title: 'Day 14: Dynamic Search',
        description: 'A search bar that updates the results as you type.',
        href: '/30days/search',
        tags: [
            tags.day, tags.front, tags.js, tags.react
        ],
    },
    {
        title: 'Day 15: Menu Bar',
        description: 'A responsive, material-ui, menu bar.',
        href: '/30days/menubar',
        tags: [
            tags.day, tags.front, tags.html, tags.js, tags.react, tags.sass, tags.html
        ],
    },
    {
        title: 'Day 16: Form Demo',
        description: 'A Form with a preview panel.',
        href: '/30days/forms',
        tags: [
            tags.day, tags.front, tags.html, tags.js, tags.react
        ],
    },
    {
        title: 'Day 17: Random Story Generator',
        description: 'I give you a starting point, you fill in the blanks!',
        href: '/30days/story',
        tags: [
            tags.day, tags.js, tags.react
        ],
    },
    {
        title: 'Day 18: User Authentication',
        description: 'I create a simple signup / login / logout system.',
        href: '/30days/user_auth',
        tags: [
            tags.day, tags.back, tags.js, tags.html, tags.react, tags.node, tags.api
        ],
    },
    {
        title: 'Day 19: Chat App',
        description: 'A quick sketch of how a chat application might look.',
        href: '/30days/chat_app',
        tags: [
            tags.day, tags.front, tags.js, tags.react,
        ],
    },
    {
        title: 'Day 20: Animated Bar Graph',
        description: 'An endlessly animated bar graph.',
        href: '/30days/bar_graph',
        tags: [
            tags.animation, tags.day, tags.front, tags.js, tags.react, tags.svg
        ],
    },
    {
        title: 'Day 21: Lightbox',
        description: 'Click a thumbnail, get a full size. Navigate with arrows.',
        href: '/30days/lightbox',
        tags: [
            tags.day, tags.front, tags.js, tags.react,
        ],
    },
    {
        title: 'Day 22: Animated Line Graph',
        description: 'Today I built an animation engine from scratch.',
        href: '/30days/line_graph',
        tags: [
            tags.animation, tags.day, tags.front, tags.js, tags.react,
        ],
    },
    {
        title: 'Day 23: Video Player',
        description: 'Today I played with the <video> api.',
        href: '/30days/video',
        tags: [
            tags.day, tags.front, tags.html, tags.js
        ],
    },
    {
        title: 'Day 24: Email Integration',
        description: 'Today I wired up a form to Sendgrid\'s SMTP api.',
        href: '/30days/email',
        tags: [
            tags.day, tags.back, tags.js, tags.react, tags.html
        ],
    },
    {
        title: 'Day 25: HTTPS and Custom Domain',
        description: 'Today, my portfolio became https://aaroncoding.com.',
        href: '/30days/https',
        tags: [
            tags.day, tags.back,
        ],
    },
    {
        title: 'Day 26: Video Background',
        description: 'Today I created a video background.',
        href: '/30days/video_bg',
        tags: [
            tags.day, tags.front, tags.js, tags.react, tags.html
        ],
    },
    {
        title: 'Day 27: Sliding List',
        description: 'Weeeeeeeeeeeeee...',
        href: '/30days/sliding_list',
        tags: [
            tags.day, tags.front, tags.js, tags.react, tags.html
        ],
    },
    {
        title: 'Day 28: Stranger Logos',
        description: 'An animated logo, straight out of the fake 1980\'s',
        href: '/30days/stranger_logos',
        tags: [
            tags.animation, tags.day, tags.front, tags.js, tags.react
        ],
    },
    {
        title: 'Day 29: Parallax',
        description: 'A screensave-like animation',
        href: '/30days/parallax',
        tags: [
            tags.animation, tags.day, tags.front, tags.js, tags.react
        ],
    },
    {
        title: 'Day 30: Bubble popping',
        description: 'Click on things to make them shrink and vanish.',
        href: '/30days/pop',
        tags: [
            tags.day, tags.front, tags.js, tags.react
        ],
    },
    // {
    //     title: 'Day 31: Signup form mockup',
    //     description: 'Broadening my horizons. Signup form without material-ui',
    //     href: '/dailyui/signup',
    //     tags: [
    //         tags.day, tags.front, tags.js, tags.photoshop, tags.react
    //     ],
    // },
    // {
    //     title: 'Day 32: Credit card form mockup',
    //     description: 'A bootstrappy one',
    //     href: '/dailyui/ccform',
    //     tags: [
    //         tags.bootstrap, tags.day, tags.front, tags.js, tags.react
    //     ],
    // },
].reverse()

module.exports = {
    tags,
    oss_projects,
    micro_projects,
    mockup_projects
}