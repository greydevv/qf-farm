import ShowcaseCard from 'components/ShowcaseCard';
import cristin from 'assets/images/about/cristin.jpg';
import brandt from 'assets/images/about/brandt.jpg';
import about from 'assets/images/about/about.jpg';

const bodyCls = (extra) => {
    const base = 'text-qf-grey leading-8 font-light'
    if (extra) {
        return `${base} ${extra}`
    }
    return base
}

function Profile({ name, bio, img }) {
    return (
        <div className='flex desktop:flex-row flex-col desktop:gap-10 gap-6 desktop:px-0 px-6'>
            <div className='desktop:h-[200px] desktop:mr-0 mr-auto desktop:aspect-square aspect-[4/3] rounded overflow-clip'>
                <img src={ img } className='w-full h-full object-cover' />
            </div>
            <div className='flex-1 desktop:w-4/5'>
                <h1 className='tracking-widest font-1 desktop:text-3xl text-2xl mb-4 font-normal text-qf-black'>{ name }</h1>
                <p className={ bodyCls() }>{ bio }</p>
            </div>
        </div>
    );
}

function DogProfile({ name, bio, img }) {
    return (
        <div className='flex flex-col justify-center desktop:gap-0 gap-6'>
            <div className='flex desktop:flex-col flex-row gap-x-6'>
                <div className='h-[100px] aspect-square desktop:mx-auto rounded-full overflow-clip'>
                    <img src={ img } className='h-full object-cover' />
                </div>
                <h1 className='desktop:text-center desktop:my-4 my-auto font-1 desktop:text-3xl text-2xl tracking-widest font-normal text-qf-black'>
                    { name }
                </h1>
            </div>
            <div className=''>
                <p className={ bodyCls('desktop:text-center') }>
                    { bio }
                </p>
            </div>
        </div>
    )
}

export default function About() {
    return (
        <div className='desktop:px-40 desktop:my-20 mb-5 flex flex-col gap-20'>
            <div className='flex desktop:flex-row flex-col desktop:gap-10 gap-6'>
                <div className='desktop:w-1/2 desktop:px-0 px-6 text-left'>
                    <h1 className='w-full font-1 desktop:text-5xl text-3xl desktop:mb-4 mb-2 font-normal text-qf-black'>
                        OUR STORY
                    </h1>
                    <p className={ bodyCls('desktop:w-9/10') }>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='mx-auto h-full w-full overflow-clip desktop:rounded desktop:order-last order-first'>
                    <img src={ about } />
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                <Profile 
                    name='CRISTIN Q. MURRAY'
                    bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    img={ cristin }
                />
                <Profile
                    name='BRANDT F. FINK'
                    bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    img={ brandt }
                />
            </div>
            <div className='grid desktop:grid-cols-2 desktop:grid-rows-2 grid-rows-4 gap-y-8 px-6'>
                <DogProfile 
                    name='MOLSON' 
                    bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
                    img={ about }
                />
                <DogProfile 
                    name='REMMEL' 
                    bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
                    img={ about }
                />
                <DogProfile 
                    name='CAMO' 
                    bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
                    img={ about }
                />
                <DogProfile 
                    name='MODELO' 
                    bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
                    img={ about }
                />
            </div>
        </div>
    )
}
