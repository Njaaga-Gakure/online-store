import styled from "styled-components"
import { TiShoppingCart, TiUserAdd, TiUserDelete} from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { useProductsContext } from "../contexts/products_context"

const CartButtons = () => {
  const { closeSidebar } = useProductsContext() 
  return (
   <Wrapper className="cart-btn-wrapper">
        <Link onClick={closeSidebar} to='/cart'> 
            Cart
            <span className="cart-container">
                <TiShoppingCart />
                <span className="cart-value">12</span>
            </span>
        </Link>
        <button className="auth-btn">
            Login<TiUserAdd />
        </button>
   </Wrapper>
  )
}
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 225px;
    a {
        display: flex;
        align-items: center;
        font-size: 1.25rem;
    }
    .cart-container {
        position: relative;
        display: flex;
        align-items: center;
        svg {
            font-size: 2rem;
            color: var(--gray-600);
        }
    }
    .cart-value {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -0.5rem;
        right: -0.5rem;
        background: var(--primary-700);
        font-size: .8rem;
        color: var(--white);
        letter-spacing: var(--letter-spacing);
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
    .auth-btn {
        display: flex;
        align-items: center;
        background: transparent;
        border-color: transparent;
        font-size: 1.25rem;
        cursor: pointer;
        svg {
            font-size: 1.5rem;
            color: var(--gray-600);
        }
    }
`
export default CartButtons