import FeatureCardList from 'components/FeatureCardList';
import { mainFeatures } from 'Const';
import { NavLink } from 'react-router-dom';

import 'pages/Home.css';

export default function Home() {

    const splashImgStyle = {
        backgroundImage: `url(${process.env.REACT_APP_S3_BUCKET_NAME + 'home/field.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
    }

    return (
        <div className='flex flex-col desktop:gap-10 gap-6'>
            <div className='flex bg-no-repeat desktop:px-40 px-6 desktop:aspect-auto desktop:h-[70vh] aspect-video w-full' style={splashImgStyle}>
                <h1 className='text-qf-white text-left font-1 tracking-[0.2em] desktop:text-6xl text-2xl mt-auto mb-6 w-full'>QUILL FEATHER FARM</h1>
            </div>
            <div className='desktop:px-40 px-6 w-full'>
                <div className='w-full box-border'>
                  <div className='mx-auto w-full desktop:pb-8 pb-4'>
                    <p className='max-w-none'>
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
                  </div>
                </div>
            </div>
            <FeatureCardList data={ mainFeatures } />
        </div>
    );
}
