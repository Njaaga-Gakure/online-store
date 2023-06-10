import styled from "styled-components"
import { priceFormat } from "../utils/helpers-functions"
import { Link } from "react-router-dom"

const ListView = ({products}) => {
  return (
    <Wrapper>
      {products.map(({id, image, name, price, description}) => {
        return (
          <article key={id} className="product">
            <img src={image} alt={name} className="product-img"/>
            <div className="product-info">
              <h5 className="product-name">{name}</h5>
              <p className="product-price">{priceFormat(price)}</p>
              <p className="product-desc">{description.substring(0, 200)}...</p>
              <Link className="btn" to={`/products/${id}`}>more details</Link>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 2rem;
  text-align: left;
  p {
    margin: 0;
  }
  .product {
    display: grid;
    gap: 1.5rem;
  }
  .product-img {
   height: 300px;
  }
  .product-name {
    color: var(--primary-800);
    letter-spacing: var(--letter-spacing);
    margin-bottom: .5rem;
  }
  .product-price {
    color: var(--primary-600);
    letter-spacing: var(--letter-spacing);
    margin-bottom: .5rem;
  }
  .product-desc {
    color: var(--gray-600);
    letter-spacing: var(--letter-spacing);
  }
  .btn {
    display: inline-block;
    margin-top: 1rem;
    background: var(--primary-600);
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    padding: .25rem 1.5rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
    &:hover {
      background: var(--primary-400);
    }
  }
  @media(min-width: 900px) {
    .product {
      grid-template-columns: 300px 1fr;
      align-items: center;
    }
  }
`
export default ListView