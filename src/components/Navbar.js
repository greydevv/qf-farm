import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import qfLogo from 'assets/images/qf_logo.svg';
import 'components/Navbar.css';

function NavItemSet({ children }) {
    return (
        <div className='flex desktop:flex-row flex-col desktop:gap-6 gap-2'>
            { children }
        </div>
    );
}

function NavItem({ text, ...rest }) {
    
    const makeClsName = (isActive) => {
        const baseClasses = 'font-2 text-qf-white font-normal my-auto desktop:text-center text-left';
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

    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        console.log(menuOpen)
    }

    const navBarCls = 'bg-qf-brown p-6'

    const ToggleButton = () => {
        return (
            <button className='h-[28px] w-[28px] text-qf-white' onClick={ toggleMenu} >
                { menuOpen ? 'CLOSE' : 'OPEN' }
            </button>
        )
    }

    const NavItems = () => {
        return (
            <div className='flex desktop:flex-row flex-col justify-between h-full'>
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
        )
    }

    return (
        <div>
            <div className={ navBarCls }>
                <ToggleButton />
                <div className='desktop:flex hidden'>
                    <NavItems />
                </div>
            </div>
            <div className={ (menuOpen ? 'nav-open' : 'nav-closed') + ' z-[9999] transition-transform ease-out fixed top-0 left-0 bottom-0 w-[80vw] h-screen bg-qf-brown' }>
                <div className='flex flex-col h-full gap-6 pb-12'>
                    <div className={ navBarCls }>
                        <div className='h-full my-auto'>
                            <ToggleButton />
                        </div>
                    </div>
                    <div className='h-full px-6'>
                    <NavItems />
                    </div>
                </div>
            </div>
        </div>
    );
}
