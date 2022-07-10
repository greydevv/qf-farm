import { useState } from 'react'
import ProductCard from 'components/ProductCard'
import PageHero from 'components/PageHero'
import PackageList from 'components/PackageList'
import { shopPackages } from 'lookups/products'

function ShopExamples({ examples }) {
    return (
        <div className='grid desktop:mx-auto desktop:grid-cols-[repeat(4,_1fr)] grid-cols-1 gap-6'>
            { examples.map((ex, i) => {
                return (
                    <div key={ i } className='grid grid-rows-[auto_1fr] gap-2 rounded overflow-clip overflow-hidden bg-qf-brown'>
                        <div className='row-start-1 aspect-square'>
                            <img className='w-full h-full object-cover' alt={ ex.imgObj.alt } src={ process.env.NEXT_PUBLIC_S3_BUCKET_NAME + ex.imgObj.url } />
                        </div>
                        <div className='row-start-2 desktop:px-6 px-2 pt-2 pb-4 h-full'>
                            <p className='text-qf-grey mb-auto'>{ ex.desc }</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function ShopPackage({ pkg }) {
    return (
        <ProductCard
            name={ pkg.title }
            desc={ pkg.desc }
            price={ pkg.price }
            priceRate={ pkg.rate }
            disclaimer={ pkg.disclaimer }
            imgObj={ pkg.imgObj }
            tall
        >
            <div className='w-full mt-8'>
                <a href={ pkg.to }>
                    { pkg.buyText || 'BUY NOW' }
                </a>
            </div>
        </ProductCard>
    )
}

export default function Shop() {
    const [visiblePackages, setVisiblePackages] = useState(Object.values(shopPackages)[0].packages)
    const [examples, setExamples] = useState([])

    const changeCategory = (category) => {
        setVisiblePackages(shopPackages[category].packages)
        setExamples(shopPackages[category].examples || [])
    }

    return (
        <div className='desktop:pt-10 w-full pt-0 flex flex-col desktop:gap-20 gap-10'>
            <PageHero
                headerText='SHOP'
                bodyText="Welcome to our bare bones shop! Here, you'll currently find some original artwork and Quill Feather Farm-branded apparel. Please check back soon as we are preparing to launch our official shop which will include more artwork, merchandise selections, and upland and dog-related gift items with a smooth, safe, and easy checkout!"
                imgObj={ {alt: '', url: 'shop/shop_hero.jpg'} }
            />
            <PackageList
                categories={ Object.keys(shopPackages) }
                packages={ shopPackages }
                onChangeCategory={ changeCategory }
                noEqualRow={ examples.length > 0 }
            >
                { visiblePackages.map((pkg, i) => {
                    return <ShopPackage key={ i } pkg={ pkg } />
                })}
                { examples.length > 0 && <ShopExamples examples={ examples } /> }
            </PackageList>
        </div>
    )
}
