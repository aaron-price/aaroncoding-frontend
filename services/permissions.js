function anyone(user) { return true }
function nobody(user) { return false }
function authenticated(user) { return !!user.id }
function anonymous(user) { return !user.id }
function owner(user, obj) { return user.id == obj.owner }
function superuser(user) { return user.is_superuser }
function staff(user) { return user.is_staff }
function active(user) { return user.is_active }

// User
export function create_user_permission(user, obj = null) { return anonymous(user, obj) }
export function list_user_permission(user, obj = null) { return superuser(user, obj) }
export function details_user_permission(user, obj = null) { return owner(user, obj) }
export function update_user_permission(user, obj = null) { return owner(user, obj) }
export function delete_user_permission(user, obj = null) { return owner(user, obj) }
export function anonymous_permission(user, obj = null) { return anonymous(user, obj) }