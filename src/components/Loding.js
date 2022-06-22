import React from "react";

const Loding = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div
        style={{ width: "7rem", height: "7rem" }}
        className="spinner-border"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loding;
