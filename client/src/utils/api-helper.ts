export const httpCall = {
  post: async <T>(url: string, payload: unknown): Promise<T> => {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data: T = await res.json();
    console.log(data);
    return data;
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
