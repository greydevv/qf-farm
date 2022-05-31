import ShowcaseCard from 'components/ShowcaseCard';
import homeBanner from 'assets/images/home/home_banner.png';
import huntsThumb from 'assets/images/home/hunts_thumb.jpg';
import trainingThumb from 'assets/images/home/training_thumb.jpg';
import { ZStack, ZStackElement } from 'components/ZStack';
import 'pages/Home.css';

const showcaseData = [
    {
        img: huntsThumb,
        headText: 'hunts',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        moreText: 'learn more',
    },
    {
        img: trainingThumb,
        headText: 'training',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        moreText: 'learn more',
        reverse: true,
    }
];

export default function Home() {
    return (
        <div className='home'>
            <ZStack className='w-full'>
                <ZStackElement className='w-full'>
                    <img src={ homeBanner } />
                </ZStackElement>
                <ZStackElement className='w-full my-auto'>
                    <h1 className='font-1 text-7xl font-light text-grey text-center'>
                        QUILL FEATHER FARM
                    </h1>
                    <div className='h-0.5 w-3/12 mx-auto bg-grey mt-4 mb-2' />
                    <h6 className='font-1 text-2xl font-light text-grey text-center tracking-[0.5em]'>
                        EST 2021
                    </h6>
                </ZStackElement>
            </ZStack>
            <div className='flex flex-col max-w-25 gap-y-16 my-24 px-32 mx-auto w-full'>
                { showcaseData.map((e, i) => <ShowcaseCard { ...e } key={ i } /> )}
            </div>
        </div>
    );
}
