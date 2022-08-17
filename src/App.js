import React, { useEffect } from "react";
import Header from './components/Header';
import Cart from './components/Cart';
import Card from './components/Card';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://62fbb0b1e4bcaf53518b220a.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCard = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  return (
    <div className="wrapper">
      {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)} />}
      <div className="container">
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="product">
          <div className="productTop">
            <h1 className="productTitle"> All product</h1>
            <div className="search">
              <img className="searchIcon" src="./img/search.svg" alt="search" />
              <input className="searchInput" placeholder="Search..."></input>
            </div>
          </div>
          <div className="productInner">
            {
              items.map((item) => (
                <Card
                  title={item.name}
                  urlImg={item.urlImg}
                  price={item.price + ' $'}
                  onPlus={(obj) => onAddToCard(obj)}
                  onLiked={(obj) => onAddToCard(obj)}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
