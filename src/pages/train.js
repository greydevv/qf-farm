import { useState } from 'react'
import Link from 'next/link'
import PageHero from 'components/PageHero'
import PackageList from 'components/PackageList'
import ProductCard from 'components/ProductCard'
import { trainingPackages } from 'lookups/packages.js'

function TrainPackage({ pkg }) {
    console.log(pkg.imgObj.url)
    return (
        <ProductCard
            name={ pkg.title }
            desc={ pkg.desc }
            price={ pkg.price }
            priceRate={ pkg.rate }
            disclaimer={ pkg.disclaimer }
            imgObj={ pkg.imgObj }
        >
            <div className='flex justify-between w-full mt-8'>
                { pkg.moreTo &&
                    <Link href={ pkg.moreTo }>
                        <a>LEARN MORE</a>
                    </Link>
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
                bodyText='There is no substitute for a well-trained gun dog. At Quill Feather Farm we understand this necessity and offer a variety of unique and tailored gun dog training opportunities to help you get the most out of your pointing dog. We cater to the versatile hunting dog by offering both upland and waterfowl training in both individual and group settings. At Quill Feather Farm, we are all about helping you build a better gun dog.'
                imgObj={ {alt: 'hunters training gun dog', url: 'train/train.jpg'} }
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
