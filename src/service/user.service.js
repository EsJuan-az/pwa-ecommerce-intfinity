const { VITE_API_URL } = import.meta.env;
class UserService{
    static login(body){
        
        const headers = {
            'Content-Type': 'application/json',
        };
        return fetch(`${VITE_API_URL}/user/auth`, {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        })
        .then( resp => resp.json() );
    }
    static getMe(token){
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };
        return fetch(`${VITE_API_URL}/user/me`, {
            method: 'GET',
            headers,
        })
        .then( resp => resp.json() );
    }
}
export default UserService;