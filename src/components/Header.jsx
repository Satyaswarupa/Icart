import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import {FaAppStoreIos} from "react-icons/fa"

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav>
      <h2><FaAppStoreIos />I Store.</h2>

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <BsFillCartFill/>
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;