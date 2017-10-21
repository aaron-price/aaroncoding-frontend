'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('next/node_modules/babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _reactScroll = require('react-scroll');

var _reactScroll2 = _interopRequireDefault(_reactScroll);

var _HoverPaper = require('../../components/HoverPaper');

var _HoverPaper2 = _interopRequireDefault(_HoverPaper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aaron/Documents/repos/aaroncoding2/aaroncoding/frontend/components/Projects/List.js';

var scroll = _reactScroll2.default.animateScroll;


var Filter = function Filter(props) {
    return _react2.default.createElement('div', { className: 'project_filter_item', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, props.tag.title, ':', _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement(_FlatButton2.default, {
        label: 'show',
        onClick: function onClick() {
            return props.handle_input(props.keyname, 'show');
        },
        primary: props.tag.visibility !== 'show',
        secondary: props.tag.visibility === 'show', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), ' |', _react2.default.createElement(_FlatButton2.default, {
        label: 'hide',
        onClick: function onClick() {
            return props.handle_input(props.keyname, 'hide');
        },
        primary: props.tag.visibility !== 'hide',
        secondary: props.tag.visibility === 'hide', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }), ' |', _react2.default.createElement(_FlatButton2.default, {
        label: 'required',
        onClick: function onClick() {
            return props.handle_input(props.keyname, 'required');
        },
        primary: props.tag.visibility !== 'required',
        secondary: props.tag.visibility === 'required', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }), _react2.default.createElement('hr', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }));
};
var Filters = function Filters(props) {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, (0, _keys2.default)(props.tags).map(function (tag, key) {
        return _react2.default.createElement(Filter, {
            key: key,
            tag: props.tags[tag],
            keyname: tag,
            handle_input: props.handle_input, __source: {
                fileName: _jsxFileName,
                lineNumber: 30
            }
        });
    }));
};
var Item = function Item(props) {
    if (props.project.href.charAt(0) === '#') {
        return _react2.default.createElement(_HoverPaper2.default, {
            max: 3,
            classes: 'projects_item', __source: {
                fileName: _jsxFileName,
                lineNumber: 40
            }
        }, _react2.default.createElement('div', { onClick: function onClick() {
                scroll.scrollToTop({ duration: 500 });
                setTimeout(function () {
                    return props.toggle_filters();
                }, 700);
            }, style: { cursor: 'pointer' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 43
            }
        }, _react2.default.createElement('h4', { className: 'about_text', __source: {
                fileName: _jsxFileName,
                lineNumber: 48
            }
        }, props.project.title), _react2.default.createElement('p', { className: 'about_text', __source: {
                fileName: _jsxFileName,
                lineNumber: 49
            }
        }, props.project.description), _react2.default.createElement('p', { className: 'about_text', __source: {
                fileName: _jsxFileName,
                lineNumber: 50
            }
        }, _react2.default.createElement('strong', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 50
            }
        }, 'Tags: '), props.project.tags.map(function (tag) {
            return tag.title;
        }).join(', '))));
    } else {
        return _react2.default.createElement(_HoverPaper2.default, {
            max: 3,
            href: props.project.href,
            classes: 'projects_item', __source: {
                fileName: _jsxFileName,
                lineNumber: 58
            }
        }, _react2.default.createElement('h4', { className: 'about_text', __source: {
                fileName: _jsxFileName,
                lineNumber: 62
            }
        }, props.project.title), _react2.default.createElement('p', { className: 'about_text', __source: {
                fileName: _jsxFileName,
                lineNumber: 63
            }
        }, props.project.description), _react2.default.createElement('p', { className: 'about_text', __source: {
                fileName: _jsxFileName,
                lineNumber: 64
            }
        }, _react2.default.createElement('strong', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 64
            }
        }, 'Tags: '), props.project.tags.map(function (tag) {
            return tag.title;
        }).join(', ')));
    }
};

exports.default = function (props) {
    return _react2.default.createElement('div', { className: 'full_screen__content', id: 'filters', __source: {
            fileName: _jsxFileName,
            lineNumber: 73
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 74
        }
    }, 'Projects'), _react2.default.createElement('p', { className: 'about_text', __source: {
            fileName: _jsxFileName,
            lineNumber: 75
        }
    }, 'Currently showing ', props.big_projects.length + props.micro_projects.length, ' out of ', props.project_count, '.'), _react2.default.createElement(_FlatButton2.default, {
        label: props.show_filters ? 'Hide Filters' : 'Show Filters',
        primary: !props.show_filters,
        secondary: props.show_filters,
        onClick: function onClick() {
            return props.toggle_filters();
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 84
        }
    }), _react2.default.createElement('hr', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 84
        }
    }), props.show_filters && _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 86
        }
    }, 'All Tags: ', _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }), _react2.default.createElement(_FlatButton2.default, {
        label: 'show all',
        onClick: function onClick() {
            return props.update_all('show');
        },
        primary: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 88
        }
    }), ' |', _react2.default.createElement(_FlatButton2.default, {
        label: 'hide all',
        onClick: function onClick() {
            return props.update_all('hide');
        },
        primary: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 92
        }
    }), ' |', _react2.default.createElement(_FlatButton2.default, {
        label: 'require all',
        onClick: function onClick() {
            return props.update_all('required');
        },
        primary: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 96
        }
    }), _react2.default.createElement('hr', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 100
        }
    }), _react2.default.createElement(Filters, {
        tags: props.tags,
        handle_input: props.handle_input, __source: {
            fileName: _jsxFileName,
            lineNumber: 103
        }
    })), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 108
        }
    }), props.big_projects.length > 0 && _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 110
        }
    }, _react2.default.createElement('h3', { className: 'about_text', __source: {
            fileName: _jsxFileName,
            lineNumber: 111
        }
    }, 'Open Source'), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 112
        }
    }, 'I like making cool things that other people can use'), props.big_projects.map(function (project, key) {
        return _react2.default.createElement(Item, { key: key, project: project, __source: {
                fileName: _jsxFileName,
                lineNumber: 114
            }
        });
    }), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 116
        }
    })), props.micro_projects.length > 0 && _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 120
        }
    }, _react2.default.createElement('h3', { className: 'about_text', __source: {
            fileName: _jsxFileName,
            lineNumber: 121
        }
    }, 'Micro Projects'), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 122
        }
    }, 'I built 1 small project, every day after work, for 30 consecutive days.'), props.micro_projects.map(function (project, key) {
        return _react2.default.createElement(Item, { key: key, show_filters: props.show_filters, toggle_filters: props.toggle_filters, project: project, __source: {
                fileName: _jsxFileName,
                lineNumber: 124
            }
        });
    }), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 125
        }
    })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvamVjdHMvTGlzdC5qcyJdLCJuYW1lcyI6WyJQYXBlciIsIkZsYXRCdXR0b24iLCJTY3JvbGwiLCJzY3JvbGxlciIsInNjcm9sbCIsImFuaW1hdGVTY3JvbGwiLCJIb3ZlclBhcGVyIiwiRmlsdGVyIiwicHJvcHMiLCJ0YWciLCJ0aXRsZSIsImhhbmRsZV9pbnB1dCIsImtleW5hbWUiLCJ2aXNpYmlsaXR5IiwiRmlsdGVycyIsInRhZ3MiLCJtYXAiLCJrZXkiLCJJdGVtIiwicHJvamVjdCIsImhyZWYiLCJjaGFyQXQiLCJzY3JvbGxUb1RvcCIsImR1cmF0aW9uIiwic2V0VGltZW91dCIsInRvZ2dsZV9maWx0ZXJzIiwiY3Vyc29yIiwiZGVzY3JpcHRpb24iLCJqb2luIiwiYmlnX3Byb2plY3RzIiwibGVuZ3RoIiwibWljcm9fcHJvamVjdHMiLCJwcm9qZWN0X2NvdW50Iiwic2hvd19maWx0ZXJzIiwidXBkYXRlX2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFDUCxBQUFROzs7O0FBRVIsQUFBTzs7Ozs7Ozs7QUFEUCxJQUFJLFNBQVMsc0JBQWIsQUFBb0I7OztBQUdwQixJQUFNLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBQyxPQUFEOzJCQUNYLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFBc0M7QUFBdEM7S0FBQSxRQUFzQyxBQUFNLElBQTVDLEFBQWdELE9BQU87O3NCQUFBO3dCQUF2RCxBQUF1RCxBQUNuRDtBQURtRDtBQUFBLHdCQUNuRCxBQUFDO2VBQUQsQUFDVSxBQUNOO2lCQUFTLG1CQUFBO21CQUFNLE1BQUEsQUFBTSxhQUFhLE1BQW5CLEFBQXlCLFNBQS9CLEFBQU0sQUFBa0M7QUFGckQsQUFHSTtpQkFBUyxNQUFBLEFBQU0sSUFBTixBQUFVLGVBSHZCLEFBR3NDLEFBQ2xDO21CQUFXLE1BQUEsQUFBTSxJQUFOLEFBQVUsZUFK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QTNDWixBQXFDUSxBQU1JLEFBR1A7QUFITztBQUFBLGVBR1AsQUFBTSxlQUFOLEFBQXFCLFNBQXJCLEFBQThCLHFCQUMzQixjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLGNBQUEsUUFBSSxXQUFKLEFBQWM7c0JBQWQ7d0JBQUE7QUFBQTtPQURKLEFBQ0ksQUFDQSxtQ0FBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FGSixBQUVJLEFBQ0Msa0ZBQUEsQUFBTSxlQUFOLEFBQXFCLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxLQUFRLEFBQ3hDOzZDQUFPLEFBQUMsUUFBSyxLQUFOLEFBQVcsS0FBSyxjQUFjLE1BQTlCLEFBQW9DLGNBQWMsZ0JBQWdCLE1BQWxFLEFBQXdFLGdCQUFnQixTQUF4RixBQUFpRzswQkFBakc7NEJBQVAsQUFBTyxBQUNWO0FBRFU7U0FBQTtBQUpmLEFBR0ssQUFFRTs7c0JBQUE7d0JBckRKLEFBQ1gsQUErQ1EsQUFLTztBQUFBO0FBQUE7QUFyRG5CIiwiZmlsZSI6Ikxpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Fhcm9uL0RvY3VtZW50cy9yZXBvcy9hYXJvbmNvZGluZzIvYWFyb25jb2RpbmcvZnJvbnRlbmQifQ==