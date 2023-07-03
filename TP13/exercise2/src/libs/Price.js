var priceApi = {
    async getPriceApi() {
        const res = await fetch('http://localhost:3001/price/all',{
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
export default priceApi