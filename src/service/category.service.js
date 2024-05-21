const { VITE_API_URL } = import.meta.env;
class CategoryService{
    static getAll(token, offset = 0, limit){
        let url = `${VITE_API_URL}/product/category?offset=${offset}`;
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
export default CategoryService;