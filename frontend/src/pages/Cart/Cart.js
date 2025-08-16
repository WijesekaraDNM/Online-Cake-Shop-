import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { BsCartCheck, BsCartX } from 'react-icons/bs';
import Price from '../../Components/price/Price';
import Title from '../../Components/Title/Title';
import classes from './cart.module.css';

export default function Cart() {
  const { cart, removeFromCart, changeQuantity } = useCart();

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(item.food.id);
    } else {
      changeQuantity(item, newQuantity);
    }
  };

  return (
    <div className={classes.cartPage}>
      <Title 
        title="Your Shopping Cart" 
        margin="2rem 0 1rem 0" 
        fontSize="2.5rem" 
        color="#5c2a2a"
        display="flex"
        justifyContent="center"
        alignItems="center"
      />

      {cart && cart.items.length === 0 ? (
        <div className={classes.emptyCart}>
          <BsCartX size={64} color="#c7215d" />
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any cakes yet</p>
          <Link to="/designsPage" className={classes.shopButton}>
            Browse Cakes
          </Link>
        </div>
      ) : (
        <div className={classes.cartContainer}>
          <div className={classes.cartItems}>
            {cart.items.map(item => (
              <div key={item.food.id} className={classes.cartItem}>
                <div className={classes.itemImage}>
                  <img 
                    src={`${item.food.imageUrl}`} 
                    alt={item.food.name} 
                    loading="lazy"
                  />
                </div>
                
                <div className={classes.itemDetails}>
                  <Link to={`/food/${item.food.id}`} className={classes.itemName}>
                    {item.food.name}
                  </Link>
                  
                  <div className={classes.quantityControl}>
                    <button 
                      onClick={() => handleQuantityChange(item, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <FiMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>
                
                <div className={classes.priceSection}>
                  <Price price={item.price} className={classes.itemPrice} />
                  <button 
                    onClick={() => removeFromCart(item.food.id)}
                    className={classes.removeButton}
                    aria-label="Remove item"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={classes.cartSummary}>
            <div className={classes.summaryCard}>
              <h3>Order Summary</h3>
              
              <div className={classes.summaryRow}>
                <span>Items ({cart.totalCount})</span>
                <Price price={cart.totalPrice} />
              </div>
              
              <div className={classes.summaryRow}>
                <span>Delivery</span>
                <span>FREE</span>
              </div>
              
              <div className={classes.summaryTotal}>
                <span>Total</span>
                <Price price={cart.totalPrice} className={classes.totalPrice} />
              </div>
              
              <Link to="/checkout" className={classes.checkoutButton}>
                <BsCartCheck size={20} />
                Proceed to Checkout
              </Link>
              
              <Link to="/designsPage" className={classes.continueShopping}>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../../hooks/useCart';
// import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
// import { BsCartCheck, BsCartX } from 'react-icons/bs';
// import Price from '../../Components/price/Price';
// import Title from '../../Components/Title/Title';
// import classes from './cart.module.css';

// export default function Cart() {
//   const { cart, removeFromCart, changeQuantity, loading } = useCart();

//   const handleQuantityChange = (item, newQuantity) => {
//     if (newQuantity < 1) {
//       removeFromCart(item._id);
//     } else {
//       changeQuantity(item, newQuantity);
//     }
//   };

//   if (loading) {
//     return <div>Loading cart...</div>;
//   }

//   return (
//     <div className={classes.cartPage}>
//       <Title
//         title="Your Shopping Cart"
//         margin="2rem 0 1rem 0"
//         fontSize="2.5rem"
//         color="#5c2a2a"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//       />

//       {!cart || cart.items.length === 0 ? (
//         <div className={classes.emptyCart}>
//           <BsCartX size={64} color="#c7215d" />
//           <h2>Your cart is empty</h2>
//           <p>Looks like you haven't added any cakes yet</p>
//           <Link to="/designsPage" className={classes.shopButton}>
//             Browse Cakes
//           </Link>
//         </div>
//       ) : (
//         <div className={classes.cartContainer}>
//           <div className={classes.cartItems}>
//             {cart.items.map((item) => {
//               // Determine whether this item is normal food or custom design
//               const isFood = !!item.productId;
//               const itemData = isFood ? item.productId : item.customDesignId;
//               if (!itemData) return null; // Safety check

//               return (
//                 <div key={item._id} className={classes.cartItem}>
//                   <div className={classes.itemImage}>
//                     <img src={itemData.imageUrl} alt={itemData.name} loading="lazy" />
//                   </div>

//                   <div className={classes.itemDetails}>
//                     {isFood ? (
//                       <Link to={`/food/${itemData._id}`} className={classes.itemName}>
//                         {itemData.name}
//                       </Link>
//                     ) : (
//                       <span className={classes.itemName}>{itemData.name}</span> // Optionally link to custom design detail page
//                     )}

//                     <div className={classes.quantityControl}>
//                       <button
//                         onClick={() => handleQuantityChange(item, item.quantity - 1)}
//                         aria-label="Decrease quantity"
//                       >
//                         <FiMinus />
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button
//                         onClick={() => handleQuantityChange(item, item.quantity + 1)}
//                         aria-label="Increase quantity"
//                       >
//                         <FiPlus />
//                       </button>
//                     </div>
//                   </div>

//                   <div className={classes.priceSection}>
//                     <Price price={item.price} className={classes.itemPrice} />
//                     <button
//                       onClick={() => removeFromCart(item._id)}
//                       className={classes.removeButton}
//                       aria-label="Remove item"
//                     >
//                       <FiTrash2 />
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className={classes.cartSummary}>
//             <div className={classes.summaryCard}>
//               <h3>Order Summary</h3>

//               <div className={classes.summaryRow}>
//                 <span>Items ({cart.totalCount})</span>
//                 <Price price={cart.totalPrice} />
//               </div>

//               <div className={classes.summaryRow}>
//                 <span>Delivery</span>
//                 <span>FREE</span>
//               </div>

//               <div className={classes.summaryTotal}>
//                 <span>Total</span>
//                 <Price price={cart.totalPrice} className={classes.totalPrice} />
//               </div>

//               <Link to="/checkout" className={classes.checkoutButton}>
//                 <BsCartCheck size={20} />
//                 Proceed to Checkout
//               </Link>

//               <Link to="/designsPage" className={classes.continueShopping}>
//                 Continue Shopping
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
