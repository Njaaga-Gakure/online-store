import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Hero = () => {
  return (
    <Wrapper>
       <div className="hero center-content">
        <h2 className="hero-title">
             A<span>2</span>Z
            </h2>
            <p className="hero-tagline">
                we are digitally yours.
            </p>
            <Link className="hero-btn" to="/products">
                shop now
            </Link>
       </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
background-color: var(--gray-100);
background-image: url('/hero.jpg');
background-repeat: no-repeat;
background-size: cover; 
background-position: top-left;
padding: 5rem 1rem;
.hero {
    margin: 0 auto;
}
.hero-title,
.hero-tagline {
    margin: 0;
}
.hero-title {
    font-size: 4rem;
    color: var(--gray-50);
    letter-spacing: 2px;
    span {
        color: var(--primary-400);
    }
}
.hero-tagline {
    font-size: 2rem;
    letter-spacing: 2px;
    text-transform: capitalize;
    color: var(--gray-50);
}
.hero-btn {
    display: inline-block;
    margin-top: 2rem;
    background: var(--primary-600);
    box-shadow: var(--shadow-2);
    color: var(--white);
    padding: .5rem 2rem;
    border-radius: var(--border-radius);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    transition: var(--transition);
    &:hover {
        background: var(--primary-500);
        color: var(--white);
        transform: scale(1.02);
    }
}
`
export default Hero