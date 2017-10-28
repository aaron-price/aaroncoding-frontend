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

// function google_analytics() {
//     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//             (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//     })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

//     ga('create', 'UA-99298519-1', 'auto');
//     ga('send', 'pageview');
// }

exports.default = function (props) {
    return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, 'Aaron Price, Web Developer'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css', integrity: 'sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ', crossOrigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }), _react2.default.createElement('link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon/favicon.ico', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }), _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':\n                    new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],\n                    j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\n                    \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);\n                    })(window,document,\'script\',\'dataLayer\',\'GTM-K9SDT53\');' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    })), _react2.default.createElement('noscript', { dangerouslySetInnerHTML: { __html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K9SDT53" height="0" width="0" style="display:none;visibility:hidden;"></iframe>' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }), _react2.default.createElement('div', { className: 'body', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }, _react2.default.createElement(_Navbar2.default, {
        className: 'body_top',
        current_user: props.current_user,
        csrftoken: props.csrftoken, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }), _react2.default.createElement(_Paper2.default, { className: 'body_middle', __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }, props.children), _react2.default.createElement(Footer, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }))));
};

var Footer = function Footer(props) {
    return _react2.default.createElement('footer', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 56
        }
    }, _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.1.1.slim.min.js', integrity: 'sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n', crossOrigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 57
        }
    }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js', integrity: 'sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb', crossOrigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js', integrity: 'sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn', crossOrigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZC5qcyJdLCJuYW1lcyI6WyJIZWFkIiwiTmF2YmFyIiwiaW5qZWN0VGFwRXZlbnRQbHVnaW4iLCJNdWlUaGVtZVByb3ZpZGVyIiwiZ2V0TXVpVGhlbWUiLCJQYXBlciIsInN0eWxlc2hlZXQiLCJlIiwibXVpVGhlbWUiLCJ1c2VyQWdlbnQiLCJwcm9wcyIsIl9faHRtbCIsImN1cnJlbnRfdXNlciIsImNzcmZ0b2tlbiIsImNoaWxkcmVuIiwiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7OztBQVBQOzs7QUFTQSxJQUFJLEFBQUU7QUFBd0I7QUFBOUIsRUFBK0IsT0FBQSxBQUFNLEdBQUcsQUFBRTtBQUMxQyxJQUFNLFdBQVcsMkJBQVksRUFBRSxXQUEvQixBQUFpQixBQUFZLEFBQWE7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEFBRUE7O2tCQUFlLFVBQUEsQUFBQyxPQUFEOzJCQUNYLEFBQUMsNENBQWlCLFVBQWxCLEFBQTRCO3NCQUE1Qjt3QkFBQSxBQUNJO0FBREo7S0FBQSxrQkFDSSxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0EsdUVBQU0sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsaUZBQWdGLFdBQTVHLEFBQXNILDJFQUEwRSxhQUFoTSxBQUE0TTtzQkFBNU07d0JBRkosQUFFSSxBQUNBO0FBREE7Z0RBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7c0JBQTlCO3dCQUhKLEFBR0ksQUFDQTtBQURBO2dEQUNNLEtBQU4sQUFBVSxpQkFBZ0IsTUFBMUIsQUFBK0IsZ0JBQWUsTUFBOUMsQUFBbUQ7c0JBQW5EO3dCQUpKLEFBSUksQUFDQTtBQURBO2tEQUNRLHlCQUF5QixFQUFDLFFBQWxDLEFBQWlDO3NCQUFqQzt3QkFOUixBQUNJLEFBS0ksQUFPSjtBQVBJO3FEQU9NLHlCQUF5QixFQUFDLFFBQXBDLEFBQW1DLEFBQVM7c0JBQTVDO3dCQWJKLEFBYUksQUFDQTtBQURBO2lEQUNPLHlCQUF5QixFQUFoQyxBQUFnQyxBQUFFLEFBQVE7c0JBQTFDO3dCQWRKLEFBY0ksQUFFQTtBQUZBO3dCQUVBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO3VCQUNJLEFBQUM7bUJBQUQsQUFDYyxBQUNWO3NCQUFjLE1BRmxCLEFBRXdCLEFBQ3BCO21CQUFXLE1BSGYsQUFHcUI7c0JBSHJCO3dCQURKLEFBQ0ksQUFJQTtBQUpBO0FBQ0ksd0JBR0osQUFBQyxpQ0FBTSxXQUFQLEFBQWlCO3NCQUFqQjt3QkFBQSxBQUNLO0FBREw7YUFMSixBQUtJLEFBQ1csQUFFWCx5Q0FBQSxBQUFDOztzQkFBRDt3QkExQkQsQUFDWCxBQUNJLEFBZ0JJLEFBUUk7QUFBQTtBQUFBO0FBMUJoQjs7QUFnQ0EsSUFBTSxTQUFTLFNBQVQsQUFBUyxPQUFBLEFBQUMsT0FBRDsyQkFDWCxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLDRDQUNZLEtBQVIsQUFBWSxvREFBbUQsV0FBL0QsQUFBeUUsMkVBQTBFLGFBQW5KLEFBQStKO3NCQUEvSjt3QkFESixBQUNJLEFBQ0E7QUFEQTtrREFDUSxLQUFSLEFBQVksd0VBQXVFLFdBQW5GLEFBQTZGLDJFQUEwRSxhQUF2SyxBQUFtTDtzQkFBbkw7d0JBRkosQUFFSSxBQUNBO0FBREE7a0RBQ1EsS0FBUixBQUFZLCtFQUE4RSxXQUExRixBQUFvRywyRUFBMEUsYUFBOUssQUFBMEw7c0JBQTFMO3dCQUpPLEFBQ1gsQUFHSTtBQUFBOztBQUpSIiwiZmlsZSI6IkhlYWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Fhcm9uL0RvY3VtZW50cy9yZXBvcy9hYXJvbmNvZGluZy9hYXJvbmNvZGluZy9mcm9udGVuZCJ9