import styled from "styled-components"
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Wrapper className="full-page">
        <div className="center-content">
          <h2 className="error-name">Error: <span>404</span></h2>
          <p className="error-desc">You don't have to go home but you can't stay here :(</p>
          <Link className="btn" to='/'>
              back home
          </Link>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    display: grid;
    place-items: center;
  .error-name,
  .error-desc {
    margin: 0;
  }
  .error-name span {
    color: var(--primary-600);
  }
  .error-desc {
    color: var(--gray-500);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
  }
  .btn {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: var(--primary-700);
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    &:hover {
      background: var(--primary-900);
      transform: scale(1.02);
    }
  }
`
export default ErrorPage