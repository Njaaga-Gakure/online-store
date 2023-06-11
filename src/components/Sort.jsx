import styled from "styled-components"
import { useFilterContext } from "../contexts/filter_products_context"
import { BiGridHorizontal, BiListUl } from "react-icons/bi" 
const Sort = () => {
  const { filtered_products: products, grid_view, setListView, setGridView, updateSort, sort} = useFilterContext() 
  return (
    <Wrapper>
      <div className="sort-container">
        <div className="btn-container">
          <BiGridHorizontal
            style={{color: grid_view ? "var(--primary-600)": "#000000"}}
            onClick={setGridView}
           />
          <BiListUl
            style={{color: !grid_view ? "var(--primary-600)" : "#000000"}} 
            onClick={setListView}
          />
        </div>
        <p>({products.length}) products found</p>
        <hr style={{width: "100%"}} />
        <form>
          <label className="form-label" htmlFor="sort">sort by </label>
          <select onChange={updateSort} value={sort} name="sort" id="sort">
            <option value="price-asc">Price (asc)</option>
            <option value="price-desc">Price (desc)</option>
            <option value="name-a">Name (a - z)</option>
            <option value="name-z">Name (z - a)</option>
          </select>
        </form>
      </div> 
    </Wrapper>
  )
}
const Wrapper = styled.div`
text-align: left;
margin-bottom: 1rem;
.btn-container {
  display: flex;
  align-items: center;
  gap: 5px;
  svg {
      cursor: pointer;
      font-size: 2rem;
      color: var(--primary-600);
    }
}
p {
  color: var(--gray-700);
  letter-spacing: var(--letter-spacing);
  margin: 0;
}
.form-label {
  text-transform: capitalize;
  letter-spacing: var(--letter-spacing);
  color: var(--primary-900);
}
select {
  border: 1px solid var(--gray-600);
  padding: 2px 5px;
  background:  transparent;
  letter-spacing: var(--letter-spacing);
}
@media(min-width: 600px) {
  .sort-container {
    display: grid;
    gap: .5rem;
    grid-template-columns: auto auto 1fr auto;
    align-items: center;
  }
}
`
export default Sort