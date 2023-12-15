export const useHttp = () => {
  const request = async (
    url: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
    body: any = null,
    headers: any = { "Content-Type": "application/json" },
    withToken?: boolean // Authorization: "tokenObj.token"
  ) => {
    const tokenObj = typeof localStorage != 'undefined' && localStorage.getItem("accessIcap")
    if (withToken) {
      //@ts-ignore
      headers.Authorization = `Bearer ${JSON.parse(tokenObj)?.token}`
    }
    try {
      const response = await fetch(url, { method, body, headers });
      if (!response.ok) {
        throw new Error(
          `Could not fetch ${url}, status: ${response.status}`
        );
      }
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        return {};
      }
      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  };

  return { request };
};

