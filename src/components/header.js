import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import Button from "./Button/button"
import { HeaderDropdown } from "./header/header-dropdown"

const navBar = [
    {
        path: './help',
        name: 'Как зарядиться'
    },
    {
        path: './price',
        name: 'Цена'
    },
    {
        path: './partners',
        name: 'Партнерам'
    }
    , {
        path: './advertising',
        name: 'Реклама'
    }
]

export const Header = () => {
    const [dropdownState, setDropdownState] = useState(false);
    const dropdownRef = useRef();
    const burgerRef = useRef();

    return (
        <header className={`header ${dropdownState ? 'active' : ''}`}>
            <div className='header__row'>
                <Link to='/' className='logo__wrapper'>
                    <img src='/images/svg/logo.svg' alt='logo' />
                </Link>
                <nav>
                    <ul>
                        {navBar.map((link, i) => (
                            <li key={i}><Link to={link.path}>{link.name}</Link></li>
                        ))}
                    </ul>
                </nav>
                <div className='header__btns'>
                    <Button primary>Зарядись онлайн</Button>
                    <button
                        className={`header__burger ${dropdownState ? 'active' : ''}`}
                        onClick={() => {
                            setDropdownState(!dropdownState);
                            !dropdownState ? document.body.classList.add('scroll-disable') : document.body.classList.remove('scroll-disable');
                        }}
                        ref={burgerRef}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            <div className='header__row header__dropdown' ref={dropdownRef}>
                <HeaderDropdown burgerRef={burgerRef} dropdownRef={dropdownRef} setDropdownState={setDropdownState} />
            </div>
        </header>
    )
}