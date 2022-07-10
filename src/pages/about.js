import PageHero from 'components/PageHero'
import PageBlock from 'components/PageBlock'
import { cristinBio, brandtBio, dogBios } from 'lookups/profiles.js'

function Profile({ name, role, bio, imgObj }) {
    return (
        <div className='flex desktop:flex-row flex-col desktop:gap-10 desktop:gap-6'>
            <div className='flex flex-col gap-6 desktop:flex-1 max-w-[300px]'>
                <div className='desktop:h-[200px] desktop:mr-0 mr-auto desktop:aspect-square aspect-[4/3] rounded overflow-clip overflow-hidden'>
                    <img alt={ imgObj.alt } src={ process.env.NEXT_PUBLIC_S3_BUCKET_NAME + imgObj.url } className='w-full h-full object-cover' />
                </div>
                <div className='mb-4'>
                    <h2 className='mb-1'>{ name }</h2>
                    <p className='qf__body--accolade'>
                        { role }
                    </p>
                </div>
            </div>
            <div className='desktop:flex-[2] desktop:w-4/5'>
                <div className='desktop:px-6 desktop:border-l border-qf-light-brown desktop:pb-8 pb-4'>
                    <p className='text-qf-light-brown'>{ bio }</p>
                </div>
            </div>
        </div>
    );
}

function DogProfile({ name, bio, imgObj, prizes }) {
    return (
        <div className='desktop:max-h-fit'>
            <div className='w-full overflow-clip overflow-hidden rounded aspect-[4/3] mb-2'>
                <img className='w-full h-full object-cover' alt={ imgObj.alt } src={ process.env.NEXT_PUBLIC_S3_BUCKET_NAME + imgObj.url } />
            </div>
            <div className='flex flex-col'>
                <div className='flex mb-2 desktop:flex-col flex-row desktop:justify-start justify-between desktop:items-start items-center'>
                    <h2 className='text-qf-black mb-0'>{ name }</h2>
                    <p className='qf__body--accolade'>
                        { prizes.join(', ') }
                    </p>
                </div>
                <p>{ bio }</p>
            </div>
        </div>
    )
}

export default function About() {
    return (
        <div className='desktop:pt-10 pt-0 desktop:pb-20 pb-5 flex flex-col desktop:gap-20 gap-10'>
            <PageHero
                headerText='ABOUT'
                bodyText='Quill Feather Farm was established in 2021 by Cristin Q. Murray and Brandt Fink Jr. as a place to share their passion for the sport of upland hunting, raising and training versatile hunting dogs, and providing unique and tailored training opprtunities to help others do the same. We focus primarily on pointing breeds and provide training both on land and in water. We firmly believe that solid hunting partners are not just born but also built to hunt. This requires a solid foundation that starts in the home, moves to the yard, and extends into the field and beyond.'
                imgObj={ {alt: 'cristin and brandt with gun dogs', url: 'about/about_hero.jpg'} }
            />
            <PageBlock
                outerCls='desktop:py-24 py-10 bg-qf-dark-brown'
                innerCls='flex flex-col gap-10'
            >
                <Profile 
                    name='CRISTIN Q. MURRAY'
                    role='CO-FOUNDER'
                    bio={ cristinBio }
                    imgObj={ {alt: '', url: 'about/people/cristin.jpg'} }
                />
                <Profile
                    name='BRANDT F. FINK'
                    role='CO-FOUNDER'
                    bio={ brandtBio }
                    imgObj={ {alt: '', url: 'about/people/brandt.jpg'} }
                />
            </PageBlock>
            <PageBlock
                innerCls='grid desktop:grid-cols-2 grid-cols-1 desktop:grid-rows-2 grid-rows-4 gap-x-6 gap-y-10'
            >
                <DogProfile 
                    name='MOLSON' 
                    bio={ dogBios.molson }
                    imgObj={ {alt: '', url: 'about/dogs/molson.jpg'} }
                    prizes={ ['UT I'] }
                />
                <DogProfile 
                    name='REMMEL' 
                    bio={ dogBios.remmel }
                    imgObj={ {alt: '', url: 'about/dogs/remmel.jpg'} }
                    prizes={ ['NA II', 'UT I'] }
                />
                <DogProfile 
                    name='CAMO' 
                    bio={ dogBios.camo }
                    imgObj={ {alt: '', url: 'about/dogs/camo.jpg'} }
                    prizes={ ['NA I', 'UT I'] }
                />
                <DogProfile 
                    name='MODELO' 
                    bio={ dogBios.modelo }
                    imgObj={ {alt: '', url: 'about/dogs/modelo.jpg'} }
                    prizes={ ['NA I'] }
                />
            </PageBlock>
        </div>
    )
}
