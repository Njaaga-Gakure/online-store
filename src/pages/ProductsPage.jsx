import styled from "styled-components"
import { Filters, ProductsList, Sort } from "../components"
const ProductsPage = () => {
  return (
    <main>
      <Wrapper className="full-page">
        <div className="center-content products">
            <Filters />
            <div>
              <Sort />
              <ProductsList />
            </div>
        </div>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div`
.products {
  margin: 4rem auto 2rem;
  display: grid;
  gap: 1rem;
}
@media(min-width: 600px) {
  .products {
    grid-template-columns: 200px 1fr;
  }
}
`
export default ProductsPage