function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="cart">
          <h3>Cart</h3>

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

      <div className="container">
        <header>
          <div className="headerInner">
            <div className="headerLeft">
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="35" fill="#FFFFFF">
                <path d="M0 34.9668C0.235334 34.6346 0.434111 34.3556 0.632888 34.0766C1.61992 32.6904 2.59552 31.2954 3.60083 29.9225C3.91157 29.4973 4.08064 29.0567 4.16289 28.543C4.82777 24.3512 5.5132 20.1639 6.19179 15.9743C6.78126 12.3428 7.37303 8.71346 7.94879 5.07972C7.98307 4.86714 7.93509 4.61027 7.83912 4.4132C7.18567 3.06687 6.50709 1.73384 5.83993 0.394154C5.78738 0.285651 5.74168 0.174934 5.67543 0.0265722C5.84907 0.0199291 5.98159 0.0088574 6.11411 0.0088574C10.1399 0.0088574 14.1634 0.0155004 18.1869 0C18.5502 0 18.6828 0.115146 18.7879 0.434012C20.6111 6.02303 22.4481 11.6076 24.2828 17.1922C24.3102 17.2719 24.3422 17.3516 24.445 17.4358C24.5364 16.8888 24.6323 16.3419 24.7215 15.795C25.3475 11.9464 25.9712 8.09566 26.595 4.24712C26.8006 2.97166 27.0245 1.69841 27.2027 0.420726C27.253 0.0620018 27.4038 0.00221435 27.7374 0.0044287C29.8188 0.0177148 31.9003 0.0110717 33.9817 0.0110717C45.1635 0.0110717 56.3453 0.0110717 67.527 0.0110717H68C67.9269 0.159433 67.8812 0.265722 67.8241 0.367582C66.0488 3.48981 64.2712 6.60983 62.5028 9.73649C62.3794 9.95571 62.2446 10.0487 61.975 10.0465C60.3505 10.0332 58.726 10.0399 57.1015 10.0399H56.6697C56.4778 11.2555 56.2927 12.4314 56.1077 13.6072C55.2783 18.8818 54.4512 24.1563 53.6218 29.4287C53.5807 29.6966 53.583 29.9779 53.4961 30.2303C53.2791 30.8547 53.4961 31.3508 53.8548 31.8667C54.4992 32.7945 55.0864 33.7578 55.6964 34.7077C55.7421 34.7786 55.7786 34.8539 55.8403 34.9646H42.4766C43.7789 26.6585 45.0767 18.3747 46.3813 10.0642H36.006C35.8187 11.2467 35.6313 12.4203 35.4371 13.647H42.9632C42.4674 16.7073 41.9808 19.7144 41.4895 22.7458H33.9612C33.294 26.8313 32.6314 30.8924 31.962 34.9911H31.4936C28.3451 34.9911 25.199 34.9845 22.0505 35C21.7124 35 21.573 34.9048 21.4656 34.5948C19.5921 29.1253 17.7049 23.6603 15.8199 18.1931C15.7879 18.1023 15.7536 18.0115 15.6942 17.8499C14.7758 23.6027 13.8687 29.2803 12.9593 34.969H0V34.9668Z" fill="#FFFFFF">
                </path>
              </svg>
              <div className="headerInfo">
                <div className="headerTitle">NFT project</div>
                <p className="headerSubtitle">Best price NFT product</p>
              </div>
            </div>
            <ul className="headerRightList">
              <li className="headerRightItem headerRightItemBox">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>800 $</span>
              </li>
              <li className="headerRightItem">
                <svg width="22" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z" fill="#9B9B9B" />
                </svg>
              </li>
              <li className="headerRightItem">
                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z" fill="#9B9B9B" />
                </svg>
              </li>
            </ul>
          </div>
        </header>

        <div className="product">
          <div className="productTop">
            <h1 className="productTitle"> All product</h1>
            <div className="search">
              <img className="searchIcon" src="./img/search.svg" alt="search" />
              <input className="searchInput" placeholder="Поиск..."></input>
            </div>
          </div>
          <div className="productInner">

            <div className="cards">
              <div className="cardsImgBox">
                <img className="cardsHeart" src="./img/heart-unliked.svg" />
              </div>
              <img width={287} height={287} src="./img/product/1.jpg" alt="product" />
              <div className="cardsBox">
                <p className="productDesc">NFT n°2595. Collection parody of moonbirds and their clones</p>
                <div className="productInfo">
                  <div>
                    <p>Цена:</p>
                    <span>100 $</span>
                  </div>
                  <button className="productBtn">+</button>
                </div>
              </div>
            </div>

            <div className="cards">
              <img width={287} height={287} src="./img/product/2.jpg" alt="product" />
              <div className="cardsBox">
                <p className="productDesc">NFT n°2595. Collection parody of moonbirds and their clones</p>
                <div className="productInfo">
                  <div>
                    <p>Цена:</p>
                    <span>100 $</span>
                  </div>
                  <button className="productBtn">+</button>
                </div>
              </div>
            </div>

            <div className="cards">
              <img width={287} height={287} src="./img/product/3.jpg" alt="product" />
              <div className="cardsBox">
                <p className="productDesc">NFT n°2595. Collection parody of moonbirds and their clones</p>
                <div className="productInfo">
                  <div>
                    <p>Цена:</p>
                    <span>100 $</span>
                  </div>
                  <button className="productBtn">+</button>
                </div>
              </div>
            </div>

            <div className="cards">
              <img width={287} height={287} src="./img/product/4.jpg" alt="product" />
              <div className="cardsBox">
                <p className="productDesc">NFT n°2595. Collection parody of moonbirds and their clones</p>
                <div className="productInfo">
                  <div>
                    <p>Цена:</p>
                    <span>100 $</span>
                  </div>
                  <button className="productBtn">+</button>
                </div>
              </div>
            </div>

            <div className="cards">
              <img width={287} height={287} src="./img/product/5.jpg" alt="product" />
              <div className="cardsBox">
                <p className="productDesc">NFT n°2595. Collection parody of moonbirds and their clones</p>
                <div className="productInfo">
                  <div>
                    <p>Цена:</p>
                    <span>100 $</span>
                  </div>
                  <button className="productBtn">+</button>
                </div>
              </div>
            </div>

            <div className="cards">
              <img width={287} height={287} src="./img/product/6.jpg" alt="product" />
              <div className="cardsBox">
                <p className="productDesc">NFT n°2595. Collection parody of moonbirds and their clones</p>
                <div className="productInfo">
                  <div>
                    <p>Цена:</p>
                    <span>100 $</span>
                  </div>
                  <button className="productBtn">+</button>
                </div>
              </div>
            </div>

            <div className="cards">
              <img width={287} height={287} src="./img/product/7.jpg" alt="product" />
              <div className="cardsBox">
                <p className="productDesc">NFT n°2595. Collection parody of moonbirds and their clones</p>
                <div className="productInfo">
                  <div>
                    <p>Цена:</p>
                    <span>100 $</span>
                  </div>
                  <button className="productBtn">+</button>
                </div>
              </div>
            </div>

            <div className="cards">
              <img width={287} height={287} src="./img/product/8.jpg" alt="product" />
              <div className="cardsBox">
                <p className="productDesc">NFT n°2595. Collection parody of moonbirds and their clones</p>
                <div className="productInfo">
                  <div>
                    <p>Цена:</p>
                    <span>100 $</span>
                  </div>
                  <button className="productBtn">+</button>
                </div>
              </div>
            </div>

            <div className="cards">
              <img width={287} height={287} src="./img/product/9.jpg" alt="product" />
              <div className="cardsBox">
                <p className="productDesc">NFT n°2595. Collection parody of moonbirds and their clones</p>
                <div className="productInfo">
                  <div>
                    <p>Цена:</p>
                    <span>100 $</span>
                  </div>
                  <button className="productBtn">+</button>
                </div>
              </div>
            </div>

            <div className="cards">
              <img width={287} height={287} src="./img/product/10.jpg" alt="product" />
              <div className="cardsBox">
                <p className="productDesc">NFT n°2595. Collection parody of moonbirds and their clones</p>
                <div className="productInfo">
                  <div>
                    <p>Цена:</p>
                    <span>100 $</span>
                  </div>
                  <button className="productBtn">+</button>
                </div>
              </div>
            </div>

            <div className="cards">
              <img width={287} height={287} src="./img/product/11.jpg" alt="product" />
              <div className="cardsBox">
                <p className="productDesc">NFT n°2595. Collection parody of moonbirds and their clones</p>
                <div className="productInfo">
                  <div>
                    <p>Цена:</p>
                    <span>100 $</span>
                  </div>
                  <button className="productBtn">+</button>
                </div>
              </div>
            </div>

            <div className="cards">
              <img width={287} height={287} src="./img/product/12.jpg" alt="product" />
              <div className="cardsBox">
                <p className="productDesc">NFT n°2595. Collection parody of moonbirds and their clones</p>
                <div className="productInfo">
                  <div>
                    <p>Цена:</p>
                    <span>100 $</span>
                  </div>
                  <button className="productBtn">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
