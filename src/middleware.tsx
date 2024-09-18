import { NextRequest, NextResponse } from "next/server";
import AuthMiddleware from "./utils/AuthMiddleware";



export async function middleware(request: NextRequest){
    const url = request.url;
    const pathname = request.nextUrl.pathname;
    if(pathname.startsWith("/Dashboard")){
        const user = await AuthMiddleware(request);
        if(!user) return NextResponse.redirect(new URL("/" , url));
    }
}

export const config = {
    matcher: "/Dashboard/:path*",
}