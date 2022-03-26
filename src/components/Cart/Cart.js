import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartItems = useSelector((state) => state.cart.items);
    const cartQuantity = useSelector((state) => state.cart.totalQuantity);
    return (
        <Card className={classes.cart}>
            {cartQuantity ? <h2>Your Shopping Cart</h2> : null}
            {cartQuantity > 0 ? (
                <ul>
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            item={{
                                id: item.id,
                                price: item.price,
                                quantity: item.quantity,
                                total: item.totalPrice,
                                title: item.name,
                            }}
                        />
                    ))}
                </ul>
            ) : (
                <ul>
                    <li style={{ color: "orangered", textAlign: "center" }}>
                        there is no product
                    </li>
                </ul>
            )}
        </Card>
    );
};

export default Cart;
