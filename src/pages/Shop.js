import hunt from 'assets/images/hunt/hunt.jpg'
import PageHero from 'components/PageHero'

export default function Shop() {
    return (
        <div className='desktop:pt-10 pt-0 pb-20 flex flex-col gap-20'>
            <PageHero
                headerText='SHOP'
                bodyText='Please check back regularly as we prepare to launch original artwork, Quill Feather apparel, and gifts. Press the link below and enter your email to be the first to know when we launch!'
                img={ hunt }
                comingSoonText='SOON'
            />
        </div>
    )
}
