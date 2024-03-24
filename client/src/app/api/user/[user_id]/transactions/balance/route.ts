import { ISignUpResponse } from "@/interfaces/signup";
import { httpCall } from "@/utils/api-helper";
import { EXTERNAL_API_BASEURL } from "@/utils/constants";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params: { user_id } }: { params: { user_id: string } }
) {
  const cookie = cookies();
  console.log("inside", cookie.getAll());
  const data = await httpCall.get<ISignUpResponse[]>(
    `${EXTERNAL_API_BASEURL}/user/${user_id}/transactions/balance`
  );
  return Response.json(data);
}
