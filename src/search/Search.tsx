import { FormEvent, useContext, useState } from "react";
import { ShopStore } from "src/shop-store";
import "./Search.scss";

function Search() {
  const [query, setQuery] = useState("");
  const { shopDispatch } = useContext(ShopStore);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    shopDispatch({
      type: "update-query",
      payload: {
        query,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Search by keyword:</label>
      <input
        type="text"
        name="name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <input type="submit" value="Go"></input>
    </form>
  );
}

export default Search;
