import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import { ADD_TO_CART } from "../action";
import { useEffect } from "react";

const getLocalStorage = () => {
    let cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : []
}
const initialState = {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0
}

const CartContext = createContext()
const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, color, amount, product) => {
        dispatch({type: ADD_TO_CART, payload: {id, color, amount, product}})
    }
     // remove item 
    const removeItem = (id) => {}  
    // toggle amount
    const toggleAmount = (id, value) => {}  
    // clear cart
    const clearCart = () => {}

    useEffect(() =>{
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart] )
    return (
        <CartContext.Provider
            value={{
                    ...state, 
                    addToCart,
                    removeItem, 
                    toggleAmount, 
                    clearCart
                }}
        >
                {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext)
}

export {CartProvider, useCartContext}