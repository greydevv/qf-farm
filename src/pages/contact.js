import { contactInfo } from 'lookups/contacts.js'
import CampaignIcon from '@mui/icons-material/Campaign'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'

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
        <div className='desktop:pt-10 desktop:px-40 desktop:pb-20 px-6 py-12'>
            <div className='col-start-1 row-start-1'>
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
            </div>
                {/*<div className='desktop:col-start-2 col-start-1 desktop:row-start-1 row-start-2 rounded bg-qf-brown'>
                    <div className='flex px-10 items-center h-full w-full'>
                        <p className='mx-auto text-qf-white text-center'>Quill Feather Farm is open by appointment only. Please contact us for more information.</p>
                    </div>
                </div>*/}
        </div>
    )
}
