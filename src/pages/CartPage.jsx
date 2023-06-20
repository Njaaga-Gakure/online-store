import styled from "styled-components";
import { CartContent } from "../components";
import { useCartContext } from "../contexts/cart_context"
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <Wrapper className="full-page">
        <div className="center-content">
            <h4>your cart is empty :(</h4>
            <Link className="fill-cart-btn" to="/products">
                fill your cart
            </Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper className="full-page">
      <CartContent cart={cart}/>
    </Wrapper>
  )
}
const Wrapper = styled.main`
  .center-content {
    margin-top: 5rem;
    h4 {
      color: var(--primary-800);
      letter-spacing: 2px;
    }
    .fill-cart-btn {
      display: inline-block;
      background: var(--primary-600);
      margin-top: 1rem;
      padding: .5rem 1rem;
      border-radius: var(--border-radius);
      color: var(--white);
      letter-spacing: var(--letter-spacing);
      text-transform: capitalize;
      transition: var(--transition);
      &:hover {
        background: var(--primary-400);
      }
    }
  }
`
export default CartPage