import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/UI/notification";
import { fetchCartData, sendCartData } from "./store/cart-action";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }
        if (cart.changed) {
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]);
    return (
        <Fragment>
            {notification && (
                <Notification
                    title={notification.title}
                    message={notification.message}
                    status={notification.status}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;
