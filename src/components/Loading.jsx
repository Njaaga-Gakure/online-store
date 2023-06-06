import styled from "styled-components"

const Loading = () => {
  return (
        <Wrapper className="center-content">
          <div className="loading"></div>
        </Wrapper>
  )
}
const Wrapper = styled.div`
  padding: 2rem;
  margin: 0 auto;
 .loading {
  margin: 0 auto;
 }
`
export default Loading