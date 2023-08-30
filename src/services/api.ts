const BASE_URL = "http://localhost:8000";

export const getApiData = async (path: string, body: any) => {
  const request = await fetch(`${BASE_URL}/${path}`, body);
  const response = await request.json();
  return response;
};
