import { NavLink } from 'react-router-dom';
import qfLogo from 'assets/images/qf_logo.svg';

function NavItemSet({ children }) {
    return (
        <div className='flex flex-row gap-x-6'>
            { children }
        </div>
    );
}

function NavItem({ text, ...rest }) {
    
    const makeClsName = (isActive) => {
        const baseClasses = 'font-1 text-dark text-center font-normal my-auto h-100';
        if (isActive) {
            return `${baseClasses} underline decoration-orange decoration-2`
        }
        return baseClasses
    }

    return (
        <NavLink { ...rest } className={({ isActive }) => makeClsName(isActive)}>
            { text.toUpperCase() }
        </NavLink>
    );
}

export function Navbar() {
    return (
        <div className='py-1.5 px-8 flex flex-row justify-between bg-grey border-b-4 border-orange'>
            <NavItemSet>
                <img src={ qfLogo } alt='qf-logo' />
                <NavItem to='/' text='Home' />
                <NavItem to='/about' text='About' />
                <NavItem to='/hunts' text='Hunts' />
                <NavItem to='/training' text='Training' />
                <NavItem to='/contact' text='Contact' />
            </NavItemSet>
            <NavItemSet>
                <NavItem to='/login' text='log in' />
                <NavItem to='/register' text='sign up' />
            </NavItemSet>
        </div>
    );
}
