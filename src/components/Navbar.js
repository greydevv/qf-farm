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
        const baseClasses = 'font-2 text-qf-white text-center font-normal my-auto';
        if (isActive) {
            return `${baseClasses} underline decoration-qf-white decoration-2`
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
        <div className='py-8 px-8 flex flex-row justify-between bg-qf-brown'>
            <NavItemSet>
                <NavItem to='/' text='Home' />
                <NavItem to='/about' text='About' />
                <NavItem to='/hunts' text='Hunts' />
                <NavItem to='/training' text='Training' />
                <NavItem to='/contact' text='Contact' />
                <NavItem to='/admin' text='Admin' />
            </NavItemSet>
            <NavItemSet>
                <NavItem to='/login' text='log in' />
                <NavItem to='/register' text='sign up' />
            </NavItemSet>
        </div>
    );
}
