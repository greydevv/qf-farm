import Link from 'next/link';

export default function FeatureCard({ imgObj, titleText, bodyText, to }) {

    return (
        <div className='cursor-pointer w-full h-full'>
            <Link href={ to }>
                <div className='h-full w-full desktop:max-h-fit max-h-20 h-full relative flex rounded overflow-clip overflow-hidden desktop:flex-col text-qf-white bg-qf-brown'>
                    <div className='desktop:h-[250px] w-full relative'>
                        <div className='absolute top-0 left-0 h-full w-full bg-qf-black opacity-20'></div>
                        <img className='desktop:h-[250px] h-full w-full object-cover' alt={ imgObj.alt } src={ process.env.NEXT_PUBLIC_S3_BUCKET_NAME + imgObj.url } />
                        <h2 className='desktop:text-4xl absolute left-4 top-4'>{ titleText.toUpperCase() }</h2>
                    </div>
                    <div className='desktop:flex hidden h-[118px] px-4 pt-4 pb-8'>
                        <p className='h-full text-qf-white'>{ bodyText }</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
