import { ILoginResponse } from "@/interfaces/signin";
import { httpCall } from "@/utils/api-helper";
import { EXTERNAL_API_BASEURL } from "@/utils/constants";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const data = await httpCall.post<ILoginResponse>(
    `${EXTERNAL_API_BASEURL}/auth/signin`,
    body
  );
  return Response.json(data, {
    headers: {
      "Set-Cookie": `access_token=${data.access_token}; Path=/; Secure;`,
    },
  });
}
