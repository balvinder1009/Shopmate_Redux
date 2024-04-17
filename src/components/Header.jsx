import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/sample_logo.png";
import "./header.css";
export const Header = () => {
  const cartList = useSelector((state) => state.cartState.cartList);
  return (
    <header>
      <div className="logoCol_container">
        <Link to="/" className="logoCol" style={{ textDecoration: "none" }}>
          <img src={logo} alt="logo" className="logo" />
          <h4>Shopmate</h4>
        </Link>
      </div>
      <div className="navigation">
        <NavLink className="link" style={{ textDecoration: "none" }} to="/">
          Home
        </NavLink>
        <NavLink className="link" style={{ textDecoration: "none" }} to="/cart">
          Cart
        </NavLink>
      </div>
      <div className="cartCount">
        <h5>Cart : {cartList.length}</h5>
      </div>
    </header>
  );
};
