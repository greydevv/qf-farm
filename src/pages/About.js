import ShowcaseCard from 'components/ShowcaseCard';
import about from 'assets/images/about/about.jpg';

function Profile({ name, bio }) {
    return (
        <div className='flex flex-row flex-col gap-10'>
            <div className='h-[200px] aspect-square rounded overflow-clip'>
                <img src={ about } className='h-full object-cover' />
            </div>
            <div>
                <h1 className='font-1 text-3xl mb-4 font-normal text-qf-black'>{ name }</h1>
                <p className='text-qf-grey w-4/5 leading-8'>{ bio }</p>
            </div>
        </div>
    );
}

function DogProfile({ name, bio }) {
    return (
        <div className='flex flex-col justify-center'>
            <div className='h-[100px] aspect-square mx-auto rounded-full overflow-clip'>
                <img src={ about } className='h-full object-cover' />
            </div>
            <div className='w-full text-center w-4/5 max-w-sm mx-auto'>
                <h1 className='font-1 text-3xl my-4 font-normal text-qf-black'>
                    { name }
                </h1>
                <p className='text-qf-grey leading-8'>
                    { bio }
                </p>
            </div>
        </div>
    )
}

export default function About() {
    return (
        <div className='about desktop:px-40 desktop:my-20 phone:px-10 phone:my-5 flex flex-col gap-20'>
            <div className='flex flex-row gap-10'>
                <div className='w-1/2'>
                    <h1 className='w-full font-1 text-5xl mb-4 font-normal text-qf-black'>
                        OUR STORY
                    </h1>
                    <p className='w-full text-qf-grey leading-8'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='h-full w-1/2 overflow-clip rounded lg:order-last order-first'>
                    <img src={ about } />
                </div>
            </div>
            <Profile 
                name='CRISTIN Q. MURRAY'
                bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            />
            <Profile
                name='BRANDT F. FINK'
                bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            />
            <div className='grid grid-cols-2 grid-rows-2 gap-y-8'>
                <DogProfile 
                    name='MOLSON' 
                    bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
                />
                <DogProfile 
                    name='REMMEL' 
                    bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
                />
                <DogProfile 
                    name='CAMO' 
                    bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
                />
                <DogProfile 
                    name='MODELO' 
                    bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
                />
            </div>
        </div>
    )
}
