import { NavLink } from 'react-router-dom'

export default function PageHero({ headerText, bodyText, img, comingSoonText, children }) {
    return (
        <div className='desktop:px-40'>
            <div className='flex max-w-main desktop:flex-row flex-col desktop:justify-between desktop:gap-10 gap-6 mx-auto'>
                <div className='desktop:px-0 px-6 flex flex-col desktop:justify-between gap-6'>
                    <div className='max-w-main text-left'>
                        <div className='w-full flex flex-row gap-6 desktop:mb-4 mb-2'>
                            <h1 className='qf__header mb-0'>
                                { headerText }
                            </h1>
                            { comingSoonText &&
                                <div className='rounded my-auto bg-qf-orange/30 px-2 py-0.5 text-qf-orange text-sm'>
                                    { comingSoonText }
                                </div>
                            }
                        </div>
                        <p className='qf__body max-w-body'>
                            { bodyText }
                        </p>
                    </div>
                    { comingSoonText && 
                        <NavLink to='/contact' className='qf__body text-qf-orange font-xs font-medium underline'>GET NOTIFIED</NavLink>
                    }
                </div>
                { img &&
                    <div className='h-full w-full aspect-video desktop:max-w-[500px] w-screen overflow-clip overflow-hidden desktop:rounded desktop:order-last order-first'>
                        <img className='w-full h-full object-cover' src={ img } />
                    </div>
                }
            </div>
        </div>
    )
}
