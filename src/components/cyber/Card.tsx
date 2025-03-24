import React from "react";

const Card = () => {
  return (
    <div>
      <h2>This is Card</h2>
      <div className="flex flex-col gap-2 shadow-xl px-2">
        <div className="flex bg-amber-100 justify-between gap-2  shadow-md p-2 rounded-md ">
          <img src="pr/d" alt="pr image" />
          <p>Name</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
