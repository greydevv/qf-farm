import { useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { NavLink } from 'react-router-dom'

export default function ViewPackage() {
    const { pdf } = useParams()

    const pdfUrl = process.env.REACT_APP_S3_BUCKET_NAME + 'train/packages/' + pdf + '.pdf'
    
    return (
        <div className='w-screen desktop:px-40 px-6'>
            <div className='mt-6 mb-12'>
                <NavLink to='/train' className='flex gap-x-2'>
                    <ArrowBackIcon className='text-qf-orange' />
                    <p className='text-qf-orange'>
                        BACK TO TRAIN
                    </p>
                </NavLink>
            </div>
            <iframe className='h-full w-full aspect-[8/11]' iframe src={ pdfUrl } />
        </div>
    )
}
