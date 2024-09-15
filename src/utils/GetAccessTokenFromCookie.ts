'use server'
import { cookies } from "next/headers"  


export async function GetAccessTokenFromCookie(){
    return cookies().get("access_token")?.value;
}