import { contactInfo } from 'lookups/contacts.js'
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
        <PageBlock
            outerCls='py-10'
        >
            <h1 className='text-qf-black mb-4'>
                GET IN TOUCH
            </h1>
            <div className='desktop:max-w-[400px] w-full bg-qf-light-grey rounded mb-10 p-4'>
                <NotificationsActiveIcon fontSize='small' className='mb-2 rotate-[-30deg]' />
                <p className='text-qf-dark-brown'>
                    Quill Feather Farm is open <span className='italic'>by appointment only</span>.
                </p>
            </div>
            <div className='flex flex-col gap-6 desktop:mx-0 mx-auto'>
                { contactInfo.map((info, i) => {
                    return <ContactEntry {...info} key={ i } />
                })}
            </div>
        </PageBlock>
    )
}
