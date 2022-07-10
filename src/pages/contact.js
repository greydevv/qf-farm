import { contactInfo } from 'lookups/contacts.js'
import PageHero from 'components/PageHero'
import CampaignIcon from '@mui/icons-material/Campaign'
import PageBlock from 'components/PageBlock'

function ContactEntry({ handle, icon, link }) {
    return (
        <div className='flex flex-row gap-6 items-center'>
            <div className='h-6 w-6 mb-auto fill-qf-dark-brown'>
                { icon }
            </div>
            { link
                ? <a className='underline text-qf-dark-brown' href={ link }>{ handle }</a>
                : <p>{ handle }</p>

            }
        </div>
    )
}

export default function Contact() {
    return (
        <div className='desktop:pt-10 pt-0 desktop:pb-20 pb-10'>
            <PageHero
                headerText='GET IN TOUCH'
                reminderText='Quill Feather Farm is open by appointment only.'
                imgObj={ {alt: 'operators standing by', url: 'contact/contact_hero.jpg'}}
            >
                <div className='flex flex-col gap-6'>
                    { contactInfo.map((info, i) => {
                        return <ContactEntry {...info} key={ i } />
                    })}
                </div>
            </PageHero>
        </div>
    )
}
