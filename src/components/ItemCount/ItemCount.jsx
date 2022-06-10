import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setcount] = useState(initial);
  const substract = () => setcount(count - 1);
  const add = () => setcount(count + 1);

  return (
    <div className="divItemCount">
      <br />
      <div>
        <button
          onClick={substract}
          className="btn btn-dark"
          disabled={count === initial ? true : null}
        >
          -
        </button>
        <span className="link-dark">{count}</span>
        <button
          onClick={add}
          className="btn btn-dark"
          disabled={count === stock ? true : null}
        >
          +
        </button>
      </div>
      <br />
      <button onClick={() => onAdd(count)} className="btnCart btn btn-dark">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
