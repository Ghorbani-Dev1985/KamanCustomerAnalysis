'use server'
import { cookies } from "next/headers"  


export async function GetRefreshTokenFromCookie(){
    return cookies().get("refresh_token")?.value;
}