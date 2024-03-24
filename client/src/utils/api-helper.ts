import { EXTERNAL_API_BASEURL } from "./constants";

export const httpCall = {
  post: async <T>(url: string, payload: unknown): Promise<Response> => {
    const res = await fetch(EXTERNAL_API_BASEURL + url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return res;
  },
  get: async <T>(url: string, token = null): Promise<T> => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    const data: T = await res.json();
    return data;
  },
};
