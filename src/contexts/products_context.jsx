import {createContext, useContext, useEffect, useReducer} from 'react'
import reducer from '../reducers/products_reducer'
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../action'
import { products_url as url } from '../utils/data'
import axios from 'axios'

const initialState = {
    isSidebarOpen: false
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
        try {
            const {data} = await axios(url)
            console.log(data);
        } catch(err) {
            
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