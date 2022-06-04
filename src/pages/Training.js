import ShowcaseCard from 'components/ShowcaseCard';
import trainingThumb from 'assets/images/home/training_thumb.jpg';
import Package from 'components/Package';

const packageData = [
    {
        img: trainingThumb,
        title: 'One Week Bootcamp',
        nightlyRate: 200,
    },
    {
        img: trainingThumb,
        title: 'Two Week Bootcamp',
        nightlyRate: 150,
    },
    {
        img: trainingThumb,
        title: 'Three Week Bootcamp',
        nightlyRate: 100,
    },
];

export default function Training() {
    return (
        <div className='training'>
            <div className='flex flex-col gap-16 max-w-25 my-auto px-32 py-20'>
                <ShowcaseCard
                    img={ trainingThumb }
                    headText='training'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                />
                <div className='flex flex-col'>
                    { packageData.map((e, i) => <Package { ...e } key={ i } /> )}
                </div>
            </div>
        </div>
    );
}
