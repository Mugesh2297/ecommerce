import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./card.js";
import CartItems from './cartItems';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

function App() {
  const products = [
    {
      id:1,
      title: "iPhone 13",
      price: 70000,
      url: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iphone13_hero_geo_09142021_inline.jpg.large.jpg",
      rating:<h6 className="star"> <FontAwesomeIcon className='checked' icon = {faStar}/>  <FontAwesomeIcon className='checked' icon = {faStar}/>  <FontAwesomeIcon className='checked' icon   = {faStar}/> <FontAwesomeIcon icon  = {faStar}/> <FontAwesomeIcon icon  = {faStar}/></h6>,

    },
    {
      id:2,
      title: "iPhone 13 Pro",
      price: 60000,
      url: "https://m.media-amazon.com/images/I/61jLiCovxVL._SL1500_.jpg",
      rating:<h6 className="star"> <FontAwesomeIcon className='checked' icon = {faStar}/>  <FontAwesomeIcon className='checked' icon = {faStar}/>  <FontAwesomeIcon className='checked' icon   = {faStar}/> <FontAwesomeIcon className='checked' icon  = {faStar}/> <FontAwesomeIcon icon  = {faStar}/></h6>,


    },
    {
      id:3,
      title: "Samsung S22+",
      price: 50000,
      url: "https://m.media-amazon.com/images/I/71WdFQHjDwL._SL1500_.jpg",
      rating:<h6 className="star"> <FontAwesomeIcon className='checked' icon = {faStar}/>  <FontAwesomeIcon className='checked' icon = {faStar}/>  <FontAwesomeIcon className='checked' icon   = {faStar}/> <FontAwesomeIcon className='checked' icon  = {faStar}/> <FontAwesomeIcon className='checked' icon  = {faStar}/></h6>,


    },
    {
      id:4,
      title: "Samsung S22 Ultra",
      price: 45000,
      url: "https://img.poorvika.com/cdn-cgi/image/width=450,height=450,quality=75/1600_JPG/Mobiles/Samsung/Samsung-Galaxy-S22-Ultra-5G/Samsung-Galaxy-S22-Ultra-5G-green-back.jpg",
      rating:<h6 className="star"> <FontAwesomeIcon className='checked' icon = {faStar}/>  <FontAwesomeIcon className='checked' icon = {faStar}/>  <FontAwesomeIcon className='checked' icon   = {faStar}/> <FontAwesomeIcon icon  = {faStar}/> <FontAwesomeIcon icon  = {faStar}/></h6>,

    },
    {
      id:5,
      title: "OnePlus 9 Pro",
      price: 50000,
      url: "https://static.digit.in/default/c8986073c9ed4d14babe7e0fa941f7ed18f8b0ed.jpeg?tr=w-1200",
      rating:<h6 className="star"> <FontAwesomeIcon className='checked' icon = {faStar}/>  <FontAwesomeIcon className='checked' icon = {faStar}/>  <FontAwesomeIcon className='checked' icon   = {faStar}/> <FontAwesomeIcon icon  = {faStar}/> <FontAwesomeIcon icon  = {faStar}/></h6>,


    },
    {
      id:6,
      title: "OnePlus 10 Pro",
      price: 55000,
      url: "https://media.pocketnow.com/styles/large/public/2022-05/DSC00861.JPG?itok=_a7D2rJP",
      rating:<h6 className="star"> <FontAwesomeIcon className='checked' icon = {faStar}/>  <FontAwesomeIcon className='checked' icon = {faStar}/>  <FontAwesomeIcon className='checked' icon   = {faStar}/> <FontAwesomeIcon className='checked' icon  = {faStar}/> <FontAwesomeIcon icon  = {faStar}/></h6>,

    }
  ]
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (item) => {
    setCart([...cart, item])
    setTotal(total + item.price)
  }
let removeFromCart = (item)=>{
let index = cart.findIndex((obj)=>obj.id === item.id)
cart.splice(index,1);
setCart([...cart]);
setTotal(total - item.price)
}
  return (
    <div className="container">
      <div className="row">
        <div className='col-lg-8'>
          <div className='row'>
            {
              products.map((item) => {
                return <Card item={item} handleAddToCart={addToCart}></Card>
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
              <h3>Total:{total}</h3>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
