import React from "react";

const Search = ({ caountryName, onChange }) => {
  return (
    <div>
      <form className="mt-5 w-100">
        <input
          style={{ borderRadius: "0.5rem" }}
          className="form-control me-2 "
          type="search"
          placeholder="Search"
          value={caountryName}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default Search;
