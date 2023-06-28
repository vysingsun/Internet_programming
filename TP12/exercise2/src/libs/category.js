var categoryApi = {
    async getCategory() {
        const res = await fetch('http://localhost:3001/category/all',{
            method: 'GET',
            // credentials: 'include',
            headers: {
                'Content-type': 'application/json',
            }
        })
        const result = await res.json();
        return result
    },
    async getCategoryItem() {
        const res = await fetch('http://localhost:3001/category/categorized-items',{
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

export default categoryApi