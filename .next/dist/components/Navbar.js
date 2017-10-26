'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _reactRedux = require('react-redux');

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _reactstrap = require('reactstrap');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Logo = require('./Logo.js');

var _Logo2 = _interopRequireDefault(_Logo);

var _permissions = require('../services/permissions.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aaron/Documents/repos/aaroncoding/aaroncoding/frontend/components/Navbar.js';


// Home
var HomeLinkMobile = function HomeLinkMobile(props) {
    return _react2.default.createElement(_MenuItem2.default, { className: 'homelink--mobile', href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, 'Home');
};
var HomeLinkDesktop = function HomeLinkDesktop(props) {
    return _react2.default.createElement(_RaisedButton2.default, {
        className: 'homelink--desktop menubar__button--link',
        label: 'Home',
        href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    });
};

// User Auth
var UserLinkMobile = function UserLinkMobile(props) {
    var current_user = props.current_user;
    var profile = { owner: current_user.id };

    var details_perm = (0, _permissions.details_user_permission)(current_user, profile);
    var update_perm = (0, _permissions.update_user_permission)(current_user, profile);
    var delete_perm = (0, _permissions.delete_user_permission)(current_user, profile);
    var has_permission = details_perm || update_perm || delete_perm;

    if (has_permission && props.authenticated) {
        return _react2.default.createElement(_MenuItem2.default, { href: '/user/' + props.current_user.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 44
            }
        }, props.current_user.name);
    } else {
        return _react2.default.createElement('span', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 49
            }
        });
    }
};
var UserLinkDesktop = function UserLinkDesktop(props) {
    var current_user = props.current_user;
    var profile = { owner: current_user.id };

    var details_perm = (0, _permissions.details_user_permission)(current_user, profile);
    var update_perm = (0, _permissions.update_user_permission)(current_user, profile);
    var delete_perm = (0, _permissions.delete_user_permission)(current_user, profile);
    var has_permission = details_perm || update_perm || delete_perm;

    if (has_permission && props.authenticated) {
        return _react2.default.createElement(_RaisedButton2.default, {
            className: 'menubar__button--link userlink--desktop',
            label: props.current_user.name,
            href: '/user/' + props.current_user.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 63
            }
        });
    } else {
        return _react2.default.createElement('span', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 69
            }
        });
    }
};

var LoginLinkMobile = function LoginLinkMobile(props) {
    if (!props.authenticated) {
        return _react2.default.createElement(_MenuItem2.default, { href: '/login', className: 'menubar__button--link', __source: {
                fileName: _jsxFileName,
                lineNumber: 75
            }
        }, 'Login');
    } else {
        return _react2.default.createElement('span', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 77
            }
        });
    }
};
var LoginLinkDesktop = function LoginLinkDesktop(props) {
    if (!props.authenticated) {
        return _react2.default.createElement(_RaisedButton2.default, {
            href: '/login',
            label: 'login',
            className: 'menubar__button--link', __source: {
                fileName: _jsxFileName,
                lineNumber: 83
            }
        });
    } else {
        return _react2.default.createElement('span', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 89
            }
        });
    }
};

var LogoutLinkMobile = function LogoutLinkMobile(props) {
    if (props.authenticated) {
        return _react2.default.createElement(_MenuItem2.default, {
            onClick: function onClick() {
                return props.logout();
            },
            className: 'menubar__button--link', __source: {
                fileName: _jsxFileName,
                lineNumber: 96
            }
        }, 'Logout');
    } else {
        return _react2.default.createElement('span', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 101
            }
        });
    }
};
var LogoutLinkDesktop = function LogoutLinkDesktop(props) {
    if (props.authenticated) {
        return _react2.default.createElement(_RaisedButton2.default, {
            className: 'menubar__button--link',
            label: 'Logout',
            onClick: function onClick() {
                return props.logout();
            }, __source: {
                fileName: _jsxFileName,
                lineNumber: 107
            }
        });
    } else {
        return _react2.default.createElement('span', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 113
            }
        });
    }
};

