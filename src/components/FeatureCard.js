import { NavLink } from 'react-router-dom';

export default function FeatureCard({ img, titleText, bodyText, to }) {

    return (
        <NavLink to={ to }>
            <div className='desktop:max-h-fit desktop:max-w-[16rem] desktop:aspect-[5/7] max-h-20 relative flex rounded overflow-clip desktop:flex-col text-qf-white bg-qf-brown'>
                <div className='desktop:h-[70%]'>
                    <div className='h-full relative'>
                    <div className='absolute top-0 left-0 h-full w-full bg-qf-black opacity-20'></div>
                    <img className='h-full w-full object-cover' src={ img } />
                </div>
                    <h1 className='desktop:text-3xl text-2xl text-qf-white absolute left-4 top-4 font-1 text-2xl'>{ titleText.toUpperCase() }</h1>
                </div>
                <div className='desktop:flex hidden px-4 pt-4 pb-8'>
                    <p className='qf__body text-qf-white'>{ bodyText }</p>
                </div>
            </div>
        </NavLink>
    )
}
