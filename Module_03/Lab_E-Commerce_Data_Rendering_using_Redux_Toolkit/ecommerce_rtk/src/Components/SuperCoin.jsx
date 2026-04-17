import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SuperCoin = () => {
    const [superCoins, setSuperCoins] = useState(0);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = cartItems.reduce(
        (accumulator, item) => accumulator + item.price * item.quantity,
        0,
    );

    useEffect(() => {
        switch (true) {
            case totalAmount >= 100 && totalAmount < 200:
                setSuperCoins(10);
                break;
            case totalAmount >= 200 && totalAmount < 300:
                setSuperCoins(20);
                break;
            case totalAmount >= 300 && (totalAmount < 400 || totalAmount > 400):
                setSuperCoins(30);
                break;
            default:
                setSuperCoins(0);
        }
    }, [totalAmount]);
    return (
        <div className="super-coins" style={{ textAlign: "center" }}>
            <h2 className="super-coins-title">Super Coins</h2>
            <p className="super-coins-info">
                You will earn {superCoins} super coins with this purchase.
            </p>
        </div>
    );
};

export default SuperCoin;
