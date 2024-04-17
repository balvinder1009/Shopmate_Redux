import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
// eslint-disable-next-line react/prop-types
import "./productCard.css";
import { useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types
export const ProductCard = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { name, price, image } = product;
  const cartList = useSelector((state) => state.cartState.cartList);
  // eslint-disable-next-line no-unused-vars
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const productIsInCart = cartList.find(
      (current) => current.id === product.id
    );

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
    // eslint-disable-next-line react/prop-types
  }, [cartList, product.id]);
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="img_box">
          <img src={image} alt="image" />
        </div>
        <h3 className="title">{name}</h3>
        <div className="info">
          <span>${price}</span>
          {isInCart ? (
            <button
              onClick={() => dispatch(remove(product))}
              className="remove"
            >
              Remove
            </button>
          ) : (
            <button onClick={() => dispatch(add(product))} className="addBtn">
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
