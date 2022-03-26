import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { removeItemFromCart, addItemToCart } from "../../store/cart-slice";
const CartItem = (props) => {
    const { title, quantity, total, price, id } = props.item;
    const dispatch = useDispatch();
    const removeCartItemHandler = () => {
        dispatch(removeItemFromCart(id));
    };
    const addCartItemHandler = () => {
        dispatch(
            addItemToCart({
                id,
                title,
                price,
            })
        );
    };
    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{" "}
                    <span className={classes.itemprice}>
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                    <span style={{ marginLeft: "1rem" }}>
                        ${price.toFixed(2)}
                    </span>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeCartItemHandler}>-</button>
                    <button onClick={addCartItemHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
