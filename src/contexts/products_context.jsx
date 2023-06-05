import {createContext, useContext, useEffect, useReducer} from 'react'
import reducer from '../reducers/products_reducer'
import { 
        OPEN_SIDEBAR, 
        CLOSE_SIDEBAR, 
        FETCH_PRODUCTS_BEGIN,
        FETCH_PRODUCTS_SUCCESS,
        FETCH_PRODUCTS_ERROR
       } from '../action'
import { products_url as url } from '../utils/data'
import axios from 'axios'

const initialState = {
    isSidebarOpen: false,
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: []
}

const ProductsContext = createContext()

const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const openSidebar = () => {
        dispatch({type: OPEN_SIDEBAR})
    }
    const closeSidebar = () => {
        dispatch({type: CLOSE_SIDEBAR})
    }
    const fetchProducts = async () => {
        dispatch({type: FETCH_PRODUCTS_BEGIN})
        try {
            const {data: products} = await axios(url)
            dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: products})
        } catch(err) {
            console.log(err)
            dispatch({type: FETCH_PRODUCTS_ERROR})
        }
    }
    
    useEffect(()=> {
        fetchProducts()
    }, [])
    return (
        <ProductsContext.Provider value={{...state, openSidebar, closeSidebar}}>
            {children}
        </ProductsContext.Provider>
    )
}

const useProductsContext = () => {
    return useContext(ProductsContext)
}

export {ProductsProvider, useProductsContext}