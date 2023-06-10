import styled from "styled-components"
import { useFilterContext } from "../contexts/filter_products_context"
import { BiGridHorizontal, BiListUl } from "react-icons/bi" 
const Sort = () => {
  const { filtered_products: products, setListView, setGridView } = useFilterContext() 
  return (
    <Wrapper>
      <div className="sort-container">
        <div className="btn-container">
          <BiGridHorizontal onClick={setGridView} />
          <BiListUl onClick={setListView}/>
        </div>
        <h5>({products.length}) products found</h5>
        <hr />
        {/* <p>kkskksk</p> */}
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
      color: var(--primary-800);
    }
}
h5 {
  color: var(--gray-700);
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