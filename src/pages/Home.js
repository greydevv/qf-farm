import { Outlet } from 'react-router-dom';
import homeBanner from 'assets/images/home_banner.png';
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
        </div>
    );
}
