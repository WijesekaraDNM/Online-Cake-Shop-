import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.css';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
export default function Header() {
  const { user, logout } = useAuth();

  const { cart } = useCart();

  return (
    <header className={classes.header}>
            <Link to="/DesignsPage" className={classes.logo}>
                <div  className={classes.logo1}>
                    <img className={classes.image} src={'/foods/CakeLogo.png'}  alt="MD CAkes"/>
                    <p className={classes.title}>
                        Cakes
                    </p>                   
                </div>          
            </Link>
            <nav className={classes.mainMenu}>
                <ul> 
                    <li >
                        <Link to="/HomePage">Home</Link>
                        <Link to="/DesignsPage">Designs</Link>
                        <Link to="/cart">Shop</Link>
                        <Link to="/Contact us">Contact us</Link>
                        <Link to="/Custom Designs">Custom Designs</Link>
                    </li>
                </ul>
            </nav>    
            <nav className={classes.semiMenu} >
                <ul >
                    <li>
                        {
                        user?(
                        <li className={classes.menu_container}>
                            <Link to="/profile">{user.name}</Link>
                            <div className={classes.menu}>
                                <Link to="/profile">Profile</Link>
                                <Link to="/orders">Orders</Link>
                                <a onClick={logout}>Logout</a>
                            </div>                
                        </li>
                        ):(
                        <Link to="/login">Login</Link>
                    )}
                    </li>
                
                    <li>
                        <Link to="/cart">
                            Cart
                            {cart.totalCount>0 && (
                            <span className={classes.cart_count}>{cart.totalCount}</span>
                            )}
                        </Link>
                    </li>
                </ul>
            </nav>
    </header>
    );
}
