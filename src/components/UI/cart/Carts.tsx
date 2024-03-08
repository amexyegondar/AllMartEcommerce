import React, { useEffect, useState } from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";
import { RootState } from "../../../store/store";

import "../../../styles/shopping-cart.css";
import { auth } from "../../../firbase/firebasesetup";

const Carts: React.FC = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: RootState) => state.cart.cartItems);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const [isloggedin, setIsloggein] = useState(false);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsloggein(!!user);
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProducts.map((item) => (
              <CartItem item={item} key={item.id} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>Br.{totalAmount}</span>
          </h6>
          <button>
            <Link to={isloggedin? "/checkout": '/login'} onClick={toggleCart}>
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
