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

var _jsxFileName = '/Users/aaron/Documents/repos/aaroncoding2/aaroncoding/frontend/components/Head.js';


try {
    (0, _reactTapEventPlugin2.default)();
} catch (e) {}
var muiTheme = (0, _getMuiTheme2.default)({ userAgent: false });

exports.default = function (props) {
    return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, 'Aaron Price, Web Developer'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css', integrity: 'sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ', crossOrigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    })), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }), _react2.default.createElement('div', { className: 'body', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, _react2.default.createElement(_Navbar2.default, {
        className: 'body_top',
        current_user: props.current_user,
        csrftoken: props.csrftoken, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }), _react2.default.createElement(_Paper2.default, { className: 'body_middle', __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, props.children), _react2.default.createElement(Footer, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }))));
};

var Footer = function Footer(props) {
    return _react2.default.createElement('footer', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.1.1.slim.min.js', integrity: 'sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n', crossOrigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js', integrity: 'sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb', crossOrigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js', integrity: 'sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn', crossOrigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZC5qcyJdLCJuYW1lcyI6WyJIZWFkIiwiTmF2YmFyIiwiaW5qZWN0VGFwRXZlbnRQbHVnaW4iLCJNdWlUaGVtZVByb3ZpZGVyIiwiZ2V0TXVpVGhlbWUiLCJQYXBlciIsInN0eWxlc2hlZXQiLCJlIiwibXVpVGhlbWUiLCJ1c2VyQWdlbnQiLCJwcm9wcyIsIl9faHRtbCIsImN1cnJlbnRfdXNlciIsImNzcmZ0b2tlbiIsImNoaWxkcmVuIiwiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBSSxBQUFFO0FBQXdCO0FBQTlCLEVBQStCLE9BQUEsQUFBTSxHQUFHLEFBQUU7QUFDMUMsSUFBTSxXQUFXLDJCQUFZLEVBQUUsV0FBL0IsQUFBaUIsQUFBWSxBQUFhLEFBRTFDOztrQkFBZSxVQUFBLEFBQUMsT0FBRDsyQkFDWCxBQUFDLDRDQUFpQixVQUFsQixBQUE0QjtzQkFBNUI7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREosQUFDSSxBQUNBLHVFQUFNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLGlGQUFnRixXQUE1RyxBQUFzSCwyRUFBMEUsYUFBaE0sQUFBNE07c0JBQTVNO3dCQUZKLEFBRUksQUFDQTtBQURBO2dEQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO3NCQUE5Qjt3QkFKUixBQUNJLEFBR0ksQUFFSjtBQUZJO2tEQUVHLHlCQUF5QixFQUFoQyxBQUFnQyxBQUFFLEFBQVE7c0JBQTFDO3dCQU5KLEFBTUksQUFFQTtBQUZBO3dCQUVBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO3VCQUNJLEFBQUM7bUJBQUQsQUFDYyxBQUNWO3NCQUFjLE1BRmxCLEFBRXdCLEFBQ3BCO21CQUFXLE1BSGYsQUFHcUI7c0JBSHJCO3dCQURKLEFBQ0ksQUFJQTtBQUpBO0FBQ0ksd0JBR0osQUFBQyxpQ0FBTSxXQUFQLEFBQWlCO3NCQUFqQjt3QkFBQSxBQUNLO0FBREw7YUFMSixBQUtJLEFBQ1csQUFFWCx5Q0FBQSxBQUFDOztzQkFBRDt3QkFsQkQsQUFDWCxBQUNJLEFBUUksQUFRSTtBQUFBO0FBQUE7QUFsQmhCOztBQXdCQSxJQUFNLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBQyxPQUFEOzJCQUNYLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsNENBQ1ksS0FBUixBQUFZLG9EQUFtRCxXQUEvRCxBQUF5RSwyRUFBMEUsYUFBbkosQUFBK0o7c0JBQS9KO3dCQURKLEFBQ0ksQUFDQTtBQURBO2tEQUNRLEtBQVIsQUFBWSx3RUFBdUUsV0FBbkYsQUFBNkYsMkVBQTBFLGFBQXZLLEFBQW1MO3NCQUFuTDt3QkFGSixBQUVJLEFBQ0E7QUFEQTtrREFDUSxLQUFSLEFBQVksK0VBQThFLFdBQTFGLEFBQW9HLDJFQUEwRSxhQUE5SyxBQUEwTDtzQkFBMUw7d0JBSk8sQUFDWCxBQUdJO0FBQUE7O0FBSlIiLCJmaWxlIjoiSGVhZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWFyb24vRG9jdW1lbnRzL3JlcG9zL2Fhcm9uY29kaW5nMi9hYXJvbmNvZGluZy9mcm9udGVuZCJ9