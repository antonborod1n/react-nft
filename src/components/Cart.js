
function Cart() {
    return (
        <div className="overlay" style={{ display: 'none' }}>
            <div className="cart">
                <div className="cartTop">
                    <h3>Cart</h3>
                    <button className="cartClose">x</button>
                </div>
                <div className="cartContent">
                    <div className="cartItem ">
                        <div className="cartItemImg" style={{
                            backgroundImage: 'url(./img/product/1.jpg)',
                        }}>
                        </div>
                        <div className="cartBox">
                            <p className="carttDesc">NFT n°2595. Collection parody</p>
                            <span>100 $</span>
                        </div>
                        <button className="cartBtn">x</button>
                    </div>

                    <div className="cartItem ">
                        <div className="cartItemImg" style={{
                            backgroundImage: 'url(./img/product/2.jpg)',
                        }}>
                        </div>
                        <div className="cartBox">
                            <p className="carttDesc">NFT n°2595. Collection parody</p>
                            <span>100 $</span>
                        </div>
                        <button className="cartBtn">x</button>
                    </div>
                </div>

                <div className="cartOrder">
                    <ul className="cartOrderList">
                        <li>
                            Итого:
                            <span>21 498 руб. </span>
                        </li>
                        <li>
                            Налог 5%:
                            <span>1074 руб. </span>
                        </li>
                    </ul>
                    <button className="cartOrderBtn">Оформить заказ</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;