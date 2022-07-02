import PageHero from 'components/PageHero'
// import { useAuth0 } from '@auth0/auth0-react'

export default function Hunts() {
    const mailToObj = {
        subject: 'Upland Hunts: Join Waiting List',
        body: encodeURIComponent("I'm interested in joining the waiting list for your upland hunts! Please notify me when more information is available.\n\n\nName: \nPhone: ")
    }

    const mailTo = `mailto:quillfeatherfarm@gmail.com?subject=${mailToObj.subject}&body=${mailToObj.body}`

    return (
        <div className='desktop:pt-10 pt-0 pb-20 flex flex-col desktop:gap-20 gap-6'>
            <PageHero
                headerText='HUNT'
                bodyText='Please check back regularly as we prepare to offer guided hunts for individuals, groups, and corporate outings.'
                img={ process.env.REACT_APP_S3_BUCKET_NAME + 'hunt/hunt.jpg' }
                comingSoonText='FALL 2022'
            >
                <div className='h-full'>
                    <a className='qf__btn' href={ mailTo }>
                        JOIN WAITING LIST
                    </a>
                </div>
            </PageHero>
        </div>
    )
}
