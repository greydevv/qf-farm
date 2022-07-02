import { contactInfo } from 'Const'

export default function Contact() {
    return (
        <div className='desktop:pt-10 desktop:px-40 desktop:pb-10 pt-0'>
            <h1 className='qf__header-1 desktop:text-left text-center mb-6'>
                GET IN TOUCH
            </h1>
            <div className='flex flex-col gap-6 desktop:mx-0 mx-auto'>
                { Object.entries(contactInfo).map(([type, info], i) => {
                    return (
                        <div className='flex flex-row gap-6' key={ i }>
                            <div className='h-6 w-6 fill-qf-dark-brown'>
                                { info.icon }
                            </div>
                            <p className='qf__body text-qf-light-brown my-auto'>
                                { info.handle }
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
