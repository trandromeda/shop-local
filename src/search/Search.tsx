import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        3 Name:
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
