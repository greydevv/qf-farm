import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ShowcaseCard from 'components/ShowcaseCard'
import FeatureCardList from 'components/FeatureCardList'
import PageHero from 'components/PageHero'
import PackageList from 'components/PackageList'
import ProductCard from 'components/ProductCard'
import { trainingPackages } from 'lookups/packages.js'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function TrainPackage({ pkg }) {
    return (
        <ProductCard
            name={ pkg.title }
            desc={ pkg.desc }
            price={ pkg.price }
            priceRate={ pkg.rate }
            disclaimer={ pkg.disclaimer }
            imgUrl={ process.env.REACT_APP_S3_BUCKET_NAME + pkg.imgUrl }
        >
            <div className='flex justify-between w-full mt-8'>
                { pkg.moreTo &&
                    <NavLink to={ pkg.moreTo }>
                        LEARN MORE
                    </NavLink>
                }
                <div className='flex gap-x-2 items-center'>
                    <a href={ pkg.to }>
                        REGISTER 
                    </a>
                </div>
            </div>
        </ProductCard>
    )
}

export default function Train() {
    const [visiblePackages, setVisiblePackages] = useState(Object.values(trainingPackages)[0].packages)

    const changeCategory = (category) => {
        setVisiblePackages(trainingPackages[category].packages)
    }

    return (
        <div className='desktop:pt-10 pt-0 flex flex-col gap-10'>
            <PageHero
                headerText='TRAIN'
                bodyText='There is no substitute for a well-trained gun dog. At Quill Feather Farm we understand this necessity and offer a variety of unique and tailored training opportunities to help you get the most out of your pointing dog. We cater to the versatile hunting dog by offering both upland and waterfowl training.'
                img={ process.env.REACT_APP_S3_BUCKET_NAME + 'train/train.jpg' }
            
            />
            <PackageList 
                categories={ Object.keys(trainingPackages) }
                packages={ trainingPackages }
                onChangeCategory={ changeCategory }
            >
                { visiblePackages.map((pkg, i) => {
                    return <TrainPackage key={ i } pkg={ pkg } />
                })}
            </PackageList>
        </div>
    );
}
