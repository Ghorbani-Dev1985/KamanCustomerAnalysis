"use server"  
import { cookies } from "next/headers"  
export async function StoreTokenInCookie(access_token : string , refresh_token : string ) {  
    cookies().set({  
        name: "access_token",  
        value: access_token,  
        httpOnly: true,  
        sameSite: "strict",  
        secure: true,  
    })  
  
    cookies().set({  
        name: "refresh_token",  
        value: refresh_token,  
        httpOnly: true,  
        sameSite: "strict",  
        secure: true,  
    })  
}
