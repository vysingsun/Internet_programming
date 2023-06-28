var productpriceApi = {
    async getProductPrice() {
        const res = await fetch('http://localhost:3001/product/price',{
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

export default productpriceApi;