import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/7129738/pexels-photo-7129738.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/7129605/pexels-photo-7129605.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Classic Immarati Thobe",
            desc: "Classic Immarati Thobe",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/5416746/pexels-photo-5416746.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/5416862/pexels-photo-5416862.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Just Khleji",
            desc: "Just Khleji",
            isNew: false,
            oldPrice: 29,
            price: 20,
        },
    ]
  return (
    <div className='cart'>
      <h1>product in your car</h1>
      {data?.map(item=>(
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0, 100)}</p>
                <div className="price">1x £{item.price}</div>
            </div>
            <DeleteOutlinedIcon className='delete'/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>£19923</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Restart Card</span>
    </div>
  )
}

export default Cart
