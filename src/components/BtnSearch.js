import React from "react";

const BtnSearch = ({ onClick }) => {
  return (
    <div>
      <button
        style={{ borderRadius: "0.5rem" }}
        className="btn btn-outline-dark mt-3 d-flex justify-content-around w-100"
        type="submit"
        onClick={onClick}
      >
        Search
      </button>
    </div>
  );
};

export default BtnSearch;
