import PageBlock from 'components/PageBlock'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'

export default function PageHero({ headerText, bodyText, reminderText, imgObj, comingSoonText, children }) {
    return (
        <PageBlock
            outerCls='px-0'
            innerCls='grid desktop:grid-cols-[repeat(3fr,_1fr)] grid-cols-1 desktop:grid-rows-0 grid-rows-[1fr_auto] w-full desktop:gap-10 gap-6'
        >
            <div className='h-full max-w-body desktop:px-0 px-6 flex flex-col desktop:justify-between gap-6'>
                <div className='text-left'>
                    <div className='w-full flex flex-row gap-6 desktop:mb-4 mb-2'>
                        <h1 className='text-qf-black mb-0'>
                            { headerText }
                        </h1>
                        { comingSoonText &&
                            <div className='rounded my-auto bg-qf-orange px-2 py-0.5'>
                                <p className='text-qf-white text-sm'>
                                    { comingSoonText }
                                </p>
                            </div>
                        }
                    </div>
                    { bodyText && 
                        <p className='max-w-body'>
                            { bodyText }
                        </p>
                    }
                </div>
                <div>
                    { children }
                </div>
            </div>
            { imgObj &&
                <div className='desktop:col-start-2 row-start-1 grid grid-rows-[1fr_repeat(2,_auto)] grid-cols-1 mb-auto'>
                    <div className='col-start-1 col-end-2 row-start-1 row-end-3 ml-auto w-full h-auto aspect-video desktop:max-w-[500px] overflow-clip overflow-hidden desktop:rounded'>
                        <img className='w-full h-full object-cover' alt={ imgObj.alt } src={ process.env.NEXT_PUBLIC_S3_BUCKET_NAME + imgObj.url } />
                    </div>
                    { reminderText &&
                        <div className='z-10 col-start-1 mt-10 desktop:px-10 px-6 col-end-2 row-start-2 row-end-4'>
                            <div className='w-full bg-qf-light-grey rounded p-4'>
                                <NotificationsActiveIcon fontSize='small' className='mb-2 rotate-[-30deg]' />
                                <p className='text-qf-dark-brown'>
                                    { reminderText }
                                </p>
                            </div>
                        </div>
                    }
                </div>
            }
        </PageBlock>
    )
}
