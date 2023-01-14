import { useCallback, useEffect, useState } from "react";
import "./App.css";
import GiphyImage from "./components/GiphyImage";
import SearchBox from "./components/SearchBox";
import { getGifs } from "./services/Api";
import { giphySearchResponseMapper } from "./utils/mappers";

function App() {
  const LIMIT = 25;
  const [offset, setOffset] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [giphyUrls, setGiphyUrls] = useState<any>();
  let searchTimeout: any = undefined;

  useEffect(() => {
    const fetchGiphyGifs = async () => {
      debounceInput(searchQuery);
    };
    fetchGiphyGifs();
  }, [searchQuery]);

  const debounceInput = useCallback((searchQuery: string) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(async () => {
      if (searchQuery) {
        let res = await getGifs({ searchQuery, offset, limit: LIMIT });
        setGiphyUrls(giphySearchResponseMapper(res));
      } else {
        setGiphyUrls([]);
      }
    }, 500);
  }, []);

  return (
    <div>
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div>
        {giphyUrls?.map((url: string, i: number) => {
          return <GiphyImage imageUrl={url} key={i} />;
        })}
      </div>
    </div>
  );
}

export default App;
