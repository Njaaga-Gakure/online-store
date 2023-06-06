import { Loading, Error, ProductImages, Rating, AddToCart } from '../components'
import { useParams, useNavigate, Link } from "react-router-dom"
import {single_product_url as url } from '../utils/data'
import { priceFormat } from '../utils/helpers-functions'
import { useProductsContext } from "../contexts/products_context"
import { useEffect } from "react"
import styled from 'styled-components'
const SingleProductPage = () => {
  const {id} = useParams()
  const {
          fetchSingleProduct,
          single_product_loading: loading,
          single_product_error: error,
          single_product: product
        } = useProductsContext()    
  const navigate = useNavigate();      
  useEffect(()=> {
    if (error) {
      setTimeout(() => {
        navigate('/')
      }, 3000);
    }
  }, [error])      
  useEffect(()=>{
    fetchSingleProduct(`${url}${id}`)
  }, [])
  if (loading) {
    return (
    <div className="full-page">
      <Loading />
    </div>
    )
  }
  if (error) {
    return (
      <div className="full-page">
        <Error />
      </div>
    )
  }
  const {
          name,
          id: productID,
          description,
          images,
          price,
          rating,
          reviews,
          stock,
          colors,
          company
        } = product
  return (
    <Wrapper className='center-content full-page'>
       <Link to='/products' className='btn'>
        continue shopping
       </Link>
       <div className="product">
        <ProductImages images={images}/>
        <section className='product-content'>
          <h2 className='product-name'>{name}</h2>
          <Rating />
          <h5 className="product-price">{priceFormat(price)}</h5>
          <p className="product-desc">{description}</p>
          <p className="info">
            <span>Available</span>
            {stock > 0 ? 'in stock': 'out of stock'}
          </p>
          <p className="info">
            <span>SKU</span>
            {productID}
          </p>
          <p className="info">
            <span>brand</span>
            {company}
          </p>
          <hr />
          {stock > 0 && <AddToCart />}
        </section>
       </div>
    </Wrapper>
  )
}
const Wrapper = styled.main`
padding-top: 3rem;
text-align: left;
.btn {
    display: inline-block;
    background: var(--primary-600);
    padding: .5rem 1rem;
    border-radius: var(--border-radius);
    color: var(--white);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      background: var(--primary-400);
    }
}
.product {
  margin: 2rem 0;
}
.product-content {
  margin-top: 1rem; 
}
.product-name {
  color: var(--primary-800);
}
.product-price {
  letter-spacing: var(--letter-spacing);
  color: var(--primary-600);
}
.product-desc,
.info{
  letter-spacing: var(--letter-spacing);
  color: var(--gray-900);
}
.product-desc {
  margin: 0;
  max-width: 600px;
} 
.info {
  text-transform: capitalize;
}
.info span {
  display: inline-block;
  background: var(--primary-300);
  padding: 0 .5rem;
  border-radius: var(--border-radius);
  color: var(--white);
  margin-right: 1rem;
  box-shadow: var(--shadow-2);
}
hr {
  margin-top: 2rem;
}
@media(min-width: 900px) {
  .product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem
  }
  .product-content {
    margin-top: 0; 
  }
}
`
export default SingleProductPage