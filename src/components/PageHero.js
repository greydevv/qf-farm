import PageBlock from 'components/PageBlock'

export default function PageHero({ headerText, bodyText, imgObj, comingSoonText, children }) {
    return (
        <PageBlock
            outerCls='px-0'
            innerCls='grid desktop:grid-cols-[repeat(2fr,_1fr)] grid-cols-1 desktop:grid-rows-0 grid-rows-[1fr_auto] w-full desktop:gap-10 gap-6'
        >
            <div className='h-full max-w-body desktop:px-0 px-6 flex flex-col desktop:justify-between gap-6'>
                <div className='text-left'>
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
                <div>
                    { children }
                </div>
            </div>
            { imgObj &&
                <div className='desktop:col-start-2 ml-auto w-full h-auto aspect-video desktop:max-w-[500px] overflow-clip overflow-hidden desktop:rounded desktop:order-last order-first'>
                    <img className='w-full h-full object-cover' alt={ imgObj.alt } src={ process.env.NEXT_PUBLIC_S3_BUCKET_NAME + imgObj.url } />
                </div>
            }
        </PageBlock>
    )
}
