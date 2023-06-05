import styled from 'styled-components';
import {Loading, Error, Product} from '../components'
import {Link} from 'react-router-dom'
import { useProductsContext } from '../contexts/products_context'
const FeaturedProducts = () => {
const {products_loading: loading, products_error: error, featured_products: featured} = useProductsContext();
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
          {featured.map(product => {
            return <Product key={product.id} {...product} /> 
          }) }
        </div>
        <Link className='btn' to='/products'>
          all products
        </Link>
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
  .btn {
    display: inline-block;
    margin-top: 2rem;
    border: 1px solid var(--primary-600);
    padding: .75rem 2rem;
    border-radius: var(--border-radius);
    color: var(--primary-600);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    transition: var(--transition);
    &:hover {
      background: var(--primary-600);
      color: var(--white);
    }
  }
`
export default FeaturedProducts