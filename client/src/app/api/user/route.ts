import { ISignUpResponse } from "@/interfaces/signup";
import { httpCall } from "@/utils/api-helper";
import { EXTERNAL_API_BASEURL } from "@/utils/constants";
import type { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params: { user_id } }: { params: { user_id: string } }
) {
  console.log("inside");
  const body = await req.json();
  const data = await httpCall.post<ISignUpResponse[]>(
    `${EXTERNAL_API_BASEURL}/user/${user_id}/transactions/balance`,
    body
  );
  return Response.json(data);
}
