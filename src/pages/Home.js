import ShowcaseCard from 'components/ShowcaseCard';
import FeatureCard from 'components/FeatureCard';
import homeBanner from 'assets/images/home/field.jpg';
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
        <div className='home'>
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
            <div className='px-40 my-20 w-full box-border h-[40vh]'>
              <div className='mx-auto max-w-[700px] text-center'>
                <h1 className='text-qf-black mb-4 text-2xl font-medium tracking-widest font-1'>WELCOME TO QUILL FEATHER FARM</h1>
                <p className='text-qf-grey text-base leading-8 font-2 mx-15'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className='flex flex-row justify-center px-40 pb-20 gap-8 mx-auto w-full'>
                { showcaseData.map((e, i) => <FeatureCard { ...e } key={ i } /> )}
            </div>
        </div>
    );
}
