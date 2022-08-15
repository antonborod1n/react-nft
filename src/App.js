import Header from './components/Header';
import Cart from './components/Cart';
import Card from './components/Card';

const arr = [
  { name: 'NFT n°1591. Collection parody of moonbirds and their clones', price: 10, urlImg: './img/product/16.jpg'},
  { name: 'NFT n°2692. Collection parody of moonbirds and their clones', price: 90, urlImg: './img/product/2.jpg'},
  { name: 'NFT n°3693. Collection parody of moonbirds and their clones', price: 80, urlImg: './img/product/3.jpg'},
  { name: 'NFT n°4694. Collection parody of moonbirds and their clones', price: 70, urlImg: './img/product/4.jpg'},
  { name: 'NFT n°4694. Collection parody of moonbirds and their clones', price: 70, urlImg: './img/product/15.jpg'},
  { name: 'NFT n°4694. Collection parody of moonbirds and their clones', price: 70, urlImg: './img/product/6.jpg'},
  { name: 'NFT n°4694. Collection parody of moonbirds and their clones', price: 70, urlImg: './img/product/7.jpg'},
  { name: 'NFT n°4694. Collection parody of moonbirds and their clones', price: 70, urlImg: './img/product/8.jpg'},
  { name: 'NFT n°4694. Collection parody of moonbirds and their clones', price: 70, urlImg: './img/product/9.jpg'},
  { name: 'NFT n°4694. Collection parody of moonbirds and their clones', price: 70, urlImg: './img/product/10.jpg'},
  { name: 'NFT n°4694. Collection parody of moonbirds and their clones', price: 70, urlImg: './img/product/11.jpg'},
  { name: 'NFT n°4694. Collection parody of moonbirds and their clones', price: 70, urlImg: './img/product/13.jpg'},
  { name: 'NFT n°4694. Collection parody of moonbirds and their clones', price: 70, urlImg: './img/product/12.jpg'},
  { name: 'NFT n°4694. Collection parody of moonbirds and their clones', price: 70, urlImg: './img/product/14.jpg'},
  { name: 'NFT n°4694. Collection parody of moonbirds and their clones', price: 70, urlImg: './img/product/5.jpg'},
  { name: 'NFT n°5695. Collection parody of moonbirds and their clones', price: 60, urlImg: './img/product/1.jpg'}
]

function App() {
  return (
    <div className="wrapper">
      <Cart />
      <div className="container">
        <Header />
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
              arr.map((obj) => (
                <Card
                  title={obj.name}
                  urlImg={obj.urlImg}
                  price={obj.price + ' $'}
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
