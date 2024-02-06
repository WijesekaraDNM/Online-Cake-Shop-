import React from 'react';
import { Link } from 'react-router-dom';
import classes from './thumbnails.module.css';
import Price from '../price/Price';
export default function Thumbnails({ foods }) {
  return(
    <ul className={classes.list}>
      {foods.map((food) => (
        <li key={food.id}>
          <Link to={`/food/${food.id}`}>
            <img 
              className={classes.image}
              src={`${food.imageUrl}`}
              alt={food.name}
            />
            <div className={classes.content}>
              <div className={classes.name}>{food.name}</div>
              <div className={classes.price}>
                <Price price={food.price}/>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  
  );
}
