const logout = (session) => {
    try {
        session.destroy();
        return{
            success: true,
            data: "Logout successfully"
        }
    } catch (error) {
        return{
            success: false,
            err: error
        }
    }
}

module.exports = {
    logout
}