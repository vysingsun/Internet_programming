var productApi = {
    async getProductApi() {
        const res = await fetch('http://localhost:3001/product/all',{
            method: 'GET',
            // credentials: 'include',
            headers: {
                'Content-type': 'application/json',               
            }
        })
        const result = await res.json();
        return result
    },
    async getAllProduct(categoryId, itemId) {
        if(categoryId == ""){
            const res = await fetch('http://localhost:3001/product/all',{
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                    
                }
            })
            const result = res.json();
            return result
        }else{
            const res = await fetch(`http://localhost:3001/product/all/${categoryId}/${itemId}`,{
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            })
            const result = res.json();
            return result
        }
    },
    
}
export default productApi