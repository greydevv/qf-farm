import { useRouter } from 'next/router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Image from 'next/image'
import Link from 'next/link'

export default function ViewPackage() {
    const router = useRouter()
    const { pdf } = router.query

    const pdfUrl = process.env.NEXT_PUBLIC_S3_BUCKET_NAME + 'train/packages/' + pdf + '.jpg'
    return (
        <div className='w-full desktop:pt-10 pt-6 desktop:px-40 px-6 desktop:pb-20 pb-5 flex flex-col desktop:gap-20 gap-10'>
            <div className=''>
                <Link href='/train'>
                    <div className='cursor-pointer flex gap-x-2 items-center'>
                        <ArrowBackIcon className='text-qf-orange' />
                        <p className='text-qf-orange'>
                            BACK TO TRAIN
                        </p>
                    </div>
                </Link>
            </div>
            <div className='bg-qf-light-grey w-full relative mx-auto max-w-body'>
                <img alt='Image loading...' src={ pdfUrl } className='w-full' />
            </div>
            {/* <iframe className='h-full w-full aspect-[8/11]' src={ pdfUrl } /> */}
        </div>
    )
}
