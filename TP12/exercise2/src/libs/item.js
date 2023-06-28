var itemApi = {
    async getItemApi(category_id) {
        const res = await fetch(`http://localhost:3001/item/categoryid/${category_id}`,{
            method: 'GET',
            // credentials: 'include',
            headers: {
                'Content-type': 'application/json',               
            }
        })
        const result = await res.json();
        return result
    },
    async getAllItemApi(category_id) {
        const res = await fetch('http://localhost:3001/item/all',{
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
export default itemApi