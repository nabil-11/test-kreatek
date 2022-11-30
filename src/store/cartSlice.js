import { createSlice } from '@reduxjs/toolkit'
export const cartSlice = createSlice({
    name: 'cart',
    initialState : {
      cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
      cartTotalQuantity: 0,
    cartTotalAmount: 0,
    lastProd:0 ,
    nbr_gifts:0 , 
    
    },
    reducers: {
      addToCart(state, action) {
          const existingIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
    
          if (existingIndex >= 0) {
            state.cartItems[existingIndex] = {
              ...state.cartItems[existingIndex],
              cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
            
            };
            if(action.payload.is_gift) state.nbr_gifts = state.nbr_gifts +1 ;
          } else {
            let tempProductItem = { ...action.payload, cartQuantity: 1 };
            state.cartItems.push(tempProductItem);
            state.lastProd = action.payload.prix_ttc
           if( action.payload.is_gift ) state.nbr_gifts = +1 ;
          }
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
         
        decreaseCart(state, action) {
          const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
  
          if(action.payload.is_gift) state.nbr_gifts = state.nbr_gifts -1 ;
          if (state.cartItems[itemIndex].cartQuantity > 1) {
            state.cartItems[itemIndex].cartQuantity -= 1;
    
          } else if (state.cartItems[itemIndex].cartQuantity === 1) {
            const nextCartItems = state.cartItems.filter(
              (item) => item.id !== action.payload.id
            );
    
            state.cartItems = nextCartItems;
    
       
          }
    
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeFromCart(state, action) {
          state.cartItems.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
              const nextCartItems = state.cartItems.filter(
                (item) => item.id !== cartItem.id
              );
    
              state.cartItems = nextCartItems;
    
       
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            return state;
          });
        },
        getTotals(state, action) {
          let { total, quantity } = state.cartItems.reduce(
            (cartTotal, cartItem) => {
              const { prix_ttc, cartQuantity } = cartItem;
              const itemTotal = prix_ttc * cartQuantity;
                
              cartTotal.total += itemTotal;
              cartTotal.quantity += cartQuantity;
    
              return cartTotal;
            },
            {
              total: 0,
              quantity: 0,
            }
          );
          total = parseFloat(total.toFixed(2));
          state.cartTotalQuantity = quantity;
          state.cartTotalAmount = total;
        },
        clearCart(state, action) {
          state.cartItems = [];
          state.nbr_gifts = 0 ;
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
         
        },
    },
  })
  export const {addToCart, decreaseCart, removeFromCart, getTotals, clearCart} = cartSlice.actions ;
  export default cartSlice.reducer ;


  