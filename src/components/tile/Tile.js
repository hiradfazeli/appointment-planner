import React from "react";

export const Tile = ({tile}) => {
  const data = Object.values(tile);

  return (
    <div className="tile-container">
      {data.map((value, index) => (
        <p className={`${index === 0 ? 'tile-title' : ''} tile`} key={index}>
          {value}
        </p>
      ))}
    </div>
  );
};