var SignupLinkMobile = function SignupLinkMobile(props) {
    if ((0, _permissions.create_user_permission)(props.current_user)) {
        return _react2.default.createElement(_MenuItem2.default, { href: '/signup', className: 'menubar__button--link', __source: {
                fileName: _jsxFileName,
                lineNumber: 121
            }
        }, 'Signup');
    } else {
        return _react2.default.createElement('span', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 124
            }
        });
    }
};
var SignupLinkDesktop = function SignupLinkDesktop(props) {
    if ((0, _permissions.create_user_permission)(props.current_user)) {
        return _react2.default.createElement(_RaisedButton2.default, { href: '/signup', className: 'menubar__button--link', label: 'Signup', __source: {
                fileName: _jsxFileName,
                lineNumber: 130
            }
        });
    } else {
        return _react2.default.createElement('span', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 133
            }
        });
    }
};

var AboutMobile = function AboutMobile(props) {
    return _react2.default.createElement(_MenuItem2.default, { href: '/about', className: 'menubar__button--link', __source: {
            fileName: _jsxFileName,
            lineNumber: 139
        }
    }, 'About');
};
var AboutDesktop = function AboutDesktop(props) {
    return _react2.default.createElement(_RaisedButton2.default, { href: '/about', className: 'menubar__button--link', label: 'About', __source: {
            fileName: _jsxFileName,
            lineNumber: 144
        }
    });
};
var ProjectsMobile = function ProjectsMobile(props) {
    return _react2.default.createElement(_MenuItem2.default, { href: '/projects', className: 'menubar__button--link', __source: {
            fileName: _jsxFileName,
            lineNumber: 149
        }
    }, 'Projects');
};
var ProjectsDesktop = function ProjectsDesktop(props) {
    return _react2.default.createElement(_RaisedButton2.default, { href: '/projects', className: 'menubar__button--link', label: 'Projects', __source: {
            fileName: _jsxFileName,
            lineNumber: 154
        }
    });
};

// Content
var content_types = [{ title: 'Users', permissions: _permissions.list_user_permission }];

var ContentLinksMobile = function ContentLinksMobile(props) {
    return _react2.default.createElement('ul', { className: 'navbar-nav mr-auto', __source: {
            fileName: _jsxFileName,
            lineNumber: 164
        }
    }, content_types.map(function (item, key) {
        var has_permission = true;
        if ('permissions' in item) {
            has_permission = item.permissions(props.current_user);
        }
        if (has_permission) {
            var lower = item.title.toLowerCase();
            return _react2.default.createElement('li', { key: key, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 173
                }
            }, _react2.default.createElement(_MenuItem2.default, {
                href: '/' + lower,
                className: 'menubar__button--link',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 174
                }
            }, item.title));
        } else {
            return _react2.default.createElement('span', { key: key, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                }
            });
        }
    }));
};
var ContentLinksDesktop = function ContentLinksDesktop(props) {
    return _react2.default.createElement('ul', { className: 'navbar-nav mr-auto', __source: {
            fileName: _jsxFileName,
            lineNumber: 187
        }
    }, content_types.map(function (item, key) {
        var has_permission = true;
        if ('permissions' in item) {
            has_permission = item.permissions(props.current_user);
        }
        if (has_permission) {
            var lower = item.title.toLowerCase();
            return _react2.default.createElement('li', { key: key, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 196
                }
            }, _react2.default.createElement(_RaisedButton2.default, {
                href: '/' + lower,
                className: 'menubar__button--link',
                label: item.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                }
            }));
        } else {
            return _react2.default.createElement('span', { key: key, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 204
                }
            });
        }
    }));
};
//connect(state => state)(({ menu_color })(NavContainer)

