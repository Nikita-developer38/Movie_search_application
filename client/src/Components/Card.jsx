import React from "react";

function Card({ title, poster, genre, story }) {
  return (
    <div className="mb-4 d-flex flex-row mx-2 my-2" width={"250px"}>
      <div className="card ">
        <img
          src={poster}
          className="card-img-top "
          width={"250px"}
          height={"300px"}
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <strong>Genre:</strong> {genre}
          </p>
          <p className="card-text">
            <strong>Story:</strong> {story}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
