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
    menu_color: '#2196F3'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L3N0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsImV4YW1wbGVJbml0aWFsU3RhdGUiLCJsYXN0VXBkYXRlIiwibGlnaHQiLCJjb3VudCIsIm1lbnVfY29sb3IiLCJhY3Rpb25UeXBlcyIsIkFERCIsIlRJQ0siLCJDSEFOR0VfQ09MT1IiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidHMiLCJzZXJ2ZXJSZW5kZXJDbG9jayIsImlzU2VydmVyIiwiZGlzcGF0Y2giLCJEYXRlIiwibm93Iiwic3RhcnRDbG9jayIsInNldEludGVydmFsIiwiYWRkQ291bnQiLCJpbml0U3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjaGFuZ2VDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQWE7O0FBQ3RCLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7O0FBRVAsSUFBTTtnQkFBc0IsQUFDWixBQUNaO1dBRndCLEFBRWpCLEFBQ1A7V0FId0IsQUFHakIsQUFDUDtnQkFKSixBQUE0QixBQUlaLEFBR2hCO0FBUDRCLEFBQ3hCOztBQU1HLElBQU07U0FBYyxBQUNsQixBQUNMO1VBRnVCLEFBRWpCLEFBQ047a0JBQWMsQUFHbEI7O0FBTk8sQUFBb0IsQUFPM0I7QUFQMkIsQUFDdkIsTUFNUyw0QkFBVSxTQUFWLEFBQVUsVUFBeUM7UUFBeEMsQUFBd0MsNEVBQWhDLEFBQWdDO1FBQVgsQUFBVyxtQkFDNUQ7O1lBQVEsT0FBUixBQUFlLEFBQ2Y7YUFBSyxZQUFMLEFBQWlCLEFBQ2I7bUJBQU8sc0JBQUEsQUFBYyxJQUFkLEFBQWtCLE9BQU8sRUFBRSxZQUFZLE9BQTlDLEFBQU8sQUFBeUIsQUFBcUIsQUFDekQ7YUFBSyxZQUFMLEFBQWlCLEFBQ2I7bUJBQU8sc0JBQUEsQUFBYyxJQUFkLEFBQWtCLE9BQU8sRUFBRSxZQUFZLE9BQWQsQUFBcUIsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFsRSxBQUFPLEFBQXlCLEFBQXlDLEFBQzdFO2FBQUssWUFBTCxBQUFpQixBQUNiO3lDQUFPLEFBQWMsSUFBZCxBQUFrQjt1QkFDZCxNQUFBLEFBQU0sUUFEakIsQUFBTyxBQUF5QixBQUNQLEFBRTdCO0FBSG9DLEFBQzVCLGFBREc7QUFHRjttQkFUVCxBQVNTLEFBQU8sQUFFbkI7O0FBWk0sQ0FBQTs7QUFjUCxBQUNBO0FBQU8sSUFBTSxnREFBb0IsU0FBcEIsQUFBb0Isa0JBQUEsQUFBQyxVQUFEO1dBQWMsb0JBQVksQUFDdkQ7ZUFBTyxTQUFTLEVBQUUsTUFBTSxZQUFSLEFBQW9CLE1BQU0sT0FBTyxDQUFqQyxBQUFrQyxVQUFVLElBQUksS0FBaEUsQUFBTyxBQUFTLEFBQWdELEFBQUssQUFDeEU7QUFGZ0M7QUFBMUIsQUFJUDs7QUFBTyxJQUFNLGtDQUFhLFNBQWIsQUFBYSxhQUFBO1dBQU0sb0JBQVksQUFDeEM7MkJBQW1CLFlBQUE7bUJBQU0sU0FBUyxFQUFFLE1BQU0sWUFBUixBQUFvQixNQUFNLE9BQTFCLEFBQWlDLE1BQU0sSUFBSSxLQUExRCxBQUFNLEFBQVMsQUFBMkMsQUFBSztBQUEzRSxTQUFBLEVBQVAsQUFBTyxBQUFxRixBQUMvRjtBQUZ5QjtBQUFuQixBQUlQOztBQUFPLElBQU0sOEJBQVcsU0FBWCxBQUFXLFdBQUE7V0FBTSxvQkFBWSxBQUN0QztlQUFPLFNBQVMsRUFBRSxNQUFNLFlBQXhCLEFBQU8sQUFBUyxBQUFvQixBQUN2QztBQUZ1QjtBQUFqQixBQUlQOztBQUFPLElBQU0sZ0NBQVksU0FBWixBQUFZLFlBQXdDO1FBQXZDLEFBQXVDLG1GQUF4QixBQUF3QixBQUM3RDs7V0FBTyx3QkFBQSxBQUFZLFNBQVosQUFBcUIsY0FBYyxpREFBMUMsQUFBTyxBQUFtQyxBQUFvQixBQUFnQixBQUNqRjtBQUZNLEFBSVA7O0FBQU8sSUFBTSxvQ0FBYyxTQUFkLEFBQWMsWUFBQSxBQUFDLFlBQUQ7V0FBZ0Isb0JBQVksQUFDbkQ7ZUFBTyxTQUFTLEVBQUUsTUFBTSxZQUFSLEFBQW9CLGNBQWMsWUFBbEQsQUFBTyxBQUFTLEFBQ25CO0FBRjBCO0FBQXBCIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hYXJvbi9Eb2N1bWVudHMvcmVwb3MvYWFyb25jb2RpbmcvYWFyb25jb2RpbmcvZnJvbnRlbmQifQ==