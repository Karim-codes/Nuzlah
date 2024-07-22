import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
        <img src="https://images.pexels.com/photos/11274855/pexels-photo-11274855.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <button>
            <Link className="link" to="/products/1">Men</Link>
        </button>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/21759282/pexels-photo-21759282/free-photo-of-side-view-of-a-woman-wearing-a-niqab-walking-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <button>
            <Link className="link" to="/products/2">Wome</Link>
        </button>
        </div>
      </div>
      <div className="col">
        <div className="row"><img src="https://images.pexels.com/photos/10589099/pexels-photo-10589099.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <button>
            <Link className="link" to="/products/3">Books</Link>
        </button></div>
      </div>
      <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row"><img src="https://images.pexels.com/photos/5650037/pexels-photo-5650037.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
        <button>
            <Link className="link" to="/products/4">Sale</Link>
        </button></div>
            </div>
            <div className="col">
                <div className="row"><img src="https://images.pexels.com/photos/10468270/pexels-photo-10468270.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <button>
            <Link className="link" to="/products/5">Accessories</Link>
        </button></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
