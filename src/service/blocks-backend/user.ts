import { user } from "./urls";

export async function userLogin(email: string, password: string){
    let resp = await fetch( user.login, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    resp = await resp.json();
    return resp;
}