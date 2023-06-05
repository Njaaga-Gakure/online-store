import styled from 'styled-components';
import {Loading, Error, Product} from '../components'
import { useProductsContext } from '../contexts/products_context'
const FeaturedProducts = () => {
const {products_loading: loading, products_error: error, featured_products} = useProductsContext();
if (loading) {
    return <Loading />
}
if (error) {
    return <Error />
}
return (
    <Wrapper>
      <div className="center-content">
        <h2 className="title"><span>featured</span> products</h2>
        <div className="featured-products">
          {featured_products.map(product => {
            console.log(product)
            return <Product key={product.id} {...product} /> 
          }) }
        </div>
      </div>
    </Wrapper>  
)
}
const Wrapper = styled.section`
  background: var(--red-gray);
  padding: 1.5rem 1rem;
  .title {
    margin: 0;
    span {
      color: var(--primary-600);
    }
  }
  .featured-products {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
`
export default FeaturedProducts