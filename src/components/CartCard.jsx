import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import "./cartCard.css";
// eslint-disable-next-line react/prop-types
export const CartCard = ({ cartItem }) => {
  // eslint-disable-next-line react/prop-types
  const { name, price, image } = cartItem;
  console.log(cartItem);
  const dispatch = useDispatch();
  return (
    <div className="cartCard">
      <div className="productInfo">
        <h4>{name}</h4>
        <img src={image} alt={name} />
        <h4>${price}</h4>
      </div>
      <button onClick={() => dispatch(remove(cartItem))} className="remove">
        Remove
      </button>
    </div>
  );
};
