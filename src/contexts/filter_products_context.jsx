import { createContext, useContext, useReducer } from "react"
import { useProductsContext } from './products_context'
import { LOAD_PRODUCTS, SET_GRID, SET_LIST, UPDATE_SORT, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS} from "../action" 
const FilterContext = createContext()
import reducer from "../reducers/filter_products_reducer"
import { useEffect } from "react"
const initialState = {
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sort: "price-asc",
    filters: {
        text: "",
        company: "all",
        color: "all",
        min_price: 0,
        price: 0,
        max_price: 0
    }
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
    useEffect(()=>{
        dispatch({ type: FILTER_PRODUCTS })
        dispatch({type: SORT_PRODUCTS})
    }, [products, state.sort, state.filters])
    const updateFilters = (e) => {
        const name = e.target.name
        let value = e.target.value
        if (name === 'company') {
            value = e.target.textContent
        } else if (name === 'color') {
            value = e.target.dataset.color
        }
        if (name === "price") {
            value = Number(value)
        }
        dispatch({ type: UPDATE_FILTERS, payload: { name, value }})
    }
    const clearFilters = () => {
       
    }
    return (
        <FilterContext.Provider
            value={{
                    ...state, 
                    setGridView,
                    setListView,
                    updateSort,
                    updateFilters,
                    clearFilters
        }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(FilterContext)
}

export {FilterProductsProvider, useFilterContext}