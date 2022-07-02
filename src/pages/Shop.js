import PageHero from 'components/PageHero'
import { PackageList } from 'components/Package'
import { shopPackages } from 'Const'

export default function Shop() {
    return (
        <div className='desktop:pt-10 pt-0 pb-20 flex flex-col gap-20'>
            <PageHero
                headerText='SHOP'
                bodyText='Please check back regularly as we prepare to launch original artwork, Quill Feather apparel, and gifts. Press the link below and enter your email to be the first to know when we launch!'
                img={ process.env.REACT_APP_S3_BUCKET_NAME + 'shop/shop_thumb.jpg' }
                comingSoonText='SOON'
            />
            <PackageList packageSet={ shopPackages } />
        </div>
    )
}
