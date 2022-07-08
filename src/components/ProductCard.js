import { composeCls } from 'components/shared'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import Image from 'next/image'
import parse from 'html-react-parser'

function DisclaimerAlert({ text }) {
    return (
        <div className='flex flex-row gap-x-2 items-center'>
            <ErrorOutlineIcon fontSize='small' className='text-qf-orange mb-auto' />
            <p className='text-xs tracking-wider'>{ text }</p>
        </div>
    )
}

export default function ProductCard({ children, name, desc, price, priceRate, disclaimer, attrList, imgObj, tall }) {

    const gridCls = imgObj ? 'desktop:grid-cols-[1fr_3fr]' : 'desktop:grid-cols-1'
    const imgCls = tall ? 'aspect-square' : 'desktop:aspect-auto aspect-[7/2]'
    const infoCls = imgObj ? 'desktop:col-start-2' : 'desktop:col-start-1'

    return (
        <div className={ composeCls(gridCls, 'w-full grid desktop:grid-rows-1 grid-cols-1 grid-rows-[auto_1fr] bg-qf-brown rounded-sm overflow-clip overflow-hidden') }>
            { imgObj &&
                <div className={ composeCls(imgCls, 'relative desktop:h-full h-full w-full row-start-1') }>
                    <Image alt={ imgObj.alt } src={ process.env.NEXT_PUBLIC_S3_BUCKET_NAME + imgObj.url } width='100%' height='100%' layout='fill' priority className='h-full w-full object-cover' />
                </div>
            }
            <div className={ composeCls(infoCls, 'flex flex-col justify-between desktop:px-6 px-2 desktop:pt-6 py-2 desktop:row-start-1 desktop:col-start-2 row-start-2') }>
                <div className='flex flex-col gap-y-4'>
                    <div className='flex desktop:flex-row flex-col desktop:justify-between'>
                        <h2>
                            { name }
                        </h2>
                        <h2>
                            { price &&
                                <span className='font-thin tracking-widest'>$</span>
                            }
                            { price || 'VARIES'}
                            { price && priceRate && 
                                <span className='font-thin text-base'> /{ priceRate }</span>
                            }
                        </h2>
                    </div>
                    <p className='w-full qf__body--package'>
                        { parse(desc) }
                    </p>
                    { disclaimer && <DisclaimerAlert text={ disclaimer } /> }
                </div>
                { children }
            </div>
        </div>
    )
}
