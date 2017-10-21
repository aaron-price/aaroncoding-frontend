'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = require('next/node_modules/babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('next/node_modules/babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('next/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

require('isomorphic-fetch');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _store = require('../redux/store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _CodeBlocks = require('../components/CodeBlocks');

var _Head = require('../components/Head');

var _Head2 = _interopRequireDefault(_Head);

var _HoverPaper = require('../components/HoverPaper');

var _HoverPaper2 = _interopRequireDefault(_HoverPaper);

var _Head3 = require('../components/Head.js');

var _Head4 = _interopRequireDefault(_Head3);

var _List = require('../components/Projects/List.js');

var _List2 = _interopRequireDefault(_List);

var _current_user = require('../services/current_user.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aaron/Documents/repos/aaroncoding2/aaroncoding/frontend/pages/projects.js?entry';


var tags = {
    'animation': { title: 'Animation', visibility: 'show' },
    'api': { title: 'API', visibility: 'show' },
    'back': { title: 'Backend', visibility: 'show' },
    'day': { title: 'Built in 1 day', visibility: 'show' },
    'django': { title: 'Django', visibility: 'show' },
    'front': { title: 'Frontend', visibility: 'show' },
    'game': { title: 'Game', visibility: 'show' },
    'html': { title: 'HTML', visibility: 'show' },
    'js': { title: 'Javascript', visibility: 'show' },
    'mockup': { title: 'Mockup', visibility: 'show' },
    'node': { title: 'NodeJS', visibility: 'show' },
    'oss': { title: 'Open Source', visibility: 'show' },
    'python': { title: 'Python', visibility: 'show' },
    'react': { title: 'ReactJS', visibility: 'show' },
    'sass': { title: 'CSS, SASS, and postCSS', visibility: 'show' },
    'svg': { title: 'SVG', visibility: 'show' }
};
var big_projects = [{
    title: 'ReactJo Scaffolding Engine',
    description: 'Spin up microservice react apps in minutes',
    href: 'https://www.reactjo.com',
    tags: [tags.api, tags.back, tags.django, tags.front, tags.js, tags.node, tags.oss, tags.python, tags.react, tags.sass]
}, {
    title: 'Sweet Render',
    description: 'A templating engine which can replace React\'s JSX syntax.',
    href: 'https://www.npmjs.com/package/sweet-render',
    tags: [tags.front, tags.html, tags.js, tags.oss, tags.react]
}];
var mockups = [];
var micro_projects = [{
    title: 'Day 1: Accordion',
    description: 'A simple js accordion.',
    href: '/30days/accordion',
    tags: [tags.day, tags.front, tags.html, tags.js]
}, {
    title: 'Day 2: CreateElements',
    description: 'DOM elements created using raw js.',
    href: '/30days/create_elements',
    tags: [tags.day, tags.front, tags.html, tags.js]
}, {
    title: 'Day 3: Collision',
    description: 'Today I made some responsive collision detection.',
    href: '/30days/collision',
    tags: [tags.animation, tags.day, tags.front, tags.js, tags.react]
}, {
    title: 'Day 4: Minesweeper',
    description: 'A nostalgic game from my youth.',
    href: '/30days/minesweeper',
    tags: [tags.day, tags.front, tags.game, tags.js, tags.svg]
}, {
    title: 'Day 5: Zipper',
    description: 'A whimsical animation.',
    href: '/30days/zipper',
    tags: [tags.animation, tags.day, tags.front, tags.js, tags.svg]
}, {
    title: 'Day 6: Hovers',
    description: 'A demo of several button hover-effects.',
    href: '/30days/hovers',
    tags: [tags.animation, tags.day, tags.front, tags.react, tags.sass]
}, {
    title: 'Day 7: Redux menu colour',
    description: 'Change the menu colour using redux.',
    href: '/30days/menu_colours',
    tags: [tags.day, tags.front, tags.sass, tags.js, tags.react]
}, {
    title: 'Day 8: Animated Gears',
    description: 'They just keep spinning, and spinning, and spinning...',
    href: '/30days/gears',
    tags: [tags.animation, tags.day, tags.front, tags.sass, tags.js, tags.react]
}, {
    title: 'Day 9: Filter Settings',
    description: 'Adjust the available list of projects.',
    href: '#filters',
    tags: [tags.day, tags.front, tags.js, tags.react]
}, {
    title: 'Day 10: Cross origin API and Ajax',
    description: 'Today I made two servers.',
    href: '/30days/api',
    tags: [tags.day, tags.back, tags.js, tags.node, tags.api]
}, {
    title: 'Day 11: Higher-Order Components',
    description: 'A simple demo of HOC in React.',
    href: '/30days/higher_order',
    tags: [tags.day, tags.front, tags.js, tags.react]
}, {
    title: 'Day 12: Loading Bar',
    description: 'A simple loading bar.',
    href: '/30days/loading',
    tags: [tags.animation, tags.day, tags.front, tags.js, tags.react, tags.sass]
}, {
    title: 'Day 13: Memory Game',
    description: 'Uh... I don\'t remember what I was going to put here.',
    href: '/30days/memory',
    tags: [tags.animation, tags.day, tags.front, tags.js, tags.react]
}, {
    title: 'Day 14: Dynamic Search',
    description: 'A search bar that updates the results as you type.',
    href: '/30days/search',
    tags: [tags.day, tags.front, tags.js, tags.react]
}, {
    title: 'Day 15: Menu Bar',
    description: 'A responsive, material-ui, menu bar.',
    href: '/30days/menubar',
    tags: [tags.day, tags.front, tags.html, tags.js, tags.react, tags.sass, tags.html]
}, {
    title: 'Day 16: Form Demo',
    description: 'A Form with a preview panel.',
    href: '/30days/forms',
    tags: [tags.day, tags.front, tags.html, tags.js, tags.react]
}, {
    title: 'Day 17: Random Story Generator',
    description: 'I give you a starting point, you fill in the blanks!',
    href: '/30days/story',
    tags: [tags.day, tags.js, tags.react]
}, {
    title: 'Day 18: User Authentication',
    description: 'I create a simple signup / login / logout system.',
    href: '/30days/user_auth',
    tags: [tags.day, tags.back, tags.js, tags.html, tags.react, tags.node, tags.api]
}, {
    title: 'Day 19: Chat App',
    description: 'A quick sketch of how a chat application might look.',
    href: '/30days/chat_app',
    tags: [tags.day, tags.front, tags.js, tags.react]
}, {
    title: 'Day 20: Animated Bar Graph',
    description: 'An endlessly animated bar graph.',
    href: '/30days/bar_graph',
    tags: [tags.animation, tags.day, tags.front, tags.js, tags.react, tags.svg]
}, {
    title: 'Day 21: Lightbox',
    description: 'Click a thumbnail, get a full size. Navigate with arrows.',
    href: '/30days/lightbox',
    tags: [tags.day, tags.front, tags.js, tags.react]
}, {
    title: 'Day 22: Animated Line Graph',
    description: 'Today I built an animation engine from scratch.',
    href: '/30days/line_graph',
    tags: [tags.animation, tags.day, tags.front, tags.js, tags.react]
}, {
    title: 'Day 23: Video Player',
    description: 'Today I played with the <video> api.',
    href: '/30days/video',
    tags: [tags.day, tags.front, tags.html, tags.js]
}, {
    title: 'Day 24: Email Integration',
    description: 'Today I wired up a form to Sendgrid\'s SMTP api.',
    href: '/30days/email',
    tags: [tags.day, tags.back, tags.js, tags.react, tags.html]
}, {
    title: 'Day 25: HTTPS and Custom Domain',
    description: 'Today, my portfolio became https://aaroncoding.com.',
    href: '/30days/https',
    tags: [tags.day, tags.back]
}, {
    title: 'Day 26: Video Background',
    description: 'Today I created a video background.',
    href: '/30days/video_bg',
    tags: [tags.day, tags.front, tags.js, tags.react, tags.html]
}, {
    title: 'Day 27: Sliding List',
    description: 'Weeeeeeeeeeeeee...',
    href: '/30days/sliding_list',
    tags: [tags.day, tags.front, tags.js, tags.react, tags.html]
}, {
    title: 'Day 28: Stranger Logos',
    description: 'An animated logo, straight out of the fake 1980\'s',
    href: '/30days/stranger_logos',
    tags: [tags.animation, tags.day, tags.front, tags.js, tags.react]
}, {
    title: 'Day 29: Parallax',
    description: 'A screensave-like animation',
    href: '/30days/parallax',
    tags: [tags.animation, tags.day, tags.front, tags.js, tags.react]
}, {
    title: 'Day 30: Bubble popping',
    description: 'Click on things to make them shrink and vanish.',
    href: '/30days/pop',
    tags: [tags.day, tags.front, tags.js, tags.react]
}];

var Projects = function (_Component) {
    (0, _inherits3.default)(Projects, _Component);

    function Projects(props) {
        (0, _classCallCheck3.default)(this, Projects);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Projects.__proto__ || (0, _getPrototypeOf2.default)(Projects)).call(this, props));

        _this.state = {
            tags: tags,
            micro_projects: micro_projects,
            big_projects: big_projects,
            show_filters: false
        };
        _this.filter = _this.filter.bind(_this);
        _this.handle_input = _this.handle_input.bind(_this);
        _this.update_all = _this.update_all.bind(_this);
        _this.update_state = _this.update_state.bind(_this);
        _this.toggle_filters = _this.toggle_filters.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Projects, [{
        key: 'toggle_filters',
        value: function toggle_filters() {
            this.setState(function (prevState) {
                return { show_filters: !prevState.show_filters };
            });
        }
    }, {
        key: 'update_state',
        value: function update_state(field, value) {
            this.setState((0, _defineProperty3.default)({}, field, value));
        }
    }, {
        key: 'update_all',
        value: function update_all(value) {
            var _this2 = this;

            var new_tags = (0, _keys2.default)(this.state.tags).map(function (tag) {
                tag = _this2.state.tags[tag];
                tag.visibility = value;
                return tag;
            });
            this.setState({ tags: new_tags });
            this.controller();
        }
    }, {
        key: 'handle_input',
        value: function handle_input(tag, value) {
            var new_state = (0, _assign2.default)({}, this.state);
            new_state.tags[tag].visibility = value;
            this.setState(new_state);
            this.controller();
        }
    }, {
        key: 'controller',
        value: function controller() {
            var new_big = big_projects.filter(this.filter);
            var new_micro = micro_projects.filter(this.filter);
            this.setState({
                big_projects: new_big,
                micro_projects: new_micro
            });
        }
    }, {
        key: 'filter',
        value: function filter(prj) {
            var _this3 = this;

            var required = [];
            var show = [];
            var hide = [];
            (0, _keys2.default)(this.state.tags).forEach(function (tag) {
                var vis = _this3.state.tags[tag].visibility;
                if (vis === 'required') {
                    required.push(_this3.state.tags[tag].title);
                } else if (vis === 'show') {
                    show.push(_this3.state.tags[tag].title);
                } else if (vis === 'hide') {
                    hide.push(_this3.state.tags[tag].title);
                }
            });
            // Check required if necessary
            if (required.length !== 0) {
                for (var i = 0; i < required.length; i++) {
                    var tag = required[i];
                    var prj_tags = prj.tags.map(function (tag) {
                        return tag.title;
                    });
                    var require_tag = prj_tags.indexOf(tag) !== -1;
                    if (!require_tag) {
                        // A required tag is missing. Don't allow.
                        return false;
                        break;
                    }
                }
            }

            // Check Disallowed
            for (var _i = 0; _i < hide.length; _i++) {
                var _tag = hide[_i];
                var _prj_tags = prj.tags.map(function (tag) {
                    return tag.title;
                });
                var disallow_tag = _prj_tags.indexOf(_tag) !== -1;
                if (disallow_tag) {
                    return false;
                    break;
                }
            }

            // If all pass, return true
            return true;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.controller();
        }
    }, {
        key: 'render',
        value: function render() {
            var project_count = big_projects.length + mockups.length + micro_projects.length;
            return _react2.default.createElement(_Head4.default, { current_user: this.props.current_user, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 381
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 382
                }
            }, _react2.default.createElement(_List2.default, {
                big_projects: this.state.big_projects,
                micro_projects: this.state.micro_projects,
                mockups: this.state.mockups,
                project_count: project_count,
                handle_input: this.handle_input,
                update_all: this.update_all,
                show_filters: this.state.show_filters,
                toggle_filters: this.toggle_filters,
                tags: this.state.tags, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 383
                }
            })));
        }
    }]);

    return Projects;
}(_react.Component);

