import { Link } from "react-router-dom";
import { FaCheck } from 'react-icons/fa'
import styled from "styled-components";
import { useState } from "react";
import {AmountButtons} from "../components"

const AddToCart = ({ product: {id, stock, colors} }) => {
  const [mainColor, setMainColor] = useState(colors[0])
  const [amount, setAmount] = useState(1);
  const increase = () => {
      setAmount(preAmount => {
        const newAmount = preAmount === stock ? stock : preAmount + 1
        return newAmount
      })
  }
  const decrease = () => {
    setAmount(preAmount => {
      const newAmount = preAmount === 1 ? 1 : preAmount - 1
      return newAmount
    })
  }
  return (
    <Wrapper>
        <div className="colors">
            <span>Colors: </span>
            <div>
              {colors.map((color, index) => {
                return <button
                        className= { mainColor === color ?
                          "color-btn active-btn" : "color-btn" }
                        style={{ background: color }}
                        key={index}
                        onClick={() => setMainColor(color)}
                        >
                          {mainColor === color && <FaCheck />}
                        </button>
              })}
            </div>
        </div>
        <div className="btn-container">
              <AmountButtons increase={increase} decrease={decrease} amount={amount}/> 
              <Link className="cart-btn" to="/cart">
                add to cart
              </Link>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .colors {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    span {
      letter-spacing: var(--letter-spacing);
    }
    div {
      display: flex;
      gap: 10px;
    }
  }
  .color-btn {
    display: grid;
    place-items: center;
    border: transparent;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.5;
    svg {
      color: var(--white);
      font-size: .75rem;
    }
  }
  .active-btn {
    opacity: 1;
  }
  .cart-btn {
    margin-top: .5rem;
    display: inline-block;
    background: var(--primary-600);
    border-color: transparent;
    letter-spacing: var(--letter-spacing);
    border-radius: var(--border-radius);
    color: var(--white);
    text-transform: capitalize;
    cursor: pointer; 
    padding: .25rem 1rem;
    transition: var(--transition);
    &:hover {
      background: var(--primary-400);
    }
  }
`
export default AddToCart