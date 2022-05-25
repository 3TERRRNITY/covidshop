import React, { useState } from "react";
import Shop from "./Shop";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="p-5 bg-sky-200">
      <img className = "border border-blue-700 rounded-xl shadow-xl" src={props.img} alt={props.name} />
      <div className="item-info">
        <h2 className = "font-mono font-semibold text-xl">{props.name}</h2>
        <p className = " p-2 border border-solid border-slate-900 rounded-lg bg-sky-400 text-white shadow-xl">{props.desc}</p>
      </div>
      <div className=" p-3 flex">
        <button
          className="p-3 border border-blue-700 bg-sky-500 rounded-lg flex hover:bg-sky-700 shadow-xl text-white"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="p-3 text-mono text-lg">{total ? total : ""}</h3>
        <button className="p-3 border border-blue-700 bg-sky-500 rounded-lg flex hover:bg-sky-700 shadow-xl text-white" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
