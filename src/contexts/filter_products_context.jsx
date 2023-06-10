import { createContext, useContext, useReducer } from "react"
import { useProductsContext } from './products_context'
import { LOAD_PRODUCTS, SET_GRID, SET_LIST, UPDATE_SORT } from "../action" 
const FilterContext = createContext()
import reducer from "../reducers/filter_products_reducer"
import { useEffect } from "react"
const initialState = {
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sort: "price-asc"
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
    const updateSort = (e) => {
        const { value } = e.target
        dispatch({type: UPDATE_SORT, payload: value})
    }
    return (
        <FilterContext.Provider value={{...state, setGridView, setListView, updateSort}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(FilterContext)
}

export {FilterProductsProvider, useFilterContext}