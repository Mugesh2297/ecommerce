import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./card.js";
import CartItems from './cartItems';
import { useState } from 'react';
import Nav from "./nav.js";
import Header from "./header.js";
import Footer from "./footer.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CounterData} from './Context.js';



function App() {
  const products = [
    {
      id: 1,
      title: "iPhone 13",
      price: 70000,
      url: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iphone13_hero_geo_09142021_inline.jpg.large.jpg",
      rating: 3,
    },
    {
      id: 2,
      title: "iPhone 13 Pro",
      price: 60000,
      url: "https://m.media-amazon.com/images/I/61jLiCovxVL._SL1500_.jpg",
      rating: 4,

    },
    {
      id: 3,
      title: "Samsung S22+",
      price: 50000,
      url: "https://m.media-amazon.com/images/I/71WdFQHjDwL._SL1500_.jpg",
      rating: 5,

    },
    {
      id: 4,
      title: "Samsung S22 Ultra",
      price: 45000,
      url: "https://img.poorvika.com/cdn-cgi/image/width=450,height=450,quality=75/1600_JPG/Mobiles/Samsung/Samsung-Galaxy-S22-Ultra-5G/Samsung-Galaxy-S22-Ultra-5G-green-back.jpg",
      rating: 2,
    },
    {
      id: 5,
      title: "OnePlus 9 Pro",
      price: 50000,
      url: "https://static.digit.in/default/c8986073c9ed4d14babe7e0fa941f7ed18f8b0ed.jpeg?tr=w-1200",
      rating: 3,

    },
    {
      id: 6,
      title: "OnePlus 10 Pro",
      price: 55000,
      url: "https://static.digit.in/default/c8986073c9ed4d14babe7e0fa941f7ed18f8b0ed.jpeg?tr=w-1200",
      rating: 3,
    }
  ]
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [initialValue, setValue] = useState(0);

  let addToCart = (item) => {
    setCart([...cart, item])
    setTotal(total + item.price)
    setValue(initialValue+1);
    console.log(initialValue)
   
  }
  let removeFromCart = (item) => {
    let index = cart.findIndex((obj) => obj.id === item.id)
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - item.price)
    setValue(initialValue-1);
    console.log(initialValue)

  }
  return (
    <CounterData.Provider value={{initialValueFromProvider: initialValue,}}>

    <div className="div">
      <Nav></Nav>
      <br />
      <Header></Header>
      <br />
      <div className="container">
        <div className="row">
          <div className='col-lg-8'>
            <div className='row'>
              {
                products.map((item) => {
                  return <Card item={item} cartItems={cart} handleAddToCart={addToCart}></Card>
                  
                })
              }

            </div>

          </div>
          <div className='col-lg-4'>
            {
              cart.length === 0 ? <div><h3 className='h3'>No Items in Cart</h3></div> : <div className='row'>
                <ol class="list-group list-group-numbered">
                  <h3 className='h3'>Cart Items</h3>
                  {
                    cart.map((cartItem) => {
                      return <CartItems cartItem={cartItem} removeFromCart={removeFromCart}></CartItems>;
                    })
                  }

                </ol>
                <h3>Total: {total}</h3>
              </div>
            }
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    </CounterData.Provider>
  );
}

export default App;
