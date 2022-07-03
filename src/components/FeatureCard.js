import { NavLink } from 'react-router-dom';

export default function FeatureCard({ imgObj, titleText, bodyText, to }) {

    return (
        <NavLink to={ to } className='h-full'>
            <div className='desktop:max-h-fit desktop:max-w-[16rem] desktop:aspect-[5/7] max-h-20 h-full relative flex rounded overflow-clip overflow-hidden desktop:flex-col text-qf-white bg-qf-brown'>
                <div className='desktop:h-[250px] relative'>
                    <div className='absolute top-0 left-0 h-full w-full bg-qf-black opacity-20'></div>
                    <img className='desktop:h-[250px] h-full w-full object-cover' alt={ imgObj.alt } src={ process.env.REACT_APP_S3_BUCKET_NAME + imgObj.url } />
                    <h2 className='absolute left-4 top-4'>{ titleText.toUpperCase() }</h2>
                </div>
                <div className='desktop:flex hidden h-[118px] px-4 pt-4 pb-8'>
                    <p className='qf__body h-full text-qf-white'>{ bodyText }</p>
                </div>
            </div>
        </NavLink>
    )
}
