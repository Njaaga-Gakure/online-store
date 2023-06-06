import { useState } from "react";
import styled from "styled-components";
const ProductImages = ({images =[{url: ''}]}) => {
  const [mainImg, setMainImg] = useState(images[0]) 
  return (
    <Wrapper>
      <img src={mainImg.url} alt="main image" className="main-img"/>
      <div className="gallery">
        {images.map((image, index) => {
          return <img
                  key= {index}
                  className={mainImg.url === image.url && 'active-img'}
                  onClick={() => setMainImg(images[index])}
                  src={image.url}
                  alt='gallery image'
                  />
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
img {
  width: 100%;
}
.main-img {
  height: 500px;
} 
.gallery {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  img {
    height: 100px;
    cursor: pointer;
    opacity: 0.6;
  }
  .active-img {
    border: 2px solid var(--primary-200);
    opacity: 1;
  }
}
@media (max-width: 576px) {
  .main-img{
    height: 300px;
  }
}
`
export default ProductImages