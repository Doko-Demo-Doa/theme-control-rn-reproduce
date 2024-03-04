const baseUrl = process.env.BASE_API_URL;

export const apiClient = {
  get: async (url: string) => {
    return fetch(`${baseUrl}/${url}`).then((response) => response.json());
  },

  // any is safe here
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  post: async (url: string, body: any) => {
    return fetch(`${baseUrl}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  },
};
