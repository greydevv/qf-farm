import { useState } from 'react'
import { contactInfo } from 'Const'
import { QfButton, QfInput } from 'components/shared'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
    const [ isValidEmail, setIsValidEmail ] = useState(false)
    const [ showCaptcha, setShowCaptcha ] = useState(false)

    const onEmailInputChange = (text) => {
        setIsValidEmail(validateEmail(text))
    }

    const onCaptchaChange = async (value) => {
        const url = getCaptchaUrl(value)
        // const resp = await axios.post(url)

        // if (resp.data.success) {
        //     console.log('good to go')
        // }
        const mailchimpResp = postToMailchimp().then((p) => {
            console.log(p)
        })
    }

    const onCaptchaError = () => {
        setShowCaptcha(false)
    }

    const getCaptchaUrl = (token) => {
        const secKey = process.env.REACT_APP_CAPTCHA_SEC_KEY_TEST
        return `https://www.google.com/recaptcha/api/siteverify?secret=${secKey}&response=${token}`
    }

    const postToMailchimp = async () => {
        const url = getMailchimpUrl()
        const data = getMailchimpPostData()

        console.log(url)
        console.log(data)

        return await axios.post(url, data)
    }

    const getMailchimpPostData = () => {
        const apiKey = process.env.REACT_APP_MAILCHIMP_API_KEY
        return {
            headers: {
                'Authorization': `Basic ${apiKey}`
            },
            withCredentials: false,
        }
    }

    const getMailchimpUrl = () => {
        const serverPrefix = process.env.REACT_APP_MAILCHIMP_SERVER_PREFIX
        return `https://${serverPrefix}.api.mailchimp.com/3.0/ping`
    }

    const validateEmail = (text) => {
        const re = new RegExp('[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+')
        return text.match(re) !== null
    }

    const notifyClicked = () => {
        if (!isValidEmail) {
            return
        }
        setIsValidEmail(false)
        setShowCaptcha(true)
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
                <div className='max-w-[400px] mx-auto'>
                    <QfInput 
                        onChange={ (e) => onEmailInputChange(e.target.value) } 
                        placeholder='email@example.com' 
                        className='w-full mb-4'
                    />
                    <QfButton 
                        onClick={ notifyClicked } 
                        disabled={ !isValidEmail } 
                        className={ 'w-full' + (showCaptcha ? ' mb-4' : '')}
                    >
                        NOTIFY ME
                    </QfButton>
                    { showCaptcha &&
                        <ReCAPTCHA
                            sitekey={ process.env.REACT_APP_CAPTCHA_SITE_KEY_TEST }
                            onChange={ onCaptchaChange }
                            onErrored={ onCaptchaError }
                        />
                    }
                </div>
            </div>
        </div>
    )
}
