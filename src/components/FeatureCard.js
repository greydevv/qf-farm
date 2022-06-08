import huntsThumb from 'assets/images/home/hunts_thumb.jpg';
import { bodyCls } from 'Const';

export default function FeatureCard({ img, titleText, bodyText }) {
  return (
    <div className='desktop:max-h-fit desktop:max-w-[250px] max-h-20 relative flex rounded overflow-clip desktop:flex-col text-qf-white bg-qf-brown'>
      <div>
        <h1 className='absolute left-4 top-4 font-1 text-2xl'>{ titleText.toUpperCase() }</h1>
        <div className='h-full'>
            <img className='h-full w-full object-cover' src={ img } />
        </div>
      </div>
      <div className='desktop:flex hidden px-4 pt-4 pb-8'>
        <p className={ bodyCls('text-qf-white') }>{ bodyText }</p>
      </div>
    </div>
  )
}
