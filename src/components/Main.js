import React from "react";
import Card from "./Card";

export default ({ cards, evalCards, size }) => {
  return (
    <div
      className="wrapper"
      style={{ width: `${size * 100}px`, height: `${size * 100}px` }}
    >
      <div className="row">
        {cards.map((el, i) => {
          return (
            <Card evalCards={evalCards} key={el.id} card={el} size={size} />
          );
        })}
      </div>
    </div>
  );
};
