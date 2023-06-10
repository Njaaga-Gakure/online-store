import { createContext, useContext, useReducer } from "react"
import { useProductsContext } from './products_context'
import { LOAD_PRODUCTS, SET_GRID, SET_LIST } from "../action" 
const FilterContext = createContext()
import reducer from "../reducers/filter_products_reducer"
import { useEffect } from "react"
const initialState = {
    filtered_products: [],
    all_products: [],
    grid_view: false,
}
const FilterProductsProvider = ({children}) => {
    const { products } = useProductsContext()
    const [state, dispatch ] = useReducer(reducer, initialState)
    
    useEffect(()=> {
        dispatch({type: LOAD_PRODUCTS, payload: products})
    }, [products])

    const setGridView = () => {
        dispatch({type: SET_GRID})
    }
    const setListView = () => {
        dispatch({type: SET_LIST})
    }
    return (
        <FilterContext.Provider value={{...state, setGridView, setListView}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(FilterContext)
}

export {FilterProductsProvider, useFilterContext}