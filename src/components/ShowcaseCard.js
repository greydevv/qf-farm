import 'components/ShowcaseCard.scss';

export default function ShowcaseCard({ img, headText, text, moreText, reverse }) {
    return (
        <div className={ 'showcase_card' + (reverse ? '-reversed' : '')}>
            <img src={ img } className='showcase_card__img' />
            <div className='showcase_card__text__container'>
                <h1 className='showcase_card__text__header'>{ headText.toUpperCase() }</h1>
                <p className='showcase_card__text__body'>{ text }</p>
                { moreText && 
                    <a href='#' className='showcase_card__text__link'>
                        { moreText.toUpperCase() }
                    </a>
                }
            </div>
        </div>
    );
}
