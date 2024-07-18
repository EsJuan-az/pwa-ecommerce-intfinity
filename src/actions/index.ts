"use server";
import { userLogin } from "@/service/blocks-backend/user";
import { cookies } from "next/headers";

export async function handleUserLogin(email: string, password: string){
    const store = cookies();
    const response = await userLogin(email, password);
    const { authToken } = response.body;
    if( authToken ){
        store.set('token', authToken, {
            path: '/',
            samesite: 'strict',
            httpOnly: true,
        });
    }
    return response;
};