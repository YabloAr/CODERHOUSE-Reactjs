import {useContext} from "react";
import CartContext from "../../../context/CartContext";
import {Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Send";
import {Link} from "react-router-dom";

const CartContainer = () => {
  const {cart, addToCart, deleteFromCart, clearCart, isInCart, getTotalPrice} = useContext(CartContext);

  console.log(cart);
  return (
    <div>
      <h1>CartContainer</h1>
      {cart.map((elem) => {
        return (
          <div key={elem.id}>
            <h4>{elem.title}</h4>
            <h6>{elem.price}</h6>
            <h6>{elem.quantity}</h6>
            <Button variant="contained" endIcon={<AddIcon />} onClick={() => deleteFromCart(elem.id)}>
              Delete from cart
            </Button>
          </div>
        );
      })}
      {/* este boton no va aca, nose que hace aca. */}
      <Button variant="contained" endIcon={<AddIcon />} onClick={() => clearCart()}>
        Add to Cart
      </Button>
      <Link to="/checkout">
        <Button>Finalizar la compra</Button>
      </Link>
    </div>
  );
};

export default CartContainer;
