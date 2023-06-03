import styled from "styled-components"
import AboutImg from '../assets/about-img.webp'
const AboutPage = () => {
  return (
    <Wrapper className="full-page">
      <div className="center-content">
          <img className="about-img" src={AboutImg} alt="about image"/>
        <div className="about-info">
          <h1 className="about-heading">about <span>us</span></h1>
          <p className="about-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, earum vel adipisci itaque ipsa officia autem excepturi tempore corrupti cumque accusamus architecto possimus, molestias accusantium, sed deleniti exercitationem placeat quo voluptate? Molestiae cupiditate esse suscipit dolore quisquam sunt ad modi deserunt, quidem distinctio facilis possimus eligendi ratione quam dolorum eaque iusto iure ipsum quae omnis. Unde ut cum adipisci blanditiis atque voluptatem temporibus fugit, delectus est dolores, quis nobis quaerat voluptates reprehenderit</p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 1.5rem 0;
display: flex;
justify-content: center;
.about-info {
  margin-top: 1rem;
}
.about-heading {
  letter-spacing: 2px;
  margin: 0;
  text-align: center;
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
  margin: 0;
}
@media(min-width: 800px) {
  .center-content {
    display: grid;
    align-items: start;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    text-align: left;
  }
  .about-info {
    margin-top: 0;
  }
}
`
export default AboutPage