import ShowcaseCard from 'components/ShowcaseCard';
import about from 'assets/images/about/about.jpg';
import 'pages/About.css';

export default function About() {
    return (
        <div className='flex justify-center h-full'>
            <div className='h-[80%] max-w-25 my-auto px-32'>
                <ShowcaseCard
                    img={ about }
                    headText='about us'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                />
            </div>
        </div>
    )
}
