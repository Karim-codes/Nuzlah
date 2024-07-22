import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {useSelector} from 'react-redux'
import Product from '../../pages/Product/Product';
import { removeItem, resetCart } from '../../redux/cartReducer';
import {useDispatch} from "react-redux"
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../MakeRequest';


const Cart = () => {


  const dispatch = useDispatch();
  const products = useSelector(state=>state.cart.products)

  const uploadURL = import.meta.env.VITE_REACT_APP_UPLOAD_URL;

  const calculateTotal = () => {
    let total = 0
    products.forEach((item) => {
      total += item.quantity * item.price
    });
    return total.toFixed(2)
  }

  const stripePromise = loadStripe('pk_live_51PeegpRwrfEZowxGhj7f0yZ9WCvw4B6TlmXapwYXhnGLvlycYYk4M6EsEGCS0fc3ZQQHMZah6MpmjE65vFuaHxHP00FWuQ9r2S');
  
  //const stripePromise = loadStripe('pk_test_51PeegpRwrfEZowxGwz2HKYNh0LHadddujoq8VniJ5SFT1zrlUC931sSwpiQ5pBshqj9gDWHpIdqS9bnzjKFHmnFB00Yy8FyXyf');

  // const handlePayment = async() => {
  //   try {

  //     const stripe = await stripePromise;

  //     const res = await makeRequest.post("/orders", {
  //       products,
  //     });

  //     await stripe.redirectToCheckout({
  //       sessionId: res.data.stripeSession.id,
  //     });
      
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", { products });
  
      // Log response for debugging
      console.log('Response from backend:', res.data);
  
      if (res.data?.stripeSession?.id) {
        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        });
      } else {
        console.error('Stripe session ID is missing from the response.');
      }
    } catch (err) {
      console.error('Error during payment process:', err);
    }
  };
  

  return (
    <div className='cart'>
      <h1>product in your car</h1>
      {products?.map(item=>(
        <div className="item" key={item.id}>
            <img src={uploadURL + item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0, 100)}</p>
                <div className="price">{item.quantity} x £{item.price}</div>
            </div>
            <DeleteOutlinedIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>£{calculateTotal()}</span>
      </div>
      <button onClick={handlePayment} >PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={()=>dispatch(resetCart())}>Restart Card</span>
    </div>
  )
}

export default Cart
