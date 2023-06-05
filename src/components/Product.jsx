import styled from "styled-components"
import { Link } from "react-router-dom"
import {BsSearch} from "react-icons/bs"
import { priceFormat } from '../utils/helpers-functions'
const Product = ({id, image, name, price}) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img className="product-img" src={image} alt={name} />
        <Link className="product-btn" to={`/products/${id}`}>
            <BsSearch />
        </Link>
      </div>
      <div className="product-info">
          <h5 className="product-name">{name}</h5>
          <p className="product-price">{priceFormat(price)}</p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
background: var(--gray-100);
border-radius: var(--border-radius);
box-shadow: var(--shadow-2);
.img-container {
  position: relative;
}
.product-img {
  height: 250px;
  object-fit: cover;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  transition: var(--transition);
}
.product-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2rem;
  color: var(--primary-600);
  opacity: 0;
  transition: var(--transition);
}
.img-container:hover .product-img {
  opacity: 0.5;
}
.img-container:hover .product-btn {
  opacity: 1;
}
.product-info {
  padding: .5rem 1rem;
}
.product-name {
  margin: 0;
  letter-spacing: var(--letter-spacing);
}
.product-price {
  margin: 0;
  letter-spacing: var(--letter-spacing);
  color: var(--primary-800);
}
`
export default Product