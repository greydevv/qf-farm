import { ZStack, ZStackElement } from 'components/ZStack';
import qfStamp from 'assets/images/qf-stamp.png'

export default function Hunts() {
    return (
        <div className='flex justify-center h-full'>
            <ZStack className='w-full'>
                <ZStackElement className='h-full'>
                    <img src={ qfStamp } className='h-80 mx-auto aspect-square opacity-5'/>
                </ZStackElement>
                <ZStackElement className='my-auto'>
                    <h1 className='text-center font-1 text-dark text-6xl font-light'>
                        COMING FALL 2022
                    </h1>
                </ZStackElement>
            </ZStack>
        </div>
    )
}
