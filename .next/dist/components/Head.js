'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Navbar = require('./Navbar.js');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _index = require('../styles/index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aaron/Documents/repos/aaroncoding/aaroncoding/frontend/components/Head.js';
/* eslint no-empty: 0 */


try {
    (0, _reactTapEventPlugin2.default)();
} catch (e) {}
var muiTheme = (0, _getMuiTheme2.default)({ userAgent: false });

exports.default = function (props) {
    return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, 'Aaron Price, Web Developer'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css', integrity: 'sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ', crossOrigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }), _react2.default.createElement('link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon/favicon.ico', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    })), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }), _react2.default.createElement('div', { className: 'body', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement(_Navbar2.default, {
        className: 'body_top',
        current_user: props.current_user,
        csrftoken: props.csrftoken, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }), _react2.default.createElement(_Paper2.default, { className: 'body_middle', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, props.children), _react2.default.createElement(Footer, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }))));
};

var Footer = function Footer(props) {
    return _react2.default.createElement('footer', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.1.1.slim.min.js', integrity: 'sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n', crossOrigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js', integrity: 'sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb', crossOrigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js', integrity: 'sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn', crossOrigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZC5qcyJdLCJuYW1lcyI6WyJIZWFkIiwiTmF2YmFyIiwiaW5qZWN0VGFwRXZlbnRQbHVnaW4iLCJNdWlUaGVtZVByb3ZpZGVyIiwiZ2V0TXVpVGhlbWUiLCJQYXBlciIsInN0eWxlc2hlZXQiLCJlIiwibXVpVGhlbWUiLCJ1c2VyQWdlbnQiLCJwcm9wcyIsIl9faHRtbCIsImN1cnJlbnRfdXNlciIsImNzcmZ0b2tlbiIsImNoaWxkcmVuIiwiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7OztBQVBQOzs7QUFTQSxJQUFJLEFBQUU7QUFBd0I7QUFBOUIsRUFBK0IsT0FBQSxBQUFNLEdBQUcsQUFBRTtBQUMxQyxJQUFNLFdBQVcsMkJBQVksRUFBRSxXQUEvQixBQUFpQixBQUFZLEFBQWEsQUFFMUM7O2tCQUFlLFVBQUEsQUFBQyxPQUFEOzJCQUNYLEFBQUMsNENBQWlCLFVBQWxCLEFBQTRCO3NCQUE1Qjt3QkFBQSxBQUNJO0FBREo7S0FBQSxrQkFDSSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0EsdUVBQU0sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsaUZBQWdGLFdBQTVHLEFBQXNILDJFQUEwRSxhQUFoTSxBQUE0TTtzQkFBNU07d0JBRkosQUFFSSxBQUNBO0FBREE7Z0RBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7c0JBQTlCO3dCQUhKLEFBR0ksQUFDQTtBQURBO2dEQUNNLEtBQU4sQUFBVSxpQkFBZ0IsTUFBMUIsQUFBK0IsZ0JBQWUsTUFBOUMsQUFBbUQ7c0JBQW5EO3dCQUxSLEFBQ0ksQUFJSSxBQUdKO0FBSEk7a0RBR0cseUJBQXlCLEVBQWhDLEFBQWdDLEFBQUUsQUFBUTtzQkFBMUM7d0JBUkosQUFRSSxBQUVBO0FBRkE7d0JBRUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQzttQkFBRCxBQUNjLEFBQ1Y7c0JBQWMsTUFGbEIsQUFFd0IsQUFDcEI7bUJBQVcsTUFIZixBQUdxQjtzQkFIckI7d0JBREosQUFDSSxBQUlBO0FBSkE7QUFDSSx3QkFHSixBQUFDLGlDQUFNLFdBQVAsQUFBaUI7c0JBQWpCO3dCQUFBLEFBQ0s7QUFETDthQUxKLEFBS0ksQUFDVyxBQUVYLHlDQUFBLEFBQUM7O3NCQUFEO3dCQXBCRCxBQUNYLEFBQ0ksQUFVSSxBQVFJO0FBQUE7QUFBQTtBQXBCaEI7O0FBMEJBLElBQU0sU0FBUyxTQUFULEFBQVMsT0FBQSxBQUFDLE9BQUQ7MkJBQ1gsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSw0Q0FDWSxLQUFSLEFBQVksb0RBQW1ELFdBQS9ELEFBQXlFLDJFQUEwRSxhQUFuSixBQUErSjtzQkFBL0o7d0JBREosQUFDSSxBQUNBO0FBREE7a0RBQ1EsS0FBUixBQUFZLHdFQUF1RSxXQUFuRixBQUE2RiwyRUFBMEUsYUFBdkssQUFBbUw7c0JBQW5MO3dCQUZKLEFBRUksQUFDQTtBQURBO2tEQUNRLEtBQVIsQUFBWSwrRUFBOEUsV0FBMUYsQUFBb0csMkVBQTBFLGFBQTlLLEFBQTBMO3NCQUExTDt3QkFKTyxBQUNYLEFBR0k7QUFBQTs7QUFKUiIsImZpbGUiOiJIZWFkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hYXJvbi9Eb2N1bWVudHMvcmVwb3MvYWFyb25jb2RpbmcvYWFyb25jb2RpbmcvZnJvbnRlbmQifQ==