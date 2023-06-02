import {createContext, useContext, useReducer} from 'react'
import reducer from '../reducers/products_reducer'
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../action'

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
    console.log(state)
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