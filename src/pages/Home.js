import ShowcaseCard from 'components/ShowcaseCard';
import FeatureCard from 'components/FeatureCard';
import field from 'assets/images/home/field.jpg';
import huntsThumb from 'assets/images/home/hunts_thumb.jpg';
import trainingThumb from 'assets/images/home/training_thumb.jpg';
import { ZStack, ZStackElement } from 'components/ZStack';
import 'pages/Home.css';

const showcaseData = [
    {
        img: trainingThumb,
        titleText: 'hunt',
        bodyText: 'Hunt pheasant, chukar, and quail on guided hunts across our seventy acre field.',
    },
    {
        img: trainingThumb,
        titleText: 'train',
        bodyText: "Send your pups to our overnight bootcamp while you're away. blah blah  other shit about training.",
    },
    {
        img: trainingThumb,
        titleText: 'studio',
        bodyText: 'Shop our art studio and apparel and view our products of choice for all things gun dog.',
    }
];

export default function Home() {
    return (
        <div className='w-screen'>
            {/*
            <ZStack className='w-full h-3/5'>
                <ZStackElement className='w-full h-full'>
                    <img src={ homeBanner } class='object-cover h-full' />
                </ZStackElement>
                <ZStackElement className='w-full my-auto px-40'>
                    <h1 className='font-1 text-7xl font-light tracking-widest text-qf-white text-left mb-5'>
                        QUILL FEATHER FARM
                    </h1>
                    <h6 className='font-1 text-2xl font-light text-qf-white text-left tracking-[0.5em]'>
                        EST 2021
                    </h6>
                </ZStackElement>
            </ZStack>
            */}
            <div className='grid place-content-center w-screen'>
                <div className='w-full row-start-1 row-end-1 col-start-1 col-end-1'>
                    <img src={ field } className='h-full object-cover' />
                </div>
                <div className='desktop:px-40 desktop:text-left text-center px-6 text-qf-white my-auto font-normal row-start-1 row-end-1 col-start-1 col-end-1'>
                    <h1 className='font-1 tracking-[0.2em] desktop:text-6xl text-2xl desktop:mb-6'>QUILL FEATHER FARM</h1>
                    <h4 className='font-2 tracking-[0.4em] desktop:text-2xl text-sm font-thin'>EST 2021</h4> 
                </div>
            </div>
            <div className='desktop:px-40 px-6 pt-20 w-full pb-5 flex flex-col gap-20'>
                <div className='w-full box-border'>
                  <div className='w-full text-center'>
                    <h1 className='tracking-widest font-1 desktop:text-3xl text-2xl mb-4 font-normal text-qf-black'>WELCOME TO QUILL FEATHER FARM</h1>
                    <p className='text-qf-grey leading-8 font-light'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className='flex desktop:flex-row flex-col justify-center gap-6 mx-auto w-full'>
                    { showcaseData.map((e, i) => <FeatureCard { ...e } key={ i } /> )}
                </div>
            </div>
        </div>
    );
}
