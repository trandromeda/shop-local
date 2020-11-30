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
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            name="query"
            value={query}
            placeholder="Search by keyword"
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </div>
        <div className="control">
          <input className="button is-info" type="submit" value="Go" />
        </div>
      </div>
    </form>
  );
}

export default Search;
