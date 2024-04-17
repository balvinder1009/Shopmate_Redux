import { CartCard } from "../components/CartCard";
import { useSelector } from "react-redux";
import "./cart.css";

export const Cart = () => {
  const cartList = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => state.cartState.total);
  return (
    <section className="cartContainer">
      <h2 className="cartHeading">
        Cart{" "}
        <span>
          Items: {cartList.length} / $ {total}
        </span>
      </h2>
      {cartList.map((cartItem) => (
        <CartCard key={cartItem.id} cartItem={cartItem} />
      ))}
    </section>
  );
};
