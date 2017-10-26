function logout_service(req, res, app) {
    res.clearCookie('token')
    res.clearCookie('id')
    res.clearCookie('name')
    res.clearCookie('is_staff')
    res.clearCookie('is_superuser')
    res.clearCookie('is_active')
    app.render(req, res, '/30days/user_auth')
}

module.exports = { logout_service }
