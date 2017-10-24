"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create_user_permission = create_user_permission;
exports.list_user_permission = list_user_permission;
exports.details_user_permission = details_user_permission;
exports.update_user_permission = update_user_permission;
exports.delete_user_permission = delete_user_permission;
exports.anonymous_permission = anonymous_permission;
function anyone(user) {
  return true;
}
function nobody(user) {
  return false;
}
function authenticated(user) {
  return !!user.id;
}
function anonymous(user) {
  return !user.id;
}
function owner(user, obj) {
  return user.id == obj.owner;
}
function superuser(user) {
  return user.is_superuser;
}
function staff(user) {
  return user.is_staff;
}
function active(user) {
  return user.is_active;
}

// User
function create_user_permission(user) {
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return anonymous(user, obj);
}
function list_user_permission(user) {
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return superuser(user, obj);
}
function details_user_permission(user) {
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return owner(user, obj);
}
function update_user_permission(user) {
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return owner(user, obj);
}
function delete_user_permission(user) {
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return owner(user, obj);
}
function anonymous_permission(user) {
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return anonymous(user, obj);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Blcm1pc3Npb25zLmpzIl0sIm5hbWVzIjpbImFueW9uZSIsInVzZXIiLCJub2JvZHkiLCJhdXRoZW50aWNhdGVkIiwiaWQiLCJhbm9ueW1vdXMiLCJvd25lciIsIm9iaiIsInN1cGVydXNlciIsImlzX3N1cGVydXNlciIsInN0YWZmIiwiaXNfc3RhZmYiLCJhY3RpdmUiLCJpc19hY3RpdmUiLCJjcmVhdGVfdXNlcl9wZXJtaXNzaW9uIiwibGlzdF91c2VyX3Blcm1pc3Npb24iLCJkZXRhaWxzX3VzZXJfcGVybWlzc2lvbiIsInVwZGF0ZV91c2VyX3Blcm1pc3Npb24iLCJkZWxldGVfdXNlcl9wZXJtaXNzaW9uIiwiYW5vbnltb3VzX3Blcm1pc3Npb24iXSwibWFwcGluZ3MiOiI7Ozs7O1FBVU8sQUFBUztRQUNULEFBQVM7UUFDVCxBQUFTO1FBQ1QsQUFBUztRQUNULEFBQVM7UUFDVCxBQUFTO0FBZmhCLFNBQUEsQUFBUyxPQUFULEFBQWdCLE1BQU0sQUFBRTtTQUFBLEFBQU8sQUFBTTs7QUFDckMsU0FBQSxBQUFTLE9BQVQsQUFBZ0IsTUFBTSxBQUFFO1NBQUEsQUFBTyxBQUFPOztBQUN0QyxTQUFBLEFBQVMsY0FBVCxBQUF1QixNQUFNLEFBQUU7U0FBTyxDQUFDLENBQUMsS0FBVCxBQUFjLEFBQUk7O0FBQ2pELFNBQUEsQUFBUyxVQUFULEFBQW1CLE1BQU0sQUFBRTtTQUFPLENBQUMsS0FBUixBQUFhLEFBQUk7O0FBQzVDLFNBQUEsQUFBUyxNQUFULEFBQWUsTUFBZixBQUFxQixLQUFLLEFBQUU7U0FBTyxLQUFBLEFBQUssTUFBTSxJQUFsQixBQUFzQixBQUFPOztBQUN6RCxTQUFBLEFBQVMsVUFBVCxBQUFtQixNQUFNLEFBQUU7U0FBTyxLQUFQLEFBQVksQUFBYzs7QUFDckQsU0FBQSxBQUFTLE1BQVQsQUFBZSxNQUFNLEFBQUU7U0FBTyxLQUFQLEFBQVksQUFBVTs7QUFDN0MsU0FBQSxBQUFTLE9BQVQsQUFBZ0IsTUFBTSxBQUFFO1NBQU8sS0FBUCxBQUFZLEFBQVc7OztBQUUvQyxBQUNBO0FBQU8sZ0NBQUEsQUFBZ0MsTUFBa0I7TUFBWixBQUFZLDBFQUFOLEFBQU0sQUFBRTtTQUFPLFVBQUEsQUFBVSxNQUFqQixBQUFPLEFBQWdCLEFBQU07QUFDeEY7QUFBTyw4QkFBQSxBQUE4QixNQUFrQjtNQUFaLEFBQVksMEVBQU4sQUFBTSxBQUFFO1NBQU8sVUFBQSxBQUFVLE1BQWpCLEFBQU8sQUFBZ0IsQUFBTTtBQUN0RjtBQUFPLGlDQUFBLEFBQWlDLE1BQWtCO01BQVosQUFBWSwwRUFBTixBQUFNLEFBQUU7U0FBTyxNQUFBLEFBQU0sTUFBYixBQUFPLEFBQVksQUFBTTtBQUNyRjtBQUFPLGdDQUFBLEFBQWdDLE1BQWtCO01BQVosQUFBWSwwRUFBTixBQUFNLEFBQUU7U0FBTyxNQUFBLEFBQU0sTUFBYixBQUFPLEFBQVksQUFBTTtBQUNwRjtBQUFPLGdDQUFBLEFBQWdDLE1BQWtCO01BQVosQUFBWSwwRUFBTixBQUFNLEFBQUU7U0FBTyxNQUFBLEFBQU0sTUFBYixBQUFPLEFBQVksQUFBTTtBQUNwRjtBQUFPLDhCQUFBLEFBQThCLE1BQWtCO01BQVosQUFBWSwwRUFBTixBQUFNLEFBQUU7U0FBTyxVQUFBLEFBQVUsTUFBakIsQUFBTyxBQUFnQixBQUFNIiwiZmlsZSI6InBlcm1pc3Npb25zLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hYXJvbi9Eb2N1bWVudHMvcmVwb3MvYWFyb25jb2RpbmcvYWFyb25jb2RpbmcvZnJvbnRlbmQifQ==