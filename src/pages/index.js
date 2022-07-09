import LinkButton from 'components/LinkButton'
import FeatureCard from 'components/FeatureCard';
import { mainFeatures } from 'lookups/features.js';
import PageBlock from 'components/PageBlock'

export default function Home() {

    const splashImgStyle = {
        backgroundImage: `url(${process.env.NEXT_PUBLIC_S3_BUCKET_NAME + 'home/field.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
    }

    return (
        <div className='flex flex-col desktop:gap-10 gap-6'>
            <div className='bg-no-repeat desktop:px-0 px-6 desktop:aspect-auto bg-qf-brown desktop:h-[70vh] aspect-video w-full' style={splashImgStyle}>
                <PageBlock
                    outerCls='h-full'
                    innerCls='flex items-end h-full'
                >
                    <h1 className='w-full text-qf-white text-left font-1 tracking-[0.2em] desktop:text-6xl text-2xl mb-6 w-full'>
                        QUILL FEATHER FARM
                    </h1>
                </PageBlock>
            </div>
            <PageBlock
            >
                <p className='max-w-none w-full desktop:text-lg text-qf-dark-brown mb-4'>
                    Quill Feather Farm is a place for all things upland.
                    Located in a quiet nook in rural York Springs, PA,
                    Quill Feather Farm sits on 100 acres of woods, fields,
                    creeks, and ponds.  It is the perfect place hunt upland
                    birds, train your own versatile pointing dog, and shop
                    for original artwork, apparel, and gifts. Quill Feather
                    Farm is dedicated to the conservation of game,
                    improving local habitat, and raising and training the
                    quintessential versatile hunting dog.
                </p>
                <LinkButton
                    href='/about'
                    text='ABOUT'
                    className='bg-qf-brown'
                />
            </PageBlock>
            <PageBlock
                outerCls='desktop:py-24 py-10 bg-qf-dark-brown'
                innerCls='grid desktop:grid-cols-[repeat(3,_1fr)] desktop:grid-rows-1 grid-cols-1 grid-rows-[repeat(3,_1fr)] gap-y-6 gap-x-10'
            >
                { mainFeatures.map((e, i) => <FeatureCard { ...e } key={ i } /> )}
            </PageBlock>
        </div>
    );
}
