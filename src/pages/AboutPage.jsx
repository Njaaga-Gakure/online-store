import styled from "styled-components"
import AboutImg from '../assets/about-img.webp'
const AboutPage = () => {
  return (
    <Wrapper className="full-page">
      <div className="center-content">
        <h1 className="about-heading">about <span>us</span></h1>
        <div className="about-info">
          <img className="about-img" src={AboutImg} alt="about image"/>
          <p className="about-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, earum vel adipisci itaque ipsa officia autem excepturi tempore corrupti cumque accusamus architecto possimus, molestias accusantium, sed deleniti exercitationem placeat quo voluptate? Molestiae cupiditate esse suscipit dolore quisquam sunt ad modi deserunt, quidem distinctio facilis possimus eligendi ratione quam dolorum eaque iusto iure ipsum quae omnis. Unde ut cum adipisci blanditiis atque voluptatem temporibus fugit, delectus est dolores, quis nobis quaerat voluptates reprehenderit necessitatibus aspernatur ducimus consequuntur tempora vero excepturi! Iure</p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 1.5rem 0;
display: flex;
justify-content: center;
.about-heading {
  letter-spacing: 2px;
}
.about-heading span {
  color: var(--primary-600);
}
.about-img {
  height: 400px;
  object-fit:cover;
  border-radius: var(--border-radius);
}
.about-desc {
  color: var(--gray-700);
  letter-spacing: var(--letter-spacing);
}
@media(min-width: 800px) {
  .about-info {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    text-align: left;
  }
}
`
export default AboutPage