import styled from 'styled-components';
import { Logo, CartButtons } from '../components';
import {CiMenuBurger} from 'react-icons/ci';
import {Link} from 'react-router-dom';
import { links } from '../utils/data';
import { useProductsContext } from '../contexts/products_context';

const Navbar = () => {
    const { openSidebar } = useProductsContext()
    return (
        <Nav>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to='/'>
                        <Logo />
                    </Link>
                    <button onClick={openSidebar} className='nav-toggle'>
                        <CiMenuBurger />
                    </button>
                </div>
                <ul className="nav-links">
                    {links.map(({id, text, url}) => {
                        return (
                            <li key={id}>
                                <Link to={url}>
                                    {text}
                                </Link>
                             </li>
                        )
                    })}
                </ul>
                <CartButtons />
            </div>
        </Nav>
    )
}

const Nav = styled.nav`
    height: 5rem;
    background: var(--gray-50);
    box-shadow: var(--shadow-1);
    display: grid;
    place-items: center;
    .nav-center {
        width: 90vw;
        max-width: 900px;
    }
    .nav-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-toggle {
        background: transparent;
        border-color: transparent;
        color: var(--primary-600);
        cursor: pointer;
        transition: var(--transition);
        &:hover {
            color: var(--primary-400);
            transform: rotate(90deg); 
        }
        svg {
            font-size: 1.75rem;
        }
    }
    .nav-links {
        display: none;
        letter-spacing: var(--letter-spacing);
        text-transform: capitalize;
       a {
        transition: var(--transition);
        &:hover {
            color: var(--primary-400);
        }
       }
    }
    .cart-btn-wrapper {
        display: none;
    }
    @media(min-width: 900px) {
        .nav-center {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .nav-toggle {
            display: none;
        }
        .nav-links {
            display: flex;
            gap: 1rem;
        }
        .cart-btn-wrapper {
            display: grid;
        }
    }
`

export default Navbar