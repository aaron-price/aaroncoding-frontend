'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeColor = exports.initStore = exports.addCount = exports.startClock = exports.serverRenderClock = exports.reducer = exports.actionTypes = undefined;

var _assign = require('next/node_modules/babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  menu_color: '#E57373'
};

var actionTypes = exports.actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK',
  CHANGE_COLOR: 'CHANGE_COLOR'

  // REDUCERS
};var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.CHANGE_COLOR:
      return (0, _assign2.default)({}, state, { menu_color: action.menu_color });
    case actionTypes.TICK:
      return (0, _assign2.default)({}, state, { lastUpdate: action.ts, light: !!action.light });
    case actionTypes.ADD:
      return (0, _assign2.default)({}, state, {
        count: state.count + 1
      });
    default:
      return state;
  }
};

// ACTIONS
var serverRenderClock = exports.serverRenderClock = function serverRenderClock(isServer) {
  return function (dispatch) {
    return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
  };
};

var startClock = exports.startClock = function startClock() {
  return function (dispatch) {
    return setInterval(function () {
      return dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() });
    }, 800);
  };
};

var addCount = exports.addCount = function addCount() {
  return function (dispatch) {
    return dispatch({ type: actionTypes.ADD });
  };
};

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;

  return (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};

var changeColor = exports.changeColor = function changeColor(menu_color) {
  return function (dispatch) {
    return dispatch({ type: actionTypes.CHANGE_COLOR, menu_color: menu_color });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L3N0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsImV4YW1wbGVJbml0aWFsU3RhdGUiLCJsYXN0VXBkYXRlIiwibGlnaHQiLCJjb3VudCIsIm1lbnVfY29sb3IiLCJhY3Rpb25UeXBlcyIsIkFERCIsIlRJQ0siLCJDSEFOR0VfQ09MT1IiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidHMiLCJzZXJ2ZXJSZW5kZXJDbG9jayIsImlzU2VydmVyIiwiZGlzcGF0Y2giLCJEYXRlIiwibm93Iiwic3RhcnRDbG9jayIsInNldEludGVydmFsIiwiYWRkQ291bnQiLCJpbml0U3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjaGFuZ2VDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQWE7O0FBQ3RCLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7O0FBRVAsSUFBTTtjQUFzQixBQUNkLEFBQ1o7U0FGMEIsQUFFbkIsQUFDUDtTQUgwQixBQUduQixBQUNQO2NBSkYsQUFBNEIsQUFJZCxBQUdkO0FBUDRCLEFBQzFCOztBQU1LLElBQU07T0FBYyxBQUNwQixBQUNMO1FBRnlCLEFBRW5CLEFBQ047Z0JBQWMsQUFHaEI7O0FBTk8sQUFBb0IsQUFPM0I7QUFQMkIsQUFDekIsTUFNVyw0QkFBVSxTQUFWLEFBQVUsVUFBeUM7TUFBeEMsQUFBd0MsNEVBQWhDLEFBQWdDO01BQVgsQUFBVyxtQkFDOUQ7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBSyxZQUFMLEFBQWlCLEFBQ2Y7YUFBTyxzQkFBQSxBQUFjLElBQWQsQUFBa0IsT0FBTyxFQUFFLFlBQVksT0FBOUMsQUFBTyxBQUF5QixBQUFxQixBQUN2RDtTQUFLLFlBQUwsQUFBaUIsQUFDZjthQUFPLHNCQUFBLEFBQWMsSUFBZCxBQUFrQixPQUFPLEVBQUUsWUFBWSxPQUFkLEFBQXFCLElBQUksT0FBTyxDQUFDLENBQUMsT0FBbEUsQUFBTyxBQUF5QixBQUF5QyxBQUMzRTtTQUFLLFlBQUwsQUFBaUIsQUFDZjttQ0FBTyxBQUFjLElBQWQsQUFBa0I7ZUFDaEIsTUFBQSxBQUFNLFFBRGYsQUFBTyxBQUF5QixBQUNULEFBRXpCO0FBSGtDLEFBQzlCLE9BREs7QUFHQTthQVRYLEFBU1csQUFBTyxBQUVuQjs7QUFaTSxDQUFBOztBQWNQLEFBQ0E7QUFBTyxJQUFNLGdEQUFvQixTQUFwQixBQUFvQixrQkFBQSxBQUFDLFVBQUQ7U0FBYyxvQkFBWSxBQUN6RDtXQUFPLFNBQVMsRUFBRSxNQUFNLFlBQVIsQUFBb0IsTUFBTSxPQUFPLENBQWpDLEFBQWtDLFVBQVUsSUFBSSxLQUFoRSxBQUFPLEFBQVMsQUFBZ0QsQUFBSyxBQUN0RTtBQUZnQztBQUExQixBQUlQOztBQUFPLElBQU0sa0NBQWEsU0FBYixBQUFhLGFBQUE7U0FBTSxvQkFBWSxBQUMxQzt1QkFBbUIsWUFBQTthQUFNLFNBQVMsRUFBRSxNQUFNLFlBQVIsQUFBb0IsTUFBTSxPQUExQixBQUFpQyxNQUFNLElBQUksS0FBMUQsQUFBTSxBQUFTLEFBQTJDLEFBQUs7QUFBM0UsS0FBQSxFQUFQLEFBQU8sQUFBcUYsQUFDN0Y7QUFGeUI7QUFBbkIsQUFJUDs7QUFBTyxJQUFNLDhCQUFXLFNBQVgsQUFBVyxXQUFBO1NBQU0sb0JBQVksQUFDeEM7V0FBTyxTQUFTLEVBQUUsTUFBTSxZQUF4QixBQUFPLEFBQVMsQUFBb0IsQUFDckM7QUFGdUI7QUFBakIsQUFJUDs7QUFBTyxJQUFNLGdDQUFZLFNBQVosQUFBWSxZQUF3QztNQUF2QyxBQUF1QyxtRkFBeEIsQUFBd0IsQUFDL0Q7O1NBQU8sd0JBQUEsQUFBWSxTQUFaLEFBQXFCLGNBQWMsaURBQTFDLEFBQU8sQUFBbUMsQUFBb0IsQUFBZ0IsQUFDL0U7QUFGTSxBQUlQOztBQUFPLElBQU0sb0NBQWMsU0FBZCxBQUFjLFlBQUEsQUFBQyxZQUFEO1NBQWdCLG9CQUFZLEFBQ3JEO1dBQU8sU0FBUyxFQUFFLE1BQU0sWUFBUixBQUFvQixjQUFjLFlBQWxELEFBQU8sQUFBUyxBQUNqQjtBQUYwQjtBQUFwQiIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWFyb24vRG9jdW1lbnRzL3JlcG9zL2Fhcm9uY29kaW5nL2Fhcm9uY29kaW5nL2Zyb250ZW5kIn0=