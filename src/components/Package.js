import { useState } from 'react'
import PageHero from 'components/PageHero'
import { composeCls } from 'components/shared'
import individual_thumb from 'assets/images/train/individual_thumb.jpg'
import group_thumb from 'assets/images/train/group_thumb.jpg'
import bootcamp_thumb from 'assets/images/train/bootcamp_thumb.jpg'
import { ReactComponent as Back } from 'assets/images/qf/back.svg'
import { ReactComponent as DisclaimerIcon } from 'assets/images/qf/disclaimer.svg'
import { ReactComponent as ChevronDown } from 'assets/images/qf/chevron_down.svg'
import { NavLink } from 'react-router-dom'
import { 
    individualPackages, 
    groupPackages, 
    bootcampPackages 
} from 'Const'

function Package({ headerText, bodyText, disclaimer, price, rate, img, leftLinkText, leftLink, rightLinkText, rightLink }) {
    return (
        <div className='flex desktop:flex-row flex-col desktop:gap-6 gap-x-6 rounded-sm overflow-clip overflow-hidden bg-qf-brown'>
            { img &&
                <div className='desktop:max-h-[250px] aspect-square overflow-clip overflow-hidden'>
                    <img className='w-full h-full object-cover' src={ img } />
                </div>
            }
            <div className='flex flex-col desktop:justify-between flex-1 px-6 pt-8 pb-4'>
                <div>
                    <div className='flex desktop:flex-row flex-col desktop:justify-between'>
                        <h1 className='qf__header-1 mb-0 text-qf-white'>
                            { headerText }
                        </h1>
                        <h1 className='font-1 desktop:text-3xl text-xl mb-2 text-qf-white'>
                            { price }
                            { rate &&
                                <span className='text-sm font-normal text-qf-white'>
                                    { ` / ${rate}`}
                                </span>
                            }
                        </h1>
                    </div>
                    { disclaimer && 
                        <div className='flex gap-2 items-center mb-6'>
                            <DisclaimerIcon className='h-4 w-4 fill-qf-orange' />
                            <p className='qf__body text-qf-light-brown max-w-body'>
                                { ' ' + disclaimer }
                            </p>
                        </div>
                    }
                    <p className='qf__body max-w-body text-qf-light-brown my-6'>
                        { bodyText }
                    </p>
                </div>
                <div className='w-full flex justify-between'>
                    { leftLinkText &&
                        <NavLink to={ leftLink } className='qf__body text-qf-orange font-xs font-medium underline cursor-pointer'>
                            { leftLinkText }
                        </NavLink>
                    }
                    <a href={ rightLink } className='qf__body text-qf-orange font-xs font-medium underline'>
                        { rightLinkText || 'SIGN UP' }
                    </a> 
                </div>
            </div>
        </div>
    )
}

export function PackageList({ packageSet }) {
    const [activeCategory, setActiveCategory] = useState(Object.keys(packageSet)[0])
    const [packages, setPackages] = useState(packageSet[activeCategory].packages)

    const changeCategory = (category) => {
        setActiveCategory(category)
        setPackages(packageSet[category].packages)
    }

    return (
        <div className='desktop:px-40 px-6 desktop:py-24 py-10 bg-qf-dark-brown flex flex-col gap-6'>
            <div className='flex desktop:flex-row flex-col desktop:justify-between desktop:pb-10'>
                { Object.keys(packageSet).map((category, i) => {
                    let cls = 'font-1 desktop:text-3xl text-2xl cursor-pointer'
                    if (category === activeCategory) {
                        cls = composeCls(cls, 'text-qf-white')
                    } else {
                        cls = composeCls(cls, 'text-qf-light-brown')
                    }
                    return (
                        <div 
                            key={ i }
                            onClick={ () => changeCategory(category) }
                            className='flex desktop:gap-2 items-center'
                        >
                            <h1 className={ cls }>
                                { category.toUpperCase() }
                                { category === activeCategory &&
                                    <span className='text-qf-orange'>
                                         { ` ${packages ? packages.length : 0}` } 
                                    </span>
                                }
                            </h1>
                            { category === activeCategory &&
                                <ChevronDown className='fill-qf-white h-8 w-8' />
                            }
                        </div>
                    )
                })}
            </div>
            {packages.map((e, i) => { return <Package key={ i } { ...e }/> })}
        </div>
    )
}
