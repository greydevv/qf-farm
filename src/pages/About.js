import { useState } from 'react'
import PageHero from 'components/PageHero'
import ShowcaseCard from 'components/ShowcaseCard'
import { cristinBio, brandtBio } from 'Const'

function Profile({ name, role, bio, img }) {
    return (
        <div className='flex desktop:flex-row flex-col desktop:gap-10 gap-6 desktop:px-0 px-6 max-w-main mx-auto'>
            <div className='flex flex-col gap-6 desktop:flex-1 max-w-[300px]'>
                <div className='desktop:h-[200px] desktop:mr-0 mr-auto desktop:aspect-square aspect-[4/3] rounded overflow-clip overflow-hidden'>
                    <img src={ img } className='w-full h-full object-cover' />
                </div>
                <div className='mb-4'>
                    <h1 className='qf__header-1 text-qf-white mb-1'>{ name }</h1>
                    <p className='text-qf-orange text-xs tracking-normal font-semibold'>
                        { role }
                    </p>
                </div>
            </div>
            <div className='desktop:flex-[2] desktop:w-4/5'>
                <div className='desktop:px-6 px-2 border-l border-qf-light-brown desktop:pb-8 pb-4'>
                    <p className='qf__body text-qf-light-brown'>{ bio }</p>
                </div>
            </div>
        </div>
    );
}

function DogProfile({ name, bio, img, prizes }) {
    return (
        <div className='desktop:max-w-[24rem] desktop:max-h-fit'>
            <div className='w-full overflow-clip overflow-hidden rounded aspect-[8/5] mb-2'>
                <img className='w-full h-full object-cover' src={ img } />
            </div>
            <div className='flex flex-col'>
                <h1 className='qf__header-1 mb-0'>{ name }</h1>
                <p className='text-qf-orange desktop:mb-4 mb-2 text-xs tracking-normal font-semibold'>
                    { prizes.join(', ') }
                </p>
                <p className='qf__body'>{ bio }</p>
            </div>
        </div>
    )
}

export default function About() {
    return (
        <div className='desktop:pt-10 pt-0 pb-5 flex flex-col gap-20'>
            <PageHero
                headerText='ABOUT'
                bodyText='Quill Feather Farm was established in 2021 by Cristin Q Murray and Brandt Fink Jr. as a place to share their passion for the sport of upland hunting, raising and training versatile hunting dogs, and providing unique training opprtunities to help others do the same.'
                img={ process.env.REACT_APP_S3_BUCKET_NAME + 'about/about.jpg' }
            />
            <div className='flex flex-col gap-10 desktop:px-40 px-6 desktop:py-24 py-16 bg-qf-dark-brown'>
                <Profile 
                    name='CRISTIN Q. MURRAY'
                    role='CO-FOUNDER'
                    bio={ cristinBio }
                    img={ process.env.REACT_APP_S3_BUCKET_NAME + 'about/cristin.jpg' }
                />
                <Profile
                    name='BRANDT F. FINK'
                    role='CO-FOUNDER'
                    bio={ brandtBio }
                    img={ process.env.REACT_APP_S3_BUCKET_NAME + 'about/brandt.jpg' }
                />
            </div>
            <div className='max-w-main desktop:px-0 px-6 grid desktop:grid-cols-2 grid-cols-1 desktop:grid-rows-2 grid-rows-4 gap-x-6 gap-y-6 justify-center mx-auto'>
                <DogProfile 
                    name='MOLSON' 
                    bio='Our “long-tailed shorthair” is a true gentleman in the house, but a phenom in the field. He has a nose like no other dog and hops effortlessly through the field like a gazelle.' 
                    img={ process.env.REACT_APP_S3_BUCKET_NAME + 'about/molson.jpg' }
                    prizes={ ['UT I'] }
                />
                <DogProfile 
                    name='REMMEL' 
                    bio='Our solid-liver “brown dog,” is big and powerful and highly successful in the field. He’s a self-taught therapy dog for Cristin. He nearly died from a splenic torsion, but is back better than ever.' 
                    img={ process.env.REACT_APP_S3_BUCKET_NAME + 'about/remmel.jpg' }
                    prizes={ ['NA II', 'UT I'] }
                />
                <DogProfile 
                    name='CAMO' 
                    bio='Our “block head,” is a powerhouse in a compact body. Prefering work over affection, this dog always gets it done in the field. He has thick coat and loves the cold…and he has an intense point.' 
                    img={ process.env.REACT_APP_S3_BUCKET_NAME + 'about/camo.jpg' }
                    prizes={ ['NA I', 'UT I'] }
                />
                <DogProfile 
                    name='MODELO' 
                    bio='Our “little stinker,” who not only causes a lot of shenanigans but also has the most adorable skunk stripe on the underside of her tail. She’s an up-and-comer and already showing tremendous potential.' 
                    img={ process.env.REACT_APP_S3_BUCKET_NAME + 'about/modelo.jpg' }
                    prizes={ ['NA I'] }
                />
            </div>
        </div>
    )
}
