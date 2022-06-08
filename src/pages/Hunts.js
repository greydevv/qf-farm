import hunt from 'assets/images/hunt/hunt.jpeg'
import qfStamp from 'assets/images/qf-stamp.png'
import { QfButton, QfInput } from 'components/shared'
import { bodyCls } from 'Const'

export default function Hunts() {
    return (
        <div className='desktop:px-40 desktop:my-20 pb-5 flex flex-col gap-20'>
            <div className='flex desktop:flex-row flex-col desktop:gap-10 gap-6'>
                <div className='desktop:w-1/2 desktop:px-0 px-6 text-left'>
                    <div className='w-full flex flex-row gap-6 desktop:mb-4 mb-2'>
                        <h1 className='font-1 desktop:text-5xl text-3xl font-normal text-qf-black'>
                            HUNT
                        </h1>
                        <div className='rounded my-auto bg-qf-orange/30 px-2 py-0.5 text-qf-orange text-sm'>
                            FALL 2022
                        </div>
                    </div>
                    <p className={ bodyCls('desktop:w-9/10') }>
                        We provide personal, guided hunts on our seventy-acre
                        field. Small game including from chukar, pheasant, and
                        quail. Some more things about what's to come.
                    </p>
                </div>
                <div className='mx-auto h-full w-full overflow-clip desktop:rounded desktop:order-last order-first'>
                    <img src={ hunt } />
                </div>
                <div className='w-full px-6'>
                    <QfInput placeholder={ 'email@example.com' } className='w-full mb-4' />
                    <QfButton className='w-full'>
                        NOTIFY ME
                    </QfButton>
                </div>
            </div>
        </div>
    )
}
