import { useRouter } from 'next/router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Link from 'next/link'

export default function ViewPackage() {
    const router = useRouter()
    const { pdf } = router.query

    const pdfUrl = process.env.NEXT_PUBLIC_S3_BUCKET_NAME + 'train/packages/' + pdf + '.pdf'
    return (
        <div className='w-full desktop:px-40 px-6'>
            <div className='mt-6 mb-12'>
                <Link href='/train'>
                    <div className='cursor-pointer flex gap-x-2 items-center'>
                        <ArrowBackIcon className='text-qf-orange' />
                        <p className='text-qf-orange'>
                            BACK TO TRAIN
                        </p>
                    </div>
                </Link>
            </div>
            <iframe className='h-full w-full aspect-[8/11]' src={ pdfUrl } />
        </div>
    )
}
