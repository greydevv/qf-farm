import { contactInfo } from 'lookups/contacts.js'
import CampaignIcon from '@mui/icons-material/Campaign'

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
        <div className='desktop:pt-10 desktop:px-40 desktop:pb-10 px-6 py-12'>
            <div className='grid desktop:grid-rows-1 grid-rows-[repeat(2,_1fr)] desktop:grid-cols-[repeat(2,_1fr)] grid-cols-1'>
                <div className='col-start-1 row-start-1'>
                    <h1 className='text-qf-black mb-10'>
                        GET IN TOUCH
                    </h1>
                    <div className='flex flex-col gap-6 desktop:mx-0 mx-auto'>
                        { contactInfo.map((info, i) => {
                            console.log(info)
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
        </div>
    )
}
