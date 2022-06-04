import huntsThumb from 'assets/images/home/hunts_thumb.jpg';

export default function FeatureCard({ img, titleText, bodyText }) {
  return (
    <div className='relative flex rounded overflow-clip flex-col text-qf-white bg-qf-brown max-w-[275px]'>
      <div>
        <h1 className='absolute left-4 top-4 font-1 text-2xl'>{ titleText.toUpperCase() }</h1>
        <img className='aspect-square w-full object-cover' src={ img } />
      </div>
      <div className='px-4 pt-4 pb-8'>
        <p className='font-2 mb-auto text-base'>{ bodyText }</p>
      </div>
    </div>
  )
}
