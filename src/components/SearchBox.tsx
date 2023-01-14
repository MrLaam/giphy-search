import { Dispatch, SetStateAction } from "react";

interface SearchBoxProps {
    searchQuery: string
    setSearchQuery: Dispatch<SetStateAction<string>>
}

function SearchBox({ searchQuery, setSearchQuery }:SearchBoxProps) {
  return (
    <>
      <input value={searchQuery} onInput={(e:any) => setSearchQuery(e.target.value)} />
    </>
  );
}

export default SearchBox;
