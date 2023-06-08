import styled from "styled-components"
import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs"

const Rating = ({rating, reviews}) => {
  const stars = Array.from({length: 5}, (_, index) => {
      return (
        <span key={index}>
          {rating >= index + 1? <BsStarFill /> :
          rating >= index + 0.5? <BsStarHalf />: <BsStar />}
        </span>
      )
  })
  return (
    <Wrapper>
      <div className="rating">
        {stars}
      </div>
      <div className="reviews">
        <p>({reviews}) customer reviews</p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .25rem;
  .rating {
    svg {
      color: #ffd700;
      margin-right: 2px;
    }
  }
  .reviews {
    letter-spacing: var(--letter-spacing);
  }
`
export default Rating