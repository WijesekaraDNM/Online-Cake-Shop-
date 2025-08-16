import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.css';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
export default function Header() {
  const { user, logout } = useAuth();
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { cart } = useCart();

  const toggleDropDown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
        <Link to="/DesignsPage" className={classes.logo}>
          <div className={classes.logo1}>
            <img className={classes.image} src={'/foods/CakeLogo.png'} alt="MD Cakes"/>
            <p className={classes.title}>
              Cakes
            </p>                   
          </div>          
        </Link>
        
        {/* Mobile menu button (hamburger) */}
        <button className={classes.mobileMenuButton} onClick={toggleDropDown}>
          ☰
        </button>
        
        <nav className={`${classes.mainMenu} ${isDropdownVisible ? classes.show : ''}`}>
          <ul> 
            <li><Link to="/HomePage">Home</Link></li>
            <li><Link to="/DesignsPage">Designs</Link></li>
            <li><Link to="/cart">Shop</Link></li>
            <li><Link to="/ContactsPage">Contact</Link></li>
            <li><Link to="/CustomPage">Custom</Link></li>
            <li>
                {user ? (
                    <div className={classes.menu_container}>
                        <span className={classes.userName} onClick={toggleDropDown}>{user.name}</span>
                        {isDropdownVisible && (
                            <div className={classes.menu}>
                            <Link to="/profile">Profile</Link>
                            <Link to="/orders">Orders</Link>
                            <a onClick={logout}>Logout</a>
                            </div> 
                        )}               
                    </div>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </li>
            <li>
                <Link to="/cart">
                    Cart
                    {cart.totalCount > 0 && (
                    <span className={classes.cart_count}>{cart.totalCount}</span>
                    )}
                </Link>
            </li>
          </ul>
        </nav>    
      </div>
    </header>
  );
}
