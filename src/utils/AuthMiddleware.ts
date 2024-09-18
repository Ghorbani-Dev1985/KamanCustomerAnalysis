import { NextRequest } from "next/server";
import { GetAccessTokenFromCookie } from "./GetAccessTokenFromCookie";

export default async function AuthMiddleware(request: NextRequest) {
    const token = await GetAccessTokenFromCookie();
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user_info/`,
    {
      method: "GET",
      credentials: "include",
      headers: {
         Authorization : `Bearer ${token}` || "-"
      },
    }
  )
  .then((res) => res.json());
  return result;
}
