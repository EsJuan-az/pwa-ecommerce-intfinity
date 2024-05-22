const { VITE_API_URL } = import.meta.env;
class ProductService{
    static create(token, body){
        let url = `${VITE_API_URL}/product/`;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers,
        })
        .then( resp => resp.json() );
    }
    static getAll(token, offset = 0, limit){
        let url = `${VITE_API_URL}/product?offset=${offset}`;
        if( limit ){
            url += `&limit=${limit}`;
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };
        return fetch(url, {
            method: 'GET',
            headers,
        })
        .then( resp => resp.json() );
    }
}
export default ProductService;