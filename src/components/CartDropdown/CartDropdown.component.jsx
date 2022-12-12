import "./CartDropdown.styles.scss";
import Button from "../Button/Button.component";
import CartItem from "../CartItem/CartItem.component";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