var NavContainer = function (_React$Component) {
    (0, _inherits3.default)(NavContainer, _React$Component);

    function NavContainer(props) {
        (0, _classCallCheck3.default)(this, NavContainer);

        var _this = (0, _possibleConstructorReturn3.default)(this, (NavContainer.__proto__ || (0, _getPrototypeOf2.default)(NavContainer)).call(this, props));

        _this.state = {
            name: _this.props.current_user.name,
            id: _this.props.current_user.id,
            isOpen: false
        };
        _this.update_user = _this.update_user.bind(_this);
        _this.logout = _this.logout.bind(_this);
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(NavContainer, [{
        key: 'toggle',
        value: function toggle() {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }, {
        key: 'update_user',
        value: function update_user(current_user) {
            this.setState({
                name: current_user.name,
                id: current_user.id
            });
        }
    }, {
        key: 'logout',
        value: function logout() {
            var _this2 = this;

            (0, _isomorphicUnfetch2.default)('/logout', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(function (data) {
                _this2.update_user({
                    id: null,
                    name: null
                });
                _this2.setState({ id: null, name: null });
                _index2.default.push({ pathname: '/', as: '/' });
            }).catch(function (e) {
                return console.error(e);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var authenticated = !!this.state.id && !!this.state.name;

            return _react2.default.createElement(_Paper2.default, { style: {
                    backgroundColor: this.props.menu_color,
                    minHeight: '3.5em' },
                className: 'menubar__wrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 256
                }
            }, _react2.default.createElement(MobileMenubar, {
                current_user: this.props.current_user,
                toggle: this.toggle,
                isOpen: this.state.isOpen,
                logout: this.logout,
                authenticated: authenticated, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 260
                }
            }), _react2.default.createElement(DesktopMenubar, {
                current_user: this.props.current_user,
                authenticated: authenticated,
                logout: this.logout, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 266
                }
            }));
        }
    }]);

    return NavContainer;
}(_react2.default.Component);

var MobileMenubar = function MobileMenubar(props) {
    var style = props.isOpen ? {} : { display: 'none' };
    return _react2.default.createElement('div', { className: 'menubar--mobile', __source: {
            fileName: _jsxFileName,
            lineNumber: 278
        }
    }, _react2.default.createElement(_reactstrap.Navbar, { className: 'menubar__button--regular', toggleable: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 279
        }
    }, _react2.default.createElement(_reactstrap.Nav, { navbar: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 280
        }
    }, _react2.default.createElement(_reactstrap.NavItem, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 281
        }
    }, _react2.default.createElement(_RaisedButton2.default, {
        label: 'Menu',
        onClick: props.toggle, __source: {
            fileName: _jsxFileName,
            lineNumber: 282
        }
    })))), _react2.default.createElement(_Drawer2.default, { style: style, open: props.isOpen, __source: {
            fileName: _jsxFileName,
            lineNumber: 288
        }
    }, _react2.default.createElement(_RaisedButton2.default, {
        className: 'menubar__button--link menubar__button--close',
        onClick: props.toggle,
        label: 'Close (X)',
        secondary: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 289
        }
    }), _react2.default.createElement(LogoutLinkMobile, { authenticated: props.authenticated, logout: props.logout, __source: {
            fileName: _jsxFileName,
            lineNumber: 294
        }
    }), _react2.default.createElement(UserLinkMobile, { authenticated: props.authenticated, current_user: props.current_user, __source: {
            fileName: _jsxFileName,
            lineNumber: 295
        }
    }), _react2.default.createElement(AboutMobile, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 296
        }
    }), _react2.default.createElement(ProjectsMobile, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 297
        }
    }), _react2.default.createElement(ContentLinksMobile, { current_user: props.current_user, __source: {
            fileName: _jsxFileName,
            lineNumber: 298
        }
    })));
};

var DesktopMenubar = function DesktopMenubar(props) {
    return _react2.default.createElement('div', { className: 'menubar--desktop', __source: {
            fileName: _jsxFileName,
            lineNumber: 306
        }
    }, _react2.default.createElement(_reactstrap.Navbar, { toggleable: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 307
        }
    }, _react2.default.createElement(_reactstrap.Nav, { className: 'ml-auto', navbar: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 308
        }
    }, _react2.default.createElement(_reactstrap.NavItem, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 309
        }
    }, _react2.default.createElement(LogoutLinkDesktop, { authenticated: props.authenticated, logout: props.logout, __source: {
            fileName: _jsxFileName,
            lineNumber: 310
        }
    })), _react2.default.createElement(_reactstrap.NavItem, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 312
        }
    }, _react2.default.createElement(UserLinkDesktop, { authenticated: props.authenticated, current_user: props.current_user, __source: {
            fileName: _jsxFileName,
            lineNumber: 313
        }
    })), _react2.default.createElement(_reactstrap.NavItem, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 315
        }
    }, _react2.default.createElement(AboutDesktop, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 316
        }
    })), _react2.default.createElement(_reactstrap.NavItem, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 318
        }
    }, _react2.default.createElement(ProjectsDesktop, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 319
        }
    })), _react2.default.createElement(_reactstrap.NavItem, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 321
        }
    }, _react2.default.createElement(ContentLinksDesktop, { current_user: props.current_user, __source: {
            fileName: _jsxFileName,
            lineNumber: 322
        }
    })))));
};

