import { showNotification } from "./ui-slice";
import { replaceCart } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                "https://shop-3e57b-default-rtdb.firebaseio.com/cart.json"
            );
            if (!response.ok) {
                throw new Error("could not fetch cart data ");
            }
            const data = await response.json();
            return data;
        };

        try {
            const cartData = await fetchData();

            if (cartData.items && cartData.totalQuantity) {
                dispatch(
                    replaceCart({
                        items: cartData.items,
                        totalQuantity: cartData.totalQuantity,
                    })
                );
            }
        } catch (error) {
            dispatch(
                showNotification({
                    status: "Error",
                    title: "Error ...",
                    message: "fetching cart data failed!",
                })
            );
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch, getState) => {
        // console.log("getState", getState());
        await dispatch(
            showNotification({
                status: "pending",
                title: "sending ...",
                message: "sending cart data !",
            })
        );

        const sendRequest = async () => {
            const response = await fetch(
                "https://shop-3e57b-default-rtdb.firebaseio.com/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity,
                    }),
                }
            );
            if (!response.ok) {
                throw new Error("sending cart data faild .");
            }
        };
        try {
            await sendRequest();
            dispatch(
                showNotification({
                    status: "Success",
                    title: "success ...",
                    message: "sent cart data successfully!",
                })
            );
             setTimeout(() => {
                dispatch(showNotification(null));
            }, 3000);
        } catch (error) {
            dispatch(
                showNotification({
                    status: "Error",
                    title: "Error ...",
                    message: "sending cart data failed!",
                })
            );
        }
    };
};
