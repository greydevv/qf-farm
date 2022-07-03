import { NavLink } from 'react-router-dom'

export default function PageHero({ headerText, bodyText, imgObj, comingSoonText, children }) {
    return (
        <div className='desktop:px-40'>
            <div className='flex max-w-main desktop:flex-row flex-col desktop:justify-between desktop:gap-10 gap-6 mx-auto'>
                <div className='h-full desktop:px-0 px-6 flex flex-col desktop:justify-between gap-6'>
                    <div className='max-w-main text-left'>
                        <div className='w-full flex flex-row gap-6 desktop:mb-4 mb-2'>
                            <h1 className='text-qf-black mb-0'>
                                { headerText }
                            </h1>
                            { comingSoonText &&
                                <div className='rounded my-auto bg-qf-orange/30 px-2 py-0.5 text-qf-orange text-sm'>
                                    { comingSoonText }
                                </div>
                            }
                        </div>
                        <p className='max-w-body'>
                            { bodyText }
                        </p>
                    </div>
                    { children }
                </div>
                { imgObj &&
                    <div className='h-full w-full aspect-video desktop:max-w-[500px] overflow-clip overflow-hidden desktop:rounded desktop:order-last order-first'>
                        <img className='w-full h-full object-cover' alt={ imgObj.alt } src={ process.env.REACT_APP_S3_BUCKET_NAME + imgObj.url } />
                    </div>
                }
            </div>
        </div>
    )
}
