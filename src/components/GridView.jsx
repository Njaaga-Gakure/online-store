import styled from "styled-components"
import Product from "./Product"
const GridView = ({products}) => {
  return (
    <Wrapper>
      {products.map(product =>{
        return <Product key={product.id} {...product} />
      })}
    </Wrapper> 
  )
}
const Wrapper = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 1.5rem;
img {
  height: 175px;
}
`
export default GridView