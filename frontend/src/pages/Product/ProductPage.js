import React, { useEffect, useState } from 'react';
import classes from './productPage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { getById } from '../../Services/foodService';
import Price from '../../Components/price/Price';
import NotFound from '../../Components/NotFound/NotFound';

export default function ProductPage() {
  const [food,setFood]=useState({});
  const {id}=useParams();
  const {addToCart } = useCart();
  const navigate =useNavigate();

  const handleAddToCart =() => {
    addToCart(food);
    navigate('/cart');
  }
    
  useEffect(() =>{
    getById(id).then(setFood);
  },[id]);
    return (
    <>
        {!food? (<NotFound message="Food Not Found!" linkText="Back To Designs Page"/>) :  (
            <div className={classes.container}>
                <img className={classes.image}
                src={`${food.imageUrl}`}
                alt={food.name}
                />
            <div className={classes.details}>
                <div className={classes.header}>
                    <span className={classes.name}>{food.name}</span>
                    <span  className={`${classes.favorite} ${
                        food.favorite? ' ': classes.not
                    }`}/>
                    <img className={classes.heartIcon} src={"/foods/heart(1).png"} alt=""/>
                </div>
                <div>
                    <span className={classes.price}>
                        <Price price={food.price} />

                    </span>
                </div>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
        )}
    </>
    );
}

