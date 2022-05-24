import { NavLink } from 'react-router-dom';
import qfLogo from 'assets/images/qf_logo.svg';
import './Navbar.scss';

function NavItem({ text, ...rest }) {
    const className = 'navbar__item';
    const activeClassName = className + '-active';
    return (
        <NavLink { ...rest } className={({ isActive }) => isActive ? activeClassName : className}>
            { text.toUpperCase() }
        </NavLink>
    );
}

export function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__items'>
                <img src={ qfLogo } className='navbar__item-logo' />
                <NavItem to='/about' text='About' />
                <NavItem to='/hunts' text='Hunts' />
                <NavItem to='/training' text='Training' />
                <NavItem to='/contact' text='Contact' />
            </div>
        </div>
    );
}
