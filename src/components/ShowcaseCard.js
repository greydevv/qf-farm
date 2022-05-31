import 'components/ShowcaseCard.css';

export default function ShowcaseCard({ img, headText, text, moreText, reverse }) {
    return (
        <div className={ 'cursor-pointer grid w-full showcase_card' + (reverse ? '-reversed' : '')}>
            <div className='showcase_card__img w-full rounded-lg overflow-clip'>
                <img src={ img } className='overflow-clip object-cover w-screen min-w-full min-h-full' />
            </div>
            <div className='showcase_card__text__container'>
                <h1 className='m-0 font-1 text-5xl text-dark-grey mb-4'>{ headText.toUpperCase() }</h1>
                <p className='m-0 font-2 text-dark-grey leading-8'>{ text }</p>
                { moreText && 
                    <a href='#' className='block mt-8 text-orange font-1 underline decoration-2'>
                        { moreText.toUpperCase() }
                    </a>
                }
            </div>
        </div>
    );
}
