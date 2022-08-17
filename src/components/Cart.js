
function Cart({onClose, items = []}) {
    return (
        <div className="overlay">
            <div className="cart">
                <div className="cartTop">
                    <h3>Cart</h3>
                    <button className="cartClose" onClick={onClose}>x</button>
                </div>
                <div className="cartContent">
                    {
                        items.map((obj) => (
                            <div className="cartItem ">
                                <div className="cartItemImg" style={{
                                    backgroundImage: `url(${obj.urlImg})`,
                                }}>
                                </div>
                                <div className="cartBox">
                                    <p className="carttDesc">${obj.title}</p>
                                    <span>${obj.price}</span>
                                </div>
                                <button className="cartBtn">x</button>
                            </div>
                        ))
                    }
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