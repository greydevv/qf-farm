// import { useState } from 'react'
// import PageHero from 'components/PageHero'
// import { composeCls } from 'components/shared'
// import individual_thumb from 'assets/images/train/individual_thumb.jpg'
// import group_thumb from 'assets/images/train/group_thumb.jpg'
// import bootcamp_thumb from 'assets/images/train/bootcamp_thumb.jpg'
import { composeCls } from 'components/shared'
import { NavLink } from 'react-router-dom'
// import { 
//     individualPackages, 
//     groupPackages, 
//     bootcampPackages 
// } from 'Const'

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

function DisclaimerAlert({ text }) {
    return (
        <div className='flex flex-row gap-x-2 items-center'>
            <ErrorOutlineIcon fontSize='small' className='text-qf-orange mb-auto' />
            <p className='text-xs tracking-wider'>{ text }</p>
        </div>
    )
}

export default function ProductCard({ children, name, desc, price, priceRate, disclaimer, attrList, imgUrl, tall }) {

    const gridCls = imgUrl ? 'desktop:grid-cols-[1fr_3fr]' : 'desktop:grid-cols-1'
    const imgCls = tall ? 'aspect-square' : 'aspect-[7/2]'
    const infoCls = imgUrl ? 'desktop:col-start-2' : 'desktop:col-start-1'

    return (
        <div className={ composeCls(gridCls, 'grid desktop:grid-rows-0 grid-cols-0 grid-rows-[auto_1fr] bg-qf-brown rounded-sm overflow-clip overflow-hidden') }>
            { imgUrl &&
                <div className={ composeCls(imgCls, 'h-full w-full desktop:aspect-square row-start-1') }>
                    <img src={ imgUrl } className='h-full w-full object-cover' />
                </div>
            }
            <div className={ composeCls(infoCls, 'flex flex-col justify-between desktop:px-6 px-2 desktop:pt-6 py-2 desktop:row-start-1 desktop:col-start-2 row-start-2') }>
                <div className='flex flex-col gap-y-4'>
                    <div className='flex justify-between'>
                        <h2>
                            { name }
                        </h2>
                        <h2 className='text-qf-white'>
                            { price &&
                                <span className='font-thin tracking-widest'>$</span>
                            }
                            { price || 'VARIES'}
                            { price && priceRate && 
                                <span className='font-thin text-base'> /{ priceRate }</span>
                            }
                        </h2>
                    </div>
                    <p>
                        { desc }
                    </p>
                    { disclaimer && <DisclaimerAlert text={ disclaimer } /> }
                </div>
                { children }
            </div>
        </div>
    )
}

// function Package({ headerText, bodyText, disclaimer, price, rate, img, leftLinkText, leftLink, rightLinkText, rightLink }) {
//     return (
//         <div className='flex desktop:flex-row flex-col desktop:gap-6 gap-x-6 rounded-sm overflow-clip overflow-hidden bg-qf-brown'>
//             { img &&
//                 <div className='desktop:max-h-[250px] aspect-square overflow-clip overflow-hidden'>
//                     <img className='w-full h-full object-cover' src={ img } />
//                 </div>
//             }
//             <div className='flex flex-col desktop:justify-between flex-1 px-6 pt-8 pb-4'>
//                 <div>
//                     <div className='flex desktop:flex-row flex-col desktop:justify-between'>
//                         <h1 className='qf__header-1 mb-0 text-qf-white'>
//                             { headerText }
//                         </h1>
//                         <h1 className='font-1 desktop:text-3xl text-xl mb-2 text-qf-white'>
//                             { price }
//                             { rate &&
//                                 <span className='text-sm font-normal text-qf-white'>
//                                     { ` / ${rate}`}
//                                 </span>
//                             }
//                         </h1>
//                     </div>
//                     { disclaimer && 
//                         <div className='flex gap-2 items-center mb-6'>
//                             <DisclaimerIcon className='h-4 w-4 fill-qf-orange' />
//                             <p className='qf__body text-qf-light-brown max-w-body'>
//                                 { ' ' + disclaimer }
//                             </p>
//                         </div>
//                     }
//                     <p className='qf__body max-w-body text-qf-light-brown my-6'>
//                         { bodyText }
//                     </p>
//                 </div>
//                 <div className='w-full flex justify-between'>
//                     { leftLinkText &&
//                         <NavLink to={ leftLink } className='qf__body text-qf-orange font-xs font-medium underline cursor-pointer'>
//                             { leftLinkText }
//                         </NavLink>
//                     }
//                     <a href={ rightLink } className='qf__body text-qf-orange font-xs font-medium underline'>
//                         { rightLinkText || 'SIGN UP' }
//                     </a> 
//                 </div>
//             </div>
//         </div>
//     )
// }

