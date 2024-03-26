import { cookies } from "next/headers";
import { EXTERNAL_API_BASEURL, PUBLIC_API_URLS } from "./constants";

export const httpCall = {
  post: async <T>(url: string, payload: unknown): Promise<Response> => {
    const addToken = !PUBLIC_API_URLS.includes(url);
    const cookieStore = cookies();
    const token = cookieStore.get("access_token")?.value;
    const res = await fetch(EXTERNAL_API_BASEURL + url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(addToken && token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    return res;
  },
  get: async <T>(url: string): Promise<Response> => {
    const cookieStore = cookies();
    const token = cookieStore.get("access_token")?.value;
    const res = await fetch(EXTERNAL_API_BASEURL + url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    return res;
  },
};