Projects.getInitialProps = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _current_user.return_current_user)(context);

                    case 2:
                        _context.t0 = _context.sent;
                        return _context.abrupt('return', {
                            current_user: _context.t0
                        });

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();
exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(Projects);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlBhcGVyIiwiaW5pdFN0b3JlIiwid2l0aFJlZHV4IiwiQ29kZUJsb2NrIiwiR3JlZW5UZXh0IiwiR3JuIiwiSGVhZGVyIiwiSG92ZXJQYXBlciIsIkhlYWQiLCJMaXN0IiwicmV0dXJuX2N1cnJlbnRfdXNlciIsInRhZ3MiLCJ0aXRsZSIsInZpc2liaWxpdHkiLCJiaWdfcHJvamVjdHMiLCJkZXNjcmlwdGlvbiIsImhyZWYiLCJhcGkiLCJiYWNrIiwiZGphbmdvIiwiZnJvbnQiLCJqcyIsIm5vZGUiLCJvc3MiLCJweXRob24iLCJyZWFjdCIsInNhc3MiLCJodG1sIiwibW9ja3VwcyIsIm1pY3JvX3Byb2plY3RzIiwiZGF5IiwiYW5pbWF0aW9uIiwiZ2FtZSIsInN2ZyIsIlByb2plY3RzIiwicHJvcHMiLCJzdGF0ZSIsInNob3dfZmlsdGVycyIsImZpbHRlciIsImJpbmQiLCJoYW5kbGVfaW5wdXQiLCJ1cGRhdGVfYWxsIiwidXBkYXRlX3N0YXRlIiwidG9nZ2xlX2ZpbHRlcnMiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsImZpZWxkIiwidmFsdWUiLCJuZXdfdGFncyIsIm1hcCIsInRhZyIsImNvbnRyb2xsZXIiLCJuZXdfc3RhdGUiLCJuZXdfYmlnIiwibmV3X21pY3JvIiwicHJqIiwicmVxdWlyZWQiLCJzaG93IiwiaGlkZSIsImZvckVhY2giLCJ2aXMiLCJwdXNoIiwibGVuZ3RoIiwiaSIsInByal90YWdzIiwicmVxdWlyZV90YWciLCJpbmRleE9mIiwiZGlzYWxsb3dfdGFnIiwicHJvamVjdF9jb3VudCIsImN1cnJlbnRfdXNlciIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1A7O0FBQ0EsQUFBTyxBQUFTOzs7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