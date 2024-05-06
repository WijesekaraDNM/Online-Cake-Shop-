import React from 'react';
import Title from '../../Components/Title/Title';
import { useCart } from '../../hooks/useCart';
import classes from './cart.module.css';
import { Link } from 'react-router-dom';
import Price from '../../Components/price/Price';
import NotFound from '../../Components/NotFound/NotFound';
export default function Cart() {
    const {cart,removeFromCart, changeQuantity}= useCart();
  return(
   <>
   <Title title="Cart Page" margin="1.5rem 0 0 2.5rem" fontSize="3rem" color="crimson"/>
    {cart && cart.items.length===0? (<NotFound message="Cart Page Is Empty!"/>) : (
        <div className={classes.container}>
            <ul className={classes.list}>
                {cart.items.map(item =>(
                    <li key={item.food.id}>
                        <div>
                            <img 
                                src={`${item.food.imageUrl}`}
                                alt={item.food.name}
                            />
                        </div>
                        <div className={classes.itemName}>
                            <Link to={`/food/${item.food.id}`}>{item.food.name}</Link>
                        </div>
                        <div>
                            <select value={item.quantity} onChange={e =>changeQuantity(item, Number(e.target.value))}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                    
                        <div className={classes.Price}>
                            <Price  price={item.price}/>
                        </div>
                        <div>
                            <button className={classes.Remove_button}onClick={() => removeFromCart(item.food.id)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className={classes.checkout}>
                <div>
                    <div className={classes.foods_count}>{cart.totalCount}</div>
                    <div className={classes.total_price}>
                        <Price price={cart.totalPrice}/>
                    </div>
                </div>
                <Link to="/checkout">Proceed To Checkout</Link>
            </div>

        </div> 
    )}
  </>
  );
  
}
