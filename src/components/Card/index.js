
function Card(props) {
    return(
    <div className="cards">
        <div className="cardsImgBox">
            <img className="cardsHeart" src="./img/heart-unliked.svg" />
        </div>
        <img width={287} height={287} src={props.urlImg} alt="product" />
        <div className="cardsBox">
            <p className="productDesc">{props.title}</p>
            <div className="productInfo">
                <div>
                    <p>Price:</p>
                    <span>{props.price}</span>
                </div>
                <button className="productBtn">+</button>
            </div>
        </div>
    </div>
    );
}

export default Card;