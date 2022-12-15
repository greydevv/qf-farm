import LinkButton from 'components/LinkButton'
import PageHero from 'components/PageHero'
import { huntPhotos } from 'lookups/hunt_photos.js'
import PageBlock from 'components/PageBlock'
import { addOns, qfExpPkg } from 'lookups/packages.js'
import Link from 'next/link'

function MasonryCollage({ set }) {
    // split image set in half
    const setA = set.slice(0, set.length / 2)
    const setB = set.slice(set.length / 2, set.length)

    const MasonryColumn = ({ set, keyStart }) => {
        return (
            <div className='box-border grid grid-flow-row desktop:gap-6 gap-2'>
                { set.map((imgObj, i) => {
                    return (
                        <div key={ keyStart ? i + keyStart : i } className='rounded h-full w-full overflow-clip overflow-hidden'>
                            <img
                                className='h-full w-full object-cover'
                                src={ process.env.NEXT_PUBLIC_S3_BUCKET_NAME + imgObj.url }
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
            <MasonryColumn set={ setA } />
            <MasonryColumn set={ setB } keyStart={ setA.length } />
        </div>
    )
}

const buildHuntHref = `${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}hunt/build_a_hunt.pdf`

function HeroParagraph() {

  const EmailLink = () => {
    const mailToObj = {
        subject: 'Book Hunt at Quill Feather Farm'
    }
    const mailTo = `mailto:info@quillfeatherfarm.com?subject=${mailToObj.subject}`

    return (
      <a href={ mailTo } className="text-base">
        contact us
      </a>
    )
  }

  const HuntFormLink = () => {
    return (
      <a href={ buildHuntHref } target="_blank" className="text-base">
        Build a Hunt form
      </a>
    )
  }

  return (
    <p>
      Hunts at Quill Feather Farm are designed to provide a unique upland experience
      for individuals, groups, and even small corporate outings. We are currently
      working to provide a more interactive online booking experience, but in the
      interim, please download our <HuntFormLink />. Please <EmailLink /> regarding date availability.
    </p>
  )
}

export default function Hunts() {
    const mailToObj = {
        subject: 'Upland Hunts: Join Waiting List',
        body: encodeURIComponent("I'm interested in joining the waiting list for your upland hunts! Please notify me when more information is available.\n\n\nName: \nPhone: ")
    }

    const mailTo = `mailto:info@quillfeatherfarm.com?subject=${mailToObj.subject}&body=${mailToObj.body}`

    const customPkgMailTo = `mailto:info@quillfeatherfarm.com?subject=Book Custom Quill Feather Experience`
    const quintPkgMailTo = `mailto:info@quillfeatherfarm.com?subject=Book Quintessential Quill Feather Experience`

    return (
        <div className='desktop:pt-10 pt-0 desktop:pb-20 pb-5 flex flex-col desktop:gap-20 gap-10'>
            <PageHero
                headerText='HUNT'
                imgObj={ {alt: 'pheasants after upland hunt', url: 'hunt/hunt_hero.jpg'} }
                bodyText={ <HeroParagraph /> }
            >
                <LinkButton
                    href={ buildHuntHref }
                    text='BOOK A HUNT'
                    target='_blank'
                    className='bg-qf-dark-brown'
                />
            </PageHero>
            <PageBlock>
              <div className='mb-8'>
                <h2 className='text-qf-black mb-4'>PACKAGES & PRICING</h2>
                <p className='mb-2'>We offer birds by the 6-pack or you can choose a combination of packs (limit 24 birds per hunt, unless booking full day). <Link href={ buildHuntHref } target='_blank' className='text-base'>Click here </Link> for packages and pricing.</p> 
                <div className='mb-2'>
                  <p><span className='font-medium'>The Quintessential Quill Feather Experience:</span> $1500</p>
                  <p className="mb-2">
                    We’ve carefully crafted a hunt we like to call the quintessential experience!
                    We close the farm to other activities in order to provide a personal and
                    private experience for you and your crew. This full-day package includes:
                  </p>
                  <div>
                    {qfExpPkg.map((e, i) => {
                      return (
                        <p key={ i }>- { e }</p>
                      )
                    })}
                  </div>
                  <p><Link href={ quintPkgMailTo } className="text-base">Contact us</Link> to book the quintessential experience.</p>
                </div>
                <p><span className='font-medium'>Custom Quill Feather Experience:</span> Want something different? Custom-built packages are available. <Link href={ customPkgMailTo } className="text-base">Please let us know</Link> what you’re interested in and we’ll get back to you with a quote.</p>
              </div>
              <div>
                <h2 className='text-qf-black mb-4'>ADD-ONS</h2>
                <div className="flex flex-col gap-y-4">
                  <p>
                    At Quill Feather Farm we don’t want to just offer hunts, we want
                    to provide an experience! Our current selection of add-ons will help turn
                    your basic upland hunt into an experience you’ll remember for years to
                    come.
                  </p>
                  {addOns.map(({ title, desc }, i) => {
                    return (
                      <p key={ i }>
                        <span className='text-qf-orange font-normal border-r-[1.5px] border-qf-dark-brown pr-2 mr-2'>{ title.toUpperCase() }</span>
                        { desc }
                      </p>
                    )
                  })}
                </div>
              </div>
              <p className="text-sm mt-4 border-t-2 border-qf-dark-brown py-4">
                * We strive to provide the best experience possible and a major component to
                this is experienced and personable guides with well-trained dogs. And we
                select only the best guides and dogs to work at our farm. They spend
                countless hours working with their dogs to provide the ultimate
                experience and we encourage you to tip them respectfully. Gratuity of 25%
                is customary.
              </p>

              {/*
              <div className="py-6 grid grid-rows-[repeat(4,_1fr)] grid-cols-[repeat(3,_1fr)_4fr] text-center">

                <div className="row-start-1 col-start-1 bg-qf-dark-brown text-grey rounded-l">Birds</div>
                <div className="row-start-1 col-start-2 bg-qf-dark-brown text-grey">Pheasants</div>
                <div className="row-start-1 col-start-3 bg-qf-dark-brown text-grey">Chukar</div>
                <div className="row-start-1 col-start-4 bg-qf-dark-brown text-grey rounded-r">Combos</div>
                <div className="row-start-2 col-start-1 border-b border-qf-dark-brown">6</div>
                <div className="row-start-3 col-start-1 border-b border-qf-dark-brown">12</div>
                <div className="row-start-4 col-start-1 border-b border-qf-dark-brown">18</div>
                <div className="row-start-5 col-start-1 border-b border-qf-dark-brown">24</div>

                <div className="row-start-2 col-start-2 border-b border-qf-dark-brown">$280</div>
                <div className="row-start-3 col-start-2 border-b border-qf-dark-brown">$440</div>
                <div className="row-start-4 col-start-2 border-b border-qf-dark-brown">$590</div>
                <div className="row-start-5 col-start-2 border-b border-qf-dark-brown">$700</div>

                <div className="row-start-2 col-start-3 border-b border-qf-dark-brown">$220</div>
                <div className="row-start-3 col-start-3 border-b border-qf-dark-brown">$330</div>
                <div className="row-start-4 col-start-3 border-b border-qf-dark-brown">$425</div>
                <div className="row-start-5 col-start-3 border-b border-qf-dark-brown">$510</div>

                <div className="row-start-2 col-start-4 border-b border-qf-dark-brown">6P + 6C = $400</div>
                <div className="row-start-3 col-start-4 border-b border-qf-dark-brown">12P + 12C = $670</div>
                <div className="row-start-4 col-start-4 grid grid-cols-[repeat(2,_1fr)] border-b border-qf-dark-brown">
                  <div className="row-start-1 col-start-1 border-r border-qf-light-grey">
                    6P + 12C = $510
                  </div>
                  <div className="row-start-1 col-start-2 border-l border-qf-light-grey">
                    12P + 6C = $560
                  </div>
                </div>
                <div className="row-start-5 col-start-4 grid grid-cols-[repeat(2,_1fr)] border-b border-qf-dark-brown">
                  <div className="row-start-1 col-start-1 border-r border-qf-light-grey">
                    6P + 12C = $510
                  </div>
                  <div className="row-start-1 col-start-2 border-l border-qf-light-grey">
                    12P + 6C = $560
                  </div>
                </div>
              </div>
              */}
            </PageBlock>
            <PageBlock
                outerCls='desktop:py-24 py-16 bg-qf-dark-brown'
            >
                <MasonryCollage set={ huntPhotos }  />
            </PageBlock>
            <PageBlock>
              <h2 className='text-qf-black mb-4'>REVIEWS</h2>
              <div className='bg-qf-light-grey rounded p-4'>
                <p className='max-w-body mb-2 italic'>
                  Brandt and company were very professional and led a wonderful hunt. The dogs were amazing and on top of their game. In addition, Quill Feather Farm was very nice to work with.
                </p>
                <div className='flex justify-between w-full my-auto'>
                  <p className='font-medium'>
                    - P.L.
                  </p>
                  <p className='text-qf-grey text-sm my-auto'>
                    12/22
                  </p>
                </div>
              </div>
            </PageBlock>
        </div>
    )
}
