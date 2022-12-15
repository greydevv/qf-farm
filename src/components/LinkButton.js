import Link from 'next/link'
import { composeCls } from 'components/shared'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function LinkButton({ href, text, target, className }) {
    return (
        <div className='inline-block'>
            <Link href={ href } target={ target }>
                <div className={ composeCls(className, 'flex items-center gap-2 text-qf-white cursor-pointer rounded py-3 px-4') }>
                    <p className='text-qf-white'>
                        { text }
                    </p>
                    <ArrowForwardIcon className='text-qf-white' />
                </div>
            </Link>
        </div>
    )
}
