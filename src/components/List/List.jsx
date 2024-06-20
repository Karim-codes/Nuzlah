import React from 'react'
import "./List.scss"
import Card from "../Card/Card"

const List = () => {

    const data = [
        {
          id: 1,
          img: "https://images.pexels.com/photos/7129738/pexels-photo-7129738.jpeg?auto=compress&cs=tinysrgb&w=1600",
          img2: "https://images.pexels.com/photos/7129605/pexels-photo-7129605.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Classic Immarati Thobe",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/5416746/pexels-photo-5416746.jpeg?auto=compress&cs=tinysrgb&w=1600",
          img2: "https://images.pexels.com/photos/5416862/pexels-photo-5416862.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Just Khleji",
          isNew: false,
          oldPrice: 29,
          price: 20,
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/9108863/pexels-photo-9108863.jpeg?auto=compress&cs=tinysrgb&w=1600",
          img2: "https://images.pexels.com/photos/9108897/pexels-photo-9108897.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Asian Classic",
          isNew: true,
          oldPrice: 25,
          price: 18,
        },
        {
          id: 4,
          img: "https://images.pexels.com/photos/8939050/pexels-photo-8939050.jpeg?auto=compress&cs=tinysrgb&w=1600",
          img2: "https://images.pexels.com/photos/8939104/pexels-photo-8939104.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Plastine Imama",
          isNew: false,
          oldPrice: 20,
          price: 12,
        },
      ];
  return (
    <div className='list'>
      {data?.map(item=>(
        <Card item={item} key={item.id} />
      ))}
    </div>
  )
}

export default List
