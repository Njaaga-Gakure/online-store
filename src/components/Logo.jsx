import styled from "styled-components"
const Logo = () => {
  return (
    <Wrapper>
        <h2 className="logo">A<span>2</span>Z</h2>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    .logo {
      display: inline-block;
      margin: 0;
        font-family: 'Lobster Two', cursive;
        text-transform: uppercase;
        letter-spacing: 2px;
        span {
            color: var(--primary-600);
        }
    }

`
export default Logo