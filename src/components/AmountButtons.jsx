import styled from "styled-components"
import {HiOutlinePlus, HiMinus} from "react-icons/hi"
const AmountButtons = ({increase, decrease, amount}) => {
  return (
    <Wrapper>
        <button onClick={decrease}>
            <HiMinus /> 
        </button>
        <h2>{amount}</h2>
        <button onClick={increase}>
            <HiOutlinePlus />
        </button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    margin-top: .5rem;
    color: var(--gray-800);
    display: flex;
    align-items: center;
    button {
        border-color: transparent;
        background: transparent;
        cursor: pointer;
        svg {
            color: var(--primary-900);
            font-size: 2rem;
        }
    }
    h2 {
        margin: 0;
    }
`
export default AmountButtons