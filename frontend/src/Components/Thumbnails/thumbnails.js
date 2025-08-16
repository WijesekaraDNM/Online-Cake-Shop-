import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './thumbnails.module.css';
import Price from '../price/Price';
import { FaHeart, FaRegHeart, FaSearch } from 'react-icons/fa';

export default function Thumbnails({ foods }) {
  const [favorites, setFavorites] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleFavorite = (foodId) => {
    if (favorites.includes(foodId)) {
      setFavorites(favorites.filter(id => id !== foodId));
    } else {
      setFavorites([...favorites, foodId]);
    }
  };

  return (
    <div className={classes.gallery}>
      {foods.map((food) => (
        <div 
          key={food.id}
          className={classes.card}
          onMouseEnter={() => setHoveredItem(food.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link to={`/food/${food.id}`} className={classes.cardLink}>
            <div className={classes.imageContainer}>
              <img 
                src={`${food.imageUrl}`}
                alt={food.name}
                className={classes.image}
              />
              {hoveredItem === food.id && (
                <div className={classes.quickView}>
                  <FaSearch className={classes.searchIcon} />
                  <span>Quick View</span>
                </div>
              )}
            </div>
            <div className={classes.cardContent}>
              <h3 className={classes.name}>{food.name}</h3>
              <div className={classes.price}>
                <Price price={food.price} />
              </div>
            </div>
          </Link>
          <button 
            className={classes.favoriteButton}
            onClick={() => toggleFavorite(food.id)}
            aria-label={favorites.includes(food.id) ? "Remove from favorites" : "Add to favorites"}
          >
            {favorites.includes(food.id) ? (
              <FaHeart className={classes.heartFilled} />
            ) : (
              <FaRegHeart className={classes.heartOutline} />
            )}
          </button>
        </div>
      ))}
    </div>
  );
}


// import React, { useState } from 'react';  // Make sure to import useState
// import { Link } from 'react-router-dom';
// import classes from './thumbnails.module.css';
// import Price from '../price/Price';
// import { FaHeart, FaRegHeart, FaSearch } from 'react-icons/fa';

// export default function Thumbnails({ foods }) {
//   const [favorites, setFavorites] = useState([]);
//   const [hoveredItem, setHoveredItem] = useState(null);   // <-- ADD THIS LINE

//   const toggleFavorite = (foodId) => {
//     if (favorites.includes(foodId)) {
//       setFavorites(favorites.filter(id => id !== foodId));
//     } else {
//       setFavorites([...favorites, foodId]);
//     }
//   };

//   return (
//     <div className={classes.gallery}>
//       {foods.map((food) => (
//         <div 
//           key={food.id}
//           className={classes.card}
//           onMouseEnter={() => setHoveredItem(food.id)}
//           onMouseLeave={() => setHoveredItem(null)}
//         >
//           <Link to={`/food/${food.id}`} className={classes.cardLink}>
//             <div className={classes.imageContainer}>
//               <img 
//                 src={`${food.imageUrl}`}
//                 alt={food.name}
//                 className={classes.image}
//               />
//               {hoveredItem === food.id && (
//                 <div className={classes.quickView}>
//                   <FaSearch className={classes.searchIcon} />
//                   <span>Quick View</span>
//                 </div>
//               )}
//             </div>
//             <div className={classes.cardContent}>
//               <h3 className={classes.name}>{food.name}</h3>
//               <div className={classes.price}>
//                 <Price price={food.price} />
//               </div>
//             </div>
//           </Link>
//           <button 
//             className={classes.favoriteButton}
//             onClick={() => toggleFavorite(food.id)}
//             aria-label={favorites.includes(food.id) ? "Remove from favorites" : "Add to favorites"}
//           >
//             {favorites.includes(food.id) ? (
//               <FaHeart className={classes.heartFilled} />
//             ) : (
//               <FaRegHeart className={classes.heartOutline} />
//             )}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }