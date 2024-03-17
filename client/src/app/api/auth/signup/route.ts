import { ISignUpResponse } from "@/interfaces/signup";
import { httpCall } from "@/utils/api-helper";
import { EXTERNAL_API_BASEURL } from "@/utils/constants";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const data = await httpCall.post<ISignUpResponse[]>(
    `${EXTERNAL_API_BASEURL}/auth/signup`,
    body
  );
  return Response.json(data[0]);
}
