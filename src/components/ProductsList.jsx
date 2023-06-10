import GridView from "./GridView"
import ListView from "./ListView"
import { useFilterContext } from "../contexts/filter_products_context"
const ProductsList = () => {
  const {filtered_products: products, grid_view} =  useFilterContext()
  if (products.length < 1) {
    return (
    <h5 style={{letterSpacing: "1px", textAlign: "left"}}>
      sorry, no products matched your search criteria...
    </h5>
    )
  }
  return (
    grid_view ? 
    <GridView products={products}/> : 
    <ListView products={products} />
  )
}

export default ProductsList