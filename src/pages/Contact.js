import { useState } from 'react'
import { contactInfo } from 'Const'
import { QfButton, QfInput } from 'components/shared'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

export default function Contact() {
    const [ isValidEmail, setIsValidEmail ] = useState(false)
    const [ email, setEmail ] = useState('')
    const [ captchaComplete, setCaptchaComplete ] = useState(false)

    const onEmailInputChange = (text) => {
        setIsValidEmail(validateEmail(text))
        setEmail(text)
    }

    const onCaptchaChange = async (value) => {
        setCaptchaComplete(true)
    }

    const onCaptchaError = () => {
        setCaptchaComplete(false)
    }

    const validateEmail = (text) => {
        const re = new RegExp('[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+')
        return text.match(re) !== null
    }

    const notifyClicked = (subscribeCallback) => {
        if (!isValidEmail || !captchaComplete) {
            return
        }
        subscribeCallback({'EMAIL': email})
    }

    return (
        <div className='desktop:pt-10 desktop:px-40 desktop:pb-10 pt-0 flex desktop:flex-row flex-col gap-20'>
            <div className='flex flex-col gap-10 w-full desktop:rounded px-6 desktop:py-24 pt-16 pb-0'>
                <h1 className='qf__header-1 desktop:text-left text-center'>
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
            <div className='flex flex-col gap-10 w-full desktop:rounded px-6 desktop:py-24 py-16 bg-qf-dark-brown'>
                <h1 className='qf__header-1 text-qf-white text-center'>JOIN OUR MAILING LIST</h1>
                <div className='desktop:max-w-[800px] desktop:mx-auto'>
                    <MailchimpSubscribe
                        url={ process.env.REACT_APP_MAILCHIMP_URL }
                        render={({ subscribe, status, message }) => (
                            <div>
                                { status === "sending" &&
                                    <div className='text-qf-orange text-sm mb-4'>
                                        Loading...
                                    </div>
                                }
                                { status === "error" &&
                                    <div className='text-qf-orange text-sm mb-4' dangerouslySetInnerHTML={{__html: message}}/>
                                }
                                { status === "success" &&
                                    <div className='text-qf-orange text-sm mb-4'>
                                        Thank you for subscribing!
                                    </div>
                                }
                                <QfInput 
                                    onChange={ (e) => onEmailInputChange(e.target.value) } 
                                    placeholder='email@example.com' 
                                    className='w-full mb-4'
                                />
                                <QfButton 
                                    onClick={ () => notifyClicked(subscribe) } 
                                    disabled={ !isValidEmail || !captchaComplete } 
                                    className='w-full mb-4'
                                >
                                    JOIN
                                </QfButton>
                            </div>
                        )}
                    />
                    <div className='mx-auto max-w-min'>
                        <ReCAPTCHA
                            sitekey={ process.env.REACT_APP_CAPTCHA_SITE_KEY_TEST }
                            onChange={ onCaptchaChange }
                            onErrored={ onCaptchaError }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
