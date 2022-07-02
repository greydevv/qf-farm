import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as QfLogo } from 'assets/images/qf/logo.svg'
import { ReactComponent as Menu } from 'assets/images/qf/menu.svg'
import { ReactComponent as Close } from 'assets/images/qf/close.svg'
import { navLinks } from 'Const'
// import { useAuth0 } from '@auth0/auth0-react'
import 'components/Navbar.css'

function NavItem({ text, ...rest }) {
    
    const makeClsName = (isActive) => {
        const baseClasses = 'qf__body my-auto text-xs font-medium';
        if (isActive) {
            return `${baseClasses} text-qf-orange`
        }
        return `${baseClasses} text-qf-light-brown`
    }

    return (
        <NavLink { ...rest } className={({ isActive }) => makeClsName(isActive)}>
            { text.toUpperCase() }
        </NavLink>
    )
}

function NavButton({ children, ...rest }) {
    return (
        <button { ...rest } className='qf__btn'>
            { children }
        </button>
    )
}

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    // const { loginWithRedirect, logout, isAuthenticated, isLoading:isAuth0Loading } = useAuth0()
    const { pathname } = useLocation()

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const NavItems = () => {

        // const authButtonClicked = () => {
        //     if (isAuthenticated) {
        //         console.log('logging out')
        //         logout({ returnTo: window.location.origin })
        //     } else {
        //         console.log('logging in')
        //         loginWithRedirect()
        //     }
        // }

        const navCls = 'flex desktop:flex-row desktop:text-center text-right flex-col desktop:gap-6 gap-2' 

        return (
            <div className='flex desktop:flex-row flex-col justify-between h-full w-full'>
                <div className={ navCls }>
                    { navLinks.map((e, i) => {
                        return <NavItem key={ i } { ...e } />
                    })}
                </div>
                {/* !isAuth0Loading &&
                    <div className={ navCls }>
                        <div>
                            <NavButton onClick={ authButtonClicked }>
                                { isAuthenticated ? 'LOGOUT' : 'LOGIN' } 
                            </NavButton>
                        </div>
                    </div>
                */}
            </div>
        )
    }

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
            <div className={ (menuOpen ? 'nav-open' : 'nav-closed') + ' z-[9999] desktop:hidden transition-transform ease-out fixed top-20 right-0 bottom-0 w-[50vw] bg-qf-white desktop:text-left text-right' }>
                <div className='flex flex-col bg-qf-dark-brown h-full gap-12 pb-12'>
                    <div className='h-full px-6'>
                        <NavItems />
                    </div>
                </div>
            </div>
        </div>
    );
}
