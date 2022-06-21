import PageHero from 'components/PageHero'
import hunt from 'assets/images/hunt/hunt.jpg'

export default function Hunts() {
    return (
        <div className='desktop:pt-10 pt-0 pb-20 flex flex-col gap-20'>
            <PageHero
                headerText='HUNT'
                bodyText='Please check back regularly as we prepare to offer guided hunts for individuals, groups, and corporate outings. Press the link below and enter your email to be the first to know when we launch!'
                img={ process.env.REACT_APP_S3_BUCKET_NAME + 'hunt/hunt.jpg' }
                comingSoonText='FALL 2022'
            />
        </div>
    )
}
