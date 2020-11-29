import { FormEvent, useContext, useState } from "react";
import { ShopStore } from "src/shop-store";

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
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <input type="submit" value="OK"></input>
      </label>
    </form>
  );
}

export default Search;
