import React from "react";

const Card = ({ searchcaountry, temperature }) => {
  return (
    <div className="card mt-3" style={{ borderRadius: "1rem"}}>
      <div className="card-body">
        <h5 className="card-title lead text-muted text-center display-6 mt-2">
          {searchcaountry}
        </h5>
        <hr />
        <h5 className="card-subtitle mb-2 text-muted lead text-center display-6 mt-2">
          {temperature}
        </h5>
      </div>
    </div>
  );
};

export default Card;