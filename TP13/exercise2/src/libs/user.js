var userApi = {
    async getUserApi() {
        const res = await fetch('http://localhost:3001/user/all',{
            method: 'GET',
            // credentials: 'include',
            headers: {
                'Content-type': 'application/json',
                
            }
        })
        const result = await res.json();
        return result
    }
}

export default userApi