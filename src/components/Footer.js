import { NavLink } from 'react-router-dom'
import { navLinks } from 'Const'

export default function Footer() {
    return (
        <div className='border-t-2 border-qf-light-brown flex-1 h-full bg-qf-dark-brown desktop:px-40 px-6 desktop:py-10 py-6'>
            <h1 className='text-lg tracking-widest font-1 text-qf-white mb-6'>
                QUILL FEATHER FARM
            </h1>
            <div className='flex desktop:flex-row flex-col desktop:gap-6 gap-1'>
                { navLinks.map(({to, text}, i) => {
                    return (
                        <NavLink key={ i } to={ to } className='qf__body text-qf-light-brown font-xs font-medium'>
                            { text }
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}
