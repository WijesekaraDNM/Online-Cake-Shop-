import React,{createContext, useState, useContext, useEffect} from 'react';

const CartContext = createContext(null);
const CART_KEY ='cart';
const EMPTY_CART ={
  items: [],
  totalPrice:0,
  totalCount:0,
};

export default function CartProvider({children}) {
    const initialCart= getCartFromLocalStorage();
    const [cartItems,setCartItems] = useState(initialCart.items);
    const [totalPrice, setTotalPrice] = useState(initialCart.totalPrice);
    const [totalCount, setTotalCount] = useState(initialCart.totalCount);
    
    useEffect(() => {
      const totalPrice = sum(cartItems.map(item => item.price));
      const totalCount = sum(cartItems.map(item => item.quantity));
      setTotalPrice(totalPrice);
      setTotalCount(totalCount);

      localStorage.setItem(CART_KEY,JSON.stringify({
        items:cartItems,
        totalPrice,
        totalCount,
      }))
    },[cartItems]);

    function getCartFromLocalStorage(){
      const storedCart =localStorage.getItem(CART_KEY);
      return storedCart ? JSON.parse(storedCart) : EMPTY_CART;
    }

    const sum = items => {
      return items.reduce((previousValue,currentValue) => previousValue+currentValue,0);
    };

    const removeFromCart=foodId =>{
      const filteredCartItems=cartItems.filter(items =>items.food.id !==foodId);
      setCartItems(filteredCartItems);
    };

    const changeQuantity =(cartItem,newQuantity) => {
      const{ food } = cartItem;

      const changedCartItem ={
        ...cartItem,
        quantity:newQuantity,
        price: food.price*newQuantity,
      };
      setCartItems(
        cartItems.map(item => (item.food.id === food.id ? changedCartItem :item))
      );
    };
    
    const addToCart = food => {
      const cartItem = cartItems.find(item => item.food.id === food.id);
      if(cartItem){
        changeQuantity(cartItem, cartItem.quantity+1);
      }
      else{
        setCartItems([...cartItems,{food,quantity: 1,price:food.price}]);
      }
    };

  return (<CartContext.Provider 
    value={{
        cart:{items:cartItems,totalPrice, totalCount},
          removeFromCart,
          changeQuantity,
          addToCart,
        }}
      >
      {children} 
    </CartContext.Provider>
  );
}

export const useCart =() => useContext(CartContext);




// import { useState, useEffect, useContext, createContext } from 'react';
// import axios from 'axios';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const cart = useProvideCart();
//   return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };

// function useProvideCart() {
//   const [cart, setCart] = useState({ items: [], totalCount: 0, totalPrice: 0 });
//   const [loading, setLoading] = useState(true);

//   // Load cart on mount
//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const fetchCart = async () => {
//     setLoading(true);
//     try {
//       const { data } = await axios.get('/api/cart', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       setCart(data);
//     } catch (error) {
//       console.error('Failed to fetch cart:', error);
//     }
//     setLoading(false);
//   };

//   const addToCart = async (item) => {
//     try {
//       await axios.post('/api/cart', item, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       await fetchCart();
//     } catch (error) {
//       console.error('Failed to add to cart:', error);
//     }
//   };

//   const removeFromCart = async (cartItemId) => {
//     try {
//       await axios.delete(`/api/cart/${cartItemId}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       await fetchCart();
//     } catch (error) {
//       console.error('Failed to remove from cart:', error);
//     }
//   };

//   const changeQuantity = async (cartItem, newQuantity) => {
//     try {
//       await axios.put(
//         `/api/cart/${cartItem._id}`,
//         { quantity: newQuantity },
//         { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
//       );
//       await fetchCart();
//     } catch (error) {
//       console.error('Failed to update cart item:', error);
//     }
//   };

//   return {
//     cart,
//     loading,
//     addToCart,
//     removeFromCart,
//     changeQuantity,
//   };
// }
