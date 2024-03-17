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
};
