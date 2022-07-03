import { contactInfo } from 'Const'

export default function Contact() {
    return (
        <div className='desktop:pt-10 desktop:px-40 desktop:pb-10 px-6 py-12'>
            <h1 className='qf__header-1 text-left mb-6'>
                GET IN TOUCH
            </h1>
            <div className='flex flex-col gap-6 desktop:mx-0 mx-auto'>
                { Object.entries(contactInfo).map(([type, info], i) => {
                    return (
                        <div className='flex flex-row gap-6 items-center' key={ i }>
                            <div className='h-6 w-6 fill-qf-dark-brown'>
                                { info.icon }
                            </div>
                            <p>
                                { info.handle }
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