var mapStateToProps = function mapStateToProps(_ref) {
    var menu_color = _ref.menu_color;
    return { menu_color: menu_color };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        // addCount: bindActionCreators(addCount, dispatch)
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NavContainer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbImZldGNoIiwiTGluayIsIlJlYWN0IiwiUm91dGVyIiwiY29ubmVjdCIsIkRyYXdlciIsIk1lbnVJdGVtIiwiTmF2YmFyIiwiTmF2IiwiTmF2SXRlbSIsIlBhcGVyIiwiUmFpc2VkQnV0dG9uIiwiTG9nbyIsImNyZWF0ZV91c2VyX3Blcm1pc3Npb24iLCJsaXN0X3VzZXJfcGVybWlzc2lvbiIsImRldGFpbHNfdXNlcl9wZXJtaXNzaW9uIiwidXBkYXRlX3VzZXJfcGVybWlzc2lvbiIsImRlbGV0ZV91c2VyX3Blcm1pc3Npb24iLCJIb21lTGlua01vYmlsZSIsInByb3BzIiwiSG9tZUxpbmtEZXNrdG9wIiwiVXNlckxpbmtNb2JpbGUiLCJjdXJyZW50X3VzZXIiLCJwcm9maWxlIiwib3duZXIiLCJpZCIsImRldGFpbHNfcGVybSIsInVwZGF0ZV9wZXJtIiwiZGVsZXRlX3Blcm0iLCJoYXNfcGVybWlzc2lvbiIsImF1dGhlbnRpY2F0ZWQiLCJuYW1lIiwiVXNlckxpbmtEZXNrdG9wIiwiTG9naW5MaW5rTW9iaWxlIiwiTG9naW5MaW5rRGVza3RvcCIsIkxvZ291dExpbmtNb2JpbGUiLCJsb2dvdXQiLCJMb2dvdXRMaW5rRGVza3RvcCIsIlNpZ251cExpbmtNb2JpbGUiLCJTaWdudXBMaW5rRGVza3RvcCIsIkFib3V0TW9iaWxlIiwiQWJvdXREZXNrdG9wIiwiUHJvamVjdHNNb2JpbGUiLCJQcm9qZWN0c0Rlc2t0b3AiLCJjb250ZW50X3R5cGVzIiwidGl0bGUiLCJwZXJtaXNzaW9ucyIsIkNvbnRlbnRMaW5rc01vYmlsZSIsIm1hcCIsIml0ZW0iLCJrZXkiLCJsb3dlciIsInRvTG93ZXJDYXNlIiwiQ29udGVudExpbmtzRGVza3RvcCIsIk5hdkNvbnRhaW5lciIsInN0YXRlIiwiaXNPcGVuIiwidXBkYXRlX3VzZXIiLCJiaW5kIiwidG9nZ2xlIiwic2V0U3RhdGUiLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJ0aGVuIiwicHVzaCIsInBhdGhuYW1lIiwiYXMiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsImUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtZW51X2NvbG9yIiwibWluSGVpZ2h0IiwiQ29tcG9uZW50IiwiTW9iaWxlTWVudWJhciIsInN0eWxlIiwiZGlzcGxheSIsIkRlc2t0b3BNZW51YmFyIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBRVQsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVEsQUFBSzs7QUFDdEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFDSSxBQUNBLEFBQ0EsQUFDQSxBQUNBOzs7Ozs7O0FBRUo7QUFDQSxJQUFNLGlCQUFpQixTQUFqQixBQUFpQixlQUFBLEFBQUMsT0FBVSxBQUM5QjsyQkFBTyxBQUFDLG9DQUFTLFdBQVYsQUFBb0Isb0JBQW1CLE1BQXZDLEFBQTRDO3NCQUE1Qzt3QkFBQTtBQUFBO0tBQUEsRUFBUCxBQUFPLEFBQ1Y7QUFGRDtBQUdBLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBVSxBQUMvQjsyQkFBTyxBQUFDO21CQUFELEFBQ08sQUFDVjtlQUZHLEFBRUcsQUFDTjtjQUhHLEFBR0U7c0JBSEY7d0JBQVAsQUFBTyxBQUlWO0FBSlU7QUFDSCxLQURHO0FBRFg7O0FBT0E7QUFDQSxJQUFNLGlCQUFpQixTQUFqQixBQUFpQixzQkFBUyxBQUM1QjtRQUFJLGVBQWUsTUFBbkIsQUFBeUIsQUFDekI7UUFBSSxVQUFVLEVBQUUsT0FBTyxhQUF2QixBQUFjLEFBQXNCLEFBRXBDOztRQUFJLGVBQWUsMENBQUEsQUFBd0IsY0FBM0MsQUFBbUIsQUFB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eEM7d0JBckJaLEFBQ0ksQUFVSSxBQVVJLEFBSWY7QUFKZTs7QUF2QmhCOztBQTZCQSxJQUFNLGlCQUFpQixTQUFqQixBQUFpQixlQUFBLEFBQUMsT0FBVSxBQUM5QjsyQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtLQUFBLGtCQUNJLEFBQUMsb0NBQU8sWUFBUjtzQkFBQTt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQyxpQ0FBSSxXQUFMLEFBQWUsV0FBVSxRQUF6QjtzQkFBQTt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEscUNBQ0ksQUFBQyxxQkFBa0IsZUFBZSxNQUFsQyxBQUF3QyxlQUFlLFFBQVEsTUFBL0QsQUFBcUU7c0JBQXJFO3dCQUZSLEFBQ0ksQUFDSSxBQUVKO0FBRkk7eUJBRUosQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEscUNBQ0ksQUFBQyxtQkFBZ0IsZUFBZSxNQUFoQyxBQUFzQyxlQUFlLGNBQWMsTUFBbkUsQUFBeUU7c0JBQXpFO3dCQUxSLEFBSUksQUFDSSxBQUVKO0FBRkk7eUJBRUosQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEscUNBQ0ksQUFBQzs7c0JBQUQ7d0JBUlIsQUFPSSxBQUNJLEFBRUo7QUFGSTtBQUFBLHlCQUVKLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHFDQUNJLEFBQUM7O3NCQUFEO3dCQVhSLEFBVUksQUFDSSxBQUVKO0FBRkk7QUFBQSx5QkFFSixBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSxxQ0FDSSxBQUFDLHVCQUFvQixjQUFjLE1BQW5DLEFBQXlDO3NCQUF6Qzt3QkFqQnBCLEFBQ0ksQUFDSSxBQUNJLEFBYUksQUFDSSxBQU12QjtBQU51Qjs7QUFsQnhCOztBQTBCQSxJQUFNLGtCQUFrQixTQUFsQixBQUFrQixzQkFBQTtRQUFBLEFBQUcsa0JBQUgsQUFBRztXQUFrQixFQUFFLFlBQXZCLEFBQXFCO0FBQTdDOztBQUVBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBYSxBQUNyQzs7QUFBQSxBQUFPLEFBR1Y7QUFIVSxBQUNQO0FBRkosQUFNQTs7a0JBQWUseUJBQUEsQUFBUSxpQkFBUixBQUF5QixvQkFBeEMsQUFBZSxBQUE2QyIsImZpbGUiOiJOYXZiYXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Fhcm9uL0RvY3VtZW50cy9yZXBvcy9hYXJvbmNvZGluZy9hYXJvbmNvZGluZy9mcm9udGVuZCJ9