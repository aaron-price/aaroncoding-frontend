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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aaron/Documents/repos/aaroncoding/aaroncoding/frontend/components/HoverPaper.js';


var HoverPaper = function (_Component) {
    (0, _inherits3.default)(HoverPaper, _Component);

    function HoverPaper(props) {
        (0, _classCallCheck3.default)(this, HoverPaper);

        var _this = (0, _possibleConstructorReturn3.default)(this, (HoverPaper.__proto__ || (0, _getPrototypeOf2.default)(HoverPaper)).call(this, props));

        _this.state = { hover: false };
        _this.update_hover = _this.update_hover.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(HoverPaper, [{
        key: 'update_hover',
        value: function update_hover(value) {
            this.setState({ hover: value });
        }
    }, {
        key: 'click',
        value: function click() {
            // @TODO
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var max_z = !!this.props.max ? this.props.max : 5;
            var classes = !!this.props.classes ? this.props.classes : "";
            var href = this.props.href;
            var style = this.props.style || {};
            return _react2.default.createElement(_Paper2.default, {
                onMouseOver: function onMouseOver() {
                    return _this2.update_hover(true);
                },
                onMouseOut: function onMouseOut() {
                    return _this2.update_hover(false);
                },
                onClick: function onClick() {
                    return _this2.click();
                },
                className: classes,
                style: style,
                zDepth: this.state.hover ? max_z : 1, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, href ? _react2.default.createElement('a', { href: href, className: 'stealth_link', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, this.props.children) : this.props.children);
        }
    }]);

    return HoverPaper;
}(_react.Component);

exports.default = HoverPaper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG92ZXJQYXBlci5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQYXBlciIsIkhvdmVyUGFwZXIiLCJwcm9wcyIsInN0YXRlIiwiaG92ZXIiLCJ1cGRhdGVfaG92ZXIiLCJiaW5kIiwidmFsdWUiLCJzZXRTdGF0ZSIsIm1heF96IiwibWF4IiwiY2xhc3NlcyIsImhyZWYiLCJzdHlsZSIsImNsaWNrIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU87Ozs7Ozs7OztJLEFBRUQ7d0NBQ0Y7O3dCQUFBLEFBQVksT0FBTzs0Q0FBQTs7a0pBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUssUUFBUSxFQUFFLE9BQWYsQUFBYSxBQUFTLEFBQ3RCO2NBQUEsQUFBSyxlQUFlLE1BQUEsQUFBSyxhQUFMLEFBQWtCLEtBSHZCLEFBR2Y7ZUFDSDs7Ozs7cUNBQ1ksQSxPQUFPLEFBQ2hCO2lCQUFBLEFBQUssU0FBUyxFQUFFLE9BQWhCLEFBQWMsQUFBUyxBQUMxQjs7OztnQ0FDTyxBQUNMO0FBQ0Y7Ozs7aUNBQ1E7eUJBQ0w7O2dCQUFJLFFBQVEsQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUFQLEFBQWEsTUFBTSxLQUFBLEFBQUssTUFBeEIsQUFBOEIsTUFBMUMsQUFBZ0QsQUFDaEQ7Z0JBQUksVUFBVSxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQVAsQUFBYSxVQUFVLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxVQUFoRCxBQUEwRCxBQUMxRDtnQkFBSSxPQUFPLEtBQUEsQUFBSyxNQUFoQixBQUFzQixBQUN0QjtnQkFBSSxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBdkIsQUFBZ0MsQUFDaEM7bUNBQ0ksQUFBQzs2QkFDZ0IsdUJBQUE7MkJBQU0sT0FBQSxBQUFLLGFBQVgsQUFBTSxBQUFrQjtBQUR6QyxBQUVJOzRCQUFZLHNCQUFBOzJCQUFNLE9BQUEsQUFBSyxhQUFYLEFBQU0sQUFBa0I7QUFGeEMsQUFHSTt5QkFBUyxtQkFBQTsyQkFBTSxPQUFOLEFBQU0sQUFBSztBQUh4QixBQUlJOzJCQUpKLEFBSWUsQUFDWDt1QkFMSixBQUtXLEFBQ1A7d0JBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFFBTi9CLEFBTXVDOzhCQU52QztnQ0FBQSxBQU9TO0FBUFQ7QUFDSSxhQURKLHlCQVFnQixjQUFBLE9BQUcsTUFBSCxBQUFTLE1BQU0sV0FBZixBQUF5Qjs4QkFBekI7Z0NBQUEsQUFDSztBQURMO2FBQUEsT0FDSyxBQUFLLE1BRmpCLEFBQ08sQUFDZ0IsWUFHaEIsS0FBQSxBQUFLLE1BYnpCLEFBQ0ksQUFZMkIsQUFNbEM7Ozs7O0FBcENvQixBLEFBc0N6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJIb3ZlclBhcGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hYXJvbi9Eb2N1bWVudHMvcmVwb3MvYWFyb25jb2RpbmcvYWFyb25jb2RpbmcvZnJvbnRlbmQifQ==