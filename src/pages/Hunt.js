import PageHero from 'components/PageHero'
import { huntPhotos } from 'lookups/hunt_photos.js'

function MasonryCollage({ set }) {
    // split image set in half
    const otherSet = set.splice(0, set.length / 2)

    const MasonryColumn = ({ set, keyStart }) => {
        return (
            <div className='box-border grid grid-flow-row desktop:gap-6 gap-2'>
                { set.map((imgObj, i) => {
                    return (
                        <div key={ keyStart ? i + keyStart : i } className='desktop:gap-6 gap-2 rounded h-full w-full overflow-clip overflow-hidden'>
                            <img
                                className='h-full w-full object-cover'
                                src={ process.env.REACT_APP_S3_BUCKET_NAME + imgObj.url }
                                alt={ imgObj.alt }
                            />
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className='grid grid-cols-[repeat(2,_1fr)] desktop:gap-6 gap-2'>
            <MasonryColumn set={ otherSet } />
            <MasonryColumn set={ set } keyStart={ otherSet.length } />
        </div>
    )
}

export default function Hunts() {
    const mailToObj = {
        subject: 'Upland Hunts: Join Waiting List',
        body: encodeURIComponent("I'm interested in joining the waiting list for your upland hunts! Please notify me when more information is available.\n\n\nName: \nPhone: ")
    }

    const mailTo = `mailto:quillfeatherfarm@gmail.com?subject=${mailToObj.subject}&body=${mailToObj.body}`

    return (
        <div className='desktop:pt-10 pt-0 flex flex-col desktop:gap-20 gap-6'>
            <PageHero
                headerText='HUNT'
                bodyText='We are working diligently to create a unique upland experience for individuals, groups, and small corporate outings. Please check back regularly…or click the link below to join our waiting list and be the first to get notified when booking hunts is available!'
                img={ process.env.REACT_APP_S3_BUCKET_NAME + 'hunt/hunt.jpg' }
                comingSoonText='COMING FALL 2022'
            >
                <div>
                    <a className='text-qf-white font-medium tracking-wider text-center rounded py-3 px-4 bg-qf-orange' href={ mailTo }>
                        JOIN WAITING LIST
                    </a>
                </div>
            </PageHero>
            <div className='box-border desktop:px-40 px-6 desktop:py-24 py-16 bg-qf-dark-brown'>
                <MasonryCollage set={ huntPhotos }  />
            </div>
        </div>
    )
}
