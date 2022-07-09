import { contactInfo } from 'lookups/contacts.js'
import PageHero from 'components/PageHero'
import CampaignIcon from '@mui/icons-material/Campaign'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import PageBlock from 'components/PageBlock'

function ContactEntry({ handle, icon, link }) {
    return (
        <div className='flex flex-row gap-6 items-center'>
            <div className='h-6 w-6 mb-auto fill-qf-dark-brown'>
                { icon }
            </div>
            { link
                ? <a className='underline text-qf-grey' href={ link }>{ handle }</a>
                : <p>{ handle }</p>

            }
        </div>
    )
}

export default function Contact() {
    return (
        <div className='desktop:pt-10 pt-0 desktop:pb-20 pb-5 flex flex-col gap-6'>
            <PageHero
                headerText='GET IN TOUCH'
                imgObj={ {alt: 'operators standing by', url: 'contact/contact_hero.jpg'}}
            >
                <div className='desktop:max-w-[400px] w-full bg-qf-light-grey rounded p-4'>
                    <NotificationsActiveIcon fontSize='small' className='mb-2 rotate-[-30deg]' />
                    <p className='text-qf-dark-brown'>
                        Quill Feather Farm is open <span className='italic'>by appointment only</span>.
                    </p>
                </div>
            </PageHero>
            <PageBlock
                innerCls='flex flex-col gap-6'
            >
                { contactInfo.map((info, i) => {
                    return <ContactEntry {...info} key={ i } />
                })}
            </PageBlock>
        </div>
    )
}
