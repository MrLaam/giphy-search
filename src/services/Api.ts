import { API_KEY, GIPHY_API_URL } from "../config/consts";

interface ApiProps {
  searchQuery: string;
  limit: number;
  offset: number;
}

export const getGifs = async ({ limit, offset, searchQuery }: ApiProps) => {
  const response = await fetch(
    `${GIPHY_API_URL}?api_key=${API_KEY}&q=${searchQuery}&limit=${limit}&offset=${offset}&rating=g&lang=en`
  );
  const jsonRes = await response.json();
  return jsonRes;
};
