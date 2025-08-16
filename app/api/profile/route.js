import { cookies, headers } from "next/headers";

export async function GET(request) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  console.log(requestHeaders);
  console.log((await requestHeaders).get("Authorization"));
  console.log(headerList);
  console.log(headerList.get("Authorization"));
  console.log(request.cookies.get("theme"));
  (await cookies()).set("page", "2");
  console.log((await cookies()).get("page"));
  return new Response("Profile API", {
    headers: {
      "Set-Cookie": "theme=dark",
    },
  });
}
