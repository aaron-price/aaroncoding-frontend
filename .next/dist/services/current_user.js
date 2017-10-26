'use strict';

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var return_current_user = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
        var id, name, is_staff, is_superuser, is_active;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!context.res) {
                            _context.next = 4;
                            break;
                        }

                        return _context.abrupt('return', context.res.current_user);

                    case 4:
                        id = get_cookie('id');
                        name = get_cookie('name');
                        is_staff = get_cookie('is_staff');
                        is_superuser = get_cookie('is_superuser');
                        is_active = get_cookie('is_active');

                        if (id === '' || name === '') {
                            id = null;
                            name = null;
                        }
                        if (!is_staff || is_staff === '' || is_staff === 'false') {
                            is_staff = false;
                        }
                        if (!is_superuser || is_superuser === '' || is_superuser === 'false') {
                            is_superuser = false;
                        }
                        if (!is_active || is_active === '' || is_active === 'false') {
                            is_active = false;
                        }

                        return _context.abrupt('return', { id: id, name: name, is_staff: is_staff, is_superuser: is_superuser, is_active: is_active });

                    case 14:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function return_current_user(_x) {
        return _ref.apply(this, arguments);
    };
}();

var get_cookie = require('./get_cookie.js').get_cookie;

module.exports = { return_current_user: return_current_user };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2N1cnJlbnRfdXNlci5qcyJdLCJuYW1lcyI6WyJjb250ZXh0IiwicmVzIiwiY3VycmVudF91c2VyIiwiaWQiLCJnZXRfY29va2llIiwibmFtZSIsImlzX3N0YWZmIiwiaXNfc3VwZXJ1c2VyIiwiaXNfYWN0aXZlIiwicmV0dXJuX2N1cnJlbnRfdXNlciIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O3dGQUVBLGlCQUFtQyxBQUFuQyxTQUFBOzhDQUFBO3NFQUFBO3NCQUFBO2lEQUFBO3lCQUFBOzZCQUNRLFFBQVEsQUFEaEIsS0FBQTs0Q0FBQTtBQUFBO0FBQUE7O3lEQUVlLFFBQVEsQUFBUixJQUFZLEFBRjNCOzt5QkFJWTtBQUpaLDZCQUlpQixXQUFXLEFBQVgsQUFKakIsQUFLWTtBQUxaLCtCQUtvQixXQUFXLEFBQVgsQUFMcEIsQUFNWTtBQU5aLG1DQU13QixXQUFXLEFBQVgsQUFOeEIsQUFPWTtBQVBaLHVDQU80QixXQUFXLEFBQVgsQUFQNUIsQUFRWTtBQVJaLG9DQVF5QixXQUFXLEFBQVgsQUFSekIsQUFTUTs7NEJBQUksT0FBTyxBQUFQLE1BQWEsU0FBUyxBQUExQixJQUE4QixBQUMxQjtpQ0FBSyxBQUFMLEFBQ0E7bUNBQU8sQUFBUCxBQUNIO0FBQ0Q7NEJBQUksQ0FBQyxBQUFELFlBQWEsYUFBYSxBQUExQixNQUFnQyxhQUFhLEFBQWpELFNBQTBELEFBQUU7dUNBQVcsQUFBWCxBQUFrQjtBQUM5RTs0QkFBSSxDQUFDLEFBQUQsZ0JBQWlCLGlCQUFpQixBQUFsQyxNQUF3QyxpQkFBaUIsQUFBN0QsU0FBc0UsQUFBRTsyQ0FBZSxBQUFmLEFBQXNCO0FBQzlGOzRCQUFJLENBQUMsQUFBRCxhQUFjLGNBQWMsQUFBNUIsTUFBa0MsY0FBYyxBQUFwRCxTQUE2RCxBQUFFO3dDQUFZLEFBQVosQUFBbUI7QUFmMUY7O3lEQWlCZSxFQUFFLElBQUYsSUFBTSxNQUFOLE1BQVksVUFBWixVQUFzQixjQUF0QixjQUFvQyxXQUFwQyxBQWpCZjs7eUJBQUE7eUJBQUE7d0NBQUE7O0FBQUE7b0JBQUE7QTs7b0JBQWUsQTs7Ozs7QUFGZixJQUFNLGFBQWEsMkJBQTJCLEFBQTlDOztBQXNCQSxPQUFPLEFBQVAsVUFBaUIsRUFBRSxxQkFBRixBQUFqQiIsImZpbGUiOiJjdXJyZW50X3VzZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Fhcm9uL0RvY3VtZW50cy9yZXBvcy9hYXJvbmNvZGluZy9hYXJvbmNvZGluZy9mcm9udGVuZCJ9