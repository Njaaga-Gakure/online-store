import styled from "styled-components"
import { Logo, CartButtons} from '../components'
import {Link} from 'react-router-dom'
import {RxCross1} from 'react-icons/rx'
import { links } from '../utils/data'
import { useProductsContext } from "../contexts/products_context"

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useProductsContext()
  return (
    <Wrapper>
      <aside className={isSidebarOpen ? "sidebar show-sidebar" : 'sidebar'}>
          <div className="sidebar-header">
            <Link onClick={closeSidebar} to='/'>
              <Logo />
            </Link>
            <button onClick={closeSidebar} className="close-btn">
              <RxCross1 />
            </button>
          </div>
          <ul className="sidebar-links">
            {links.map(({id, text, url}) => {
              return (
                <li key={id}>
                  <Link onClick={closeSidebar} to={url}>
                    {text}
                  </Link>
                </li> 
              )
            })}
            <li>
              <Link onClick={closeSidebar} to='/checkout'>
                checkout
              </Link>
            </li>
          </ul>
          <div className="center-cart-btn">
            <CartButtons />
          </div>
      </aside>
    </Wrapper>
  )
}
const Wrapper = styled.div`
 .sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gray-50);
  z-index: -1;
  transform: translate(-100%);
  transition: var(--transition);
}
.show-sidebar {
  z-index: 999;
  transform: translate(0);
}
.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  margin: 1rem auto;
}
.close-btn {
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  svg {
    color: var(--primary-600);
    font-size: 1.5rem;
    transition: var(--transition);
    &:hover {
      color: var(--primary-400);
    }
  }
}
.sidebar-links {
  a {
    display: block;
    padding: 0.5rem 1.5rem;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    color: var(--gray-500);
    transition: var(--transition);
    &: hover {
      color: var(--gray-50);
      background: var(--primary-100);
      padding-left: 2rem;
    }
  }
}
.center-cart-btn {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
@media(min-width: 900px) {
  .sidebar {
    display: none;
  }
}
`
export default Sidebar