'use server'
import { cookies } from "next/headers"  


export async function DeleteCookies(){
    cookies().delete("access_token")
    cookies().delete("refresh_token")
}