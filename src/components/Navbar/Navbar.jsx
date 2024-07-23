import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Cart from '../Cart/Cart';
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const products = useSelector(state => state.cart.products);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
          </div>
          <div className="item menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
          <div className={`menu ${menuOpen ? 'open' : ''}`}>
            <div className="item">
              <Link className='link' to="/products/1">Men</Link>
            </div>
            <div className="item">
              <Link className='link' to="/products/2">Women</Link>
            </div>
            <div className="item">
              <Link className='link' to="/products/3">Children</Link>
            </div>
          </div>
        </div>
        <div className="center">
          <Link className='link' to="/">Nuzlah</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link' to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">About</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">Contact</Link>
          </div>
          <div className="icons">
            {/* <PersonOutlineOutlinedIcon /> disabled for fuutre uses not now */}
            {/* <FavoriteBorderOutlinedIcon /> disabled for fuutre uses not now */}
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
