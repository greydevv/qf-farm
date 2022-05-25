import ShowcaseCard from 'components/ShowcaseCard';
import homeBanner from 'assets/images/home/home_banner.png';
import huntsThumb from 'assets/images/home/hunts_thumb.jpg';
import trainingThumb from 'assets/images/home/training_thumb.jpg';
import 'pages/Home.scss';

export default function Home() {
    return (
        <div className='home'>
            <div className='home__banner'>
                <img src={ homeBanner } className='home__banner__img' />
                <div className='home__banner__text'>
                    <h1>QUILL FEATHER FARM</h1>
                    <div className='empty_border' />
                    <h6>EST 2021</h6>
                </div>
            </div>
            <div className='showcase_cards'>
                <ShowcaseCard 
                    img={ huntsThumb } 
                    headText='hunts' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    moreText='learn more'
                />
                <ShowcaseCard 
                    img={ trainingThumb } 
                    headText='training' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    moreText='learn more'
                    reverse
                />
                {/*
                <ShowcaseCard 
                    img={ huntsThumb } 
                    headText='studio' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    moreText='learn more'
                />
                */}
            </div>
        </div>
    );
}
