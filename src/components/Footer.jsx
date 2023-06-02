import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()} A<span>2</span>Z
      </h5>
      <p>all rights reserved</p>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  height: 5rem;
  background: var(--red-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h5,
  p {
    color: var(--gray-600);
    margin: 0;
  }
  h5 span {
    color: var(--primary-700);
  }
  p {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing); 
  }
  `
export default Footer