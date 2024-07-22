import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Cart from '../Cart/Cart';
import "./Navbar.scss";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const products = useSelector(state => state.cart.products);

    function openCart() {
        setOpen(true);
    }

    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/img/en.png" alt="English" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
                <div className="center">
                    <Link className='link' to="/" >Nuzlah</Link>
                </div>
                <div className="right">
                    <div className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </div>
                    <div className={`menu ${menuOpen ? 'open' : ''}`}>
                        <div className="item">
                            <Link className='link' to="/products/1" >Men</Link>
                        </div>
                        <div className="item">
                            <Link className='link' to="/products/2" >Women</Link>
                        </div>
                        <div className="item">
                            <Link className='link' to="/products/3" >Children</Link>
                        </div>
                        <div className="item">
                            <Link className='link' to="/" >Homepage</Link>
                        </div>
                        <div className="item">
                            <Link className='link' to="/" >About</Link>
                        </div>
                        <div className="item">
                            <Link className='link' to="/" >Contact</Link>
                        </div>
                        <div className="item">
                            <Link className='link' to="/" >Stores</Link>
                        </div>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
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
