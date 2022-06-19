import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as QfLogo } from 'assets/images/qf/logo.svg'
import { ReactComponent as Menu } from 'assets/images/qf/menu.svg'
import { ReactComponent as Close } from 'assets/images/qf/close.svg'
import { navLinks } from 'Const'
import 'components/Navbar.css';

function NavItem({ text, ...rest }) {
    
    const makeClsName = (isActive) => {
        const baseClasses = 'qf__body my-auto font-xs font-medium';
        if (isActive) {
            return `${baseClasses} text-qf-orange`
        }
        return `${baseClasses} text-qf-light-brown`
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
    }

    const NavItems = () => {
        return (
            <div className='flex desktop:flex-row flex-col justify-between h-full w-full'>
                <div className='flex desktop:flex-row desktop:text-center flex-col desktop:gap-6 gap-2'>
                    { navLinks.map((e, i) => {
                        return <NavItem key={ i } { ...e } />
                    })}
                </div>
            </div>
        )
    }

    const isIndex = () => pathname === '/'

    const navBarCls = () => {
        let cls = 'desktop:px-40 px-6 bg-qf-dark-brown h-20 flex items-center shadow-sm justify-between'
        const addCls = (extra) => {
            if (extra.length > 0) {
                cls += ' ' + extra
            }
            return cls
        }
        return cls
    }

    return (
        <div className='sticky top-0 z-[9999] w-full h-20'>
            <div className={ navBarCls() }>
                <NavLink to='/' className='w-[60px] h-[60px] text-qf-light-brown'>
                    <QfLogo />
                </NavLink>
                <button className='desktop:hidden h-[20px] w-[20px] fill-qf-light-brown text-left font-bold text-lg' onClick={ toggleMenu }>
                    { menuOpen ? <Close /> : <Menu /> }
                </button>
                <div className='desktop:flex hidden'>
                    <NavItems />
                </div>
            </div>
            <div className={ (menuOpen ? 'nav-open' : 'nav-closed') + ' z-[9999] desktop:hidden transition-transform ease-out fixed top-20 right-0 bottom-0 w-[50vw] h-screen bg-qf-white desktop:text-left text-right' }>
                <div className='flex flex-col bg-qf-dark-brown h-full gap-12 pb-12'>
                    <div className='h-full px-6'>
                        <NavItems />
                    </div>
                </div>
            </div>
        </div>
    );
}
