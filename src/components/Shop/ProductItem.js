import Card from "../UI/Card";
import { addItemToCart } from "../../store/cart-slice";
import { useDispatch } from "react-redux";
import classes from "./ProductItem.module.css";
const ProductItem = (props) => {
    const dispatch = useDispatch();

    const { title, price, description, id } = props;
    const addItemHandler = () => {
        dispatch(
            addItemToCart({
                id: id,
                price: price,
                name: title,
            })
        );
    };
    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addItemHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
