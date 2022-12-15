import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'components/Logo'
import { useRouter } from 'next/router'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
// import { useAuth0 } from '@auth0/auth0-react'
import navStyles from 'components/Navbar.module.css'
import PageBlock from 'components/PageBlock'
import { navLinks } from 'lookups/navigation.js'

function NavItem({ href, text, isActive }) {

    const makeClsName = () => {
        const baseClasses = 'qf__body my-auto text-sm font-medium tracking-wider';
        if (isActive) {
            return `${baseClasses} text-qf-orange`
        }
        return `${baseClasses} text-qf-light-brown`
    }

    return (
        <Link href={ href } className={ makeClsName() }>
          { text.toUpperCase() }
        </Link>
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
    const { pathname } = useRouter()

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const NavItems = () => {

        // const authButtonClicked = () => {
        //     if (isAuthenticated) {
        //         logout({ returnTo: window.location.origin })
        //     } else {
        //         loginWithRedirect()
        //     }
        // }

        const navCls = 'flex desktop:flex-row desktop:text-center text-right flex-col gap-6' 

        return (
            <div className='flex desktop:flex-row flex-col justify-between h-full w-full'>
                <div className={ navCls }>
                    { navLinks.map((e, i) => {
                        return <NavItem 
                            key={ i }
                            href={ e.href }
                            text={ e.text }
                            isActive={ pathname === e.href }
                        />
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

    const menuCls = () => {
        return menuOpen ? navStyles['nav-open'] : navStyles['nav-closed']
    }
    
    return (
        <div className='sticky top-0 z-[9999] w-full h-20 bg-qf-dark-brown'>
            <PageBlock
                outerCls='h-full'
                innerCls='h-full flex items-center justify-between'
            >
                <Link href='/' className='w-[60px] h-[60px] text-qf-light-brown'>
                  <Logo />
                </Link>
                <button className='desktop:hidden fill-qf-light-brown text-left font-bold text-lg' onClick={ toggleMenu }>
                    { menuOpen 
                        ? <CloseIcon fontSize='medium' className='text-qf-light-brown' /> 
                        : <MenuIcon fontSize='medium' className='text-qf-light-brown' />
                    }
                </button>
                <div className='desktop:flex hidden'>
                    <NavItems />
                </div>
            </PageBlock>
            <div className={ menuCls() + ' z-[9999] desktop:hidden transition-transform ease-out fixed top-20 right-0 bottom-0 w-[50vw] bg-qf-white desktop:text-left text-right' }>
                <div className='flex flex-col bg-qf-dark-brown h-full gap-12 pb-12'>
                    <div className='h-full px-6'>
                        <NavItems />
                    </div>
                </div>
            </div>
        </div>
    );
}
