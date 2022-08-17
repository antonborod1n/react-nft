import React from "react";

function Card({onLiked, urlImg, title, price, onPlus}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPlus = () => {
        onPlus({urlImg, title, price});
        setIsAdded(!isAdded);
    }

    
    return (
        <div className="cards">
            <div className="cardsImgBox">
                <img className="cardsHeart" onClick={onLiked} src="./img/heart-unliked.svg" />
            </div>
            <img className="cardsImgMain" width={287} height={287} src={urlImg} alt="product" />
            <div className="cardsBox">
                <p className="productDesc">{title}</p>
                <div className="productInfo">
                    <div>
                        <p>Price:</p>
                        <span>{price}</span>
                    </div>
                    <button className="productBtn" onClick={onClickPlus}>
                        <img className="productBtImg" width={32} height={32} src={isAdded ? "./img/btn-cheked.svg" : "./img/btn-uncheked.svg"} alt="Plus" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;