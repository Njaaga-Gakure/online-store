import styled from "styled-components"
import { useFilterContext } from "../contexts/filter_products_context"
import { FaCheck } from 'react-icons/fa'
import { priceFormat, getUniqueValues } from "../utils/helpers-functions"

const Filters = () => {
  const { 
          updateFilters,
          clearFilters, 
          filters: {
            text,
            company,
            color,
            min_price,
            price,
            max_price
          },
          all_products 
        } = useFilterContext()
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')
  return (
    <Wrapper>
      <form onSubmit={((e) => e.preventDefault())}>
          <input 
            className="form-input"
            type="text"
            name="text"
            onChange={updateFilters}
            value={text}
            placeholder="Search..."
          />
      </form>
      <div className="companies-container">
          <h5>brand</h5>
          <div className="companies">
            {companies.map((c, index) => {
              return (
                <button 
                  className={company === c ? "company active" : "company"}
                  key={index}
                  onClick={updateFilters}
                  name="company"
                >
                  {c}
                </button>
              )
            })}
         </div>
        </div>
        <div className="colors-container">
          <h5>colors</h5>
          <div className="colors">
            {colors.map((c, index) => {
              if (c === 'all') {
                return (
                  <button
                    key={index}
                    name="color"
                    className={color === c ? "generic-btn active" : "generic-btn"}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {c}
                  </button>
                )
              }
              return (
                <button
                  key={index}
                  name="color"
                  style={{background: c}}
                  className={color === c ? "color-btn active-color" : "color-btn"}
                  data-color={c}
                  onClick={updateFilters}
                >
                  {color === c ? <FaCheck /> : ""}
                </button>
              ) 
            })}
          </div>
        </div>
        <div className="price-container">
          <h5>price</h5>
          <p className="price">{priceFormat(price)}</p>
          <input 
            type="range"
            name="price"
            min={min_price}
            max={max_price}
            value={price}
            onChange={updateFilters}
            />
        </div>
        <button className="clear-btn" onClick={clearFilters}>clear filters</button>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  text-align: left;

  form {
    margin-top: .5rem;
  }
  .form-input {
    background: var(--white);
    border: 1px solid var(--gray-500);
    border-radius: 3px;
    padding: 0.5rem 1rem;
  }
  .companies-container {
    margin-top: 1rem;
  }
  h5 {
    color: var(--primary-800);
    letter-spacing: var(--letter-spacing);
  }
  .companies {
    margin-top: .5rem;
    display: flex;
    gap: .5rem;
  }
  .company {
    text-align: left;
    background: transparent;
    border-color: transparent;
    padding: 0;
    padding-bottom: 2px;
    color: var(--gray-600);
    letter-spacing: 2px;
    text-transform: capitalize;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      border-bottom: 1px solid var(--gray-600);
    }
  }
  .active {
    color: var(--primary-600);
   
  }
  .colors-container {
    margin-top: 1rem;
  }
  .colors {
    margin-top: .5rem;
    display: flex;
    gap: 5px;
    align-items: center;
  }
  .generic-btn {
    background: transparent;
    border-color: transparent;
    padding: 0;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    cursor: pointer;
  }
  .color-btn {
    border-color: transparent;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    opacity: 0.5;
    display: flex;
    align-items: center;
    jusdtify-content: center;
    svg {
      color: var(--white);
    }
  }
  .active-color {
    opacity: 1;

  }
  .price-container {
    margin-top: 1rem;
    input {
      margin: 0;
    }
  }
  p {
    margin: 0;
    margin-top: .5rem;
    color: var(--gray-600);
  }
  .clear-btn {
    margin-top: .5rem;
    background: var(--primary-600);
    border-color: transparent;
    padding: .25rem 1rem;
    color: var(--white);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      background: var(--primary-400);
    }
  }
  @media(min-width: 600px) {
    .companies {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`
export default Filters