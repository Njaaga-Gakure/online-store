import styled from "styled-components"
import { services } from "../utils/data"
const Services = () => {
  return (
    <Wrapper>
        <div className="center-content">
            <h2 className="section-title"><span>our </span>services</h2>
            <section className="services">
                {services.map(({id, icon, title, info}) => {
                    return (
                        <article key={id} className="service">
                            {icon}
                            <h3 className="service-title">{title}</h3>
                            <p className="service-info">{info}</p>
                        </article>
                    )
                })}
            </section>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
background: var(--gray-100);
.center-content {
    margin: 0 auto;
    padding: 1rem 0;
}
.section-title {
    margin: 0;
    color: var(--gray-800);
    span {
        color: var(--primary-600);
    }
}
.services {
    margin: 2rem 0;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
}
.service * {
    margin: 0;
}
.service {
    padding: 1.5rem;
    background: var(--primary-100);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    svg {
        font-size: 2rem;
        color: var(--primary-800);
    }
}
.service-title {
    color: var(--gray-800);
    margin-bottom: 1rem;
}
.service-info {
    color: var(--gray-500);
`
export default Services