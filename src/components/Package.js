import { useState } from 'react'
import PageHero from 'components/PageHero'
import { composeCls } from 'components/shared'
import individual_thumb from 'assets/images/train/individual_thumb.jpg'
import group_thumb from 'assets/images/train/group_thumb.jpg'
import bootcamp_thumb from 'assets/images/train/bootcamp_thumb.jpg'
import { ReactComponent as Back } from 'assets/images/qf/back.svg'
import { ReactComponent as DisclaimerIcon } from 'assets/images/qf/disclaimer.svg'
import { ReactComponent as ChevronDown } from 'assets/images/qf/chevron_down.svg'
// import { Document, Page } from 'react-pdf'
import { NavLink } from 'react-router-dom'
import { 
    individualPackages, 
    groupPackages, 
    bootcampPackages 
} from 'Const'

function Package({ headerText, bodyText, disclaimer, price, rate, img }) {

    const mailTo = `mailto:quillfeatherfarm@gmail.com?subject=${ headerText }: Training Package Sign Up`

    return (
        <div className='flex gap-6 rounded-sm bg-qf-brown'>
            { img &&
                <div className='h-full aspect-square overflow-clip overflow-hidden'>
                    <img className='w-full h-full object-cover' src={ img } />
                </div>
            }
            <div className='flex-1 px-6 pt-8 pb-4'>
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
                <div className='w-full flex justify-between'>
                    <p className='qf__body text-qf-orange font-xs font-medium underline'>
                        LEARN MORE
                    </p> 
                    <a href={ mailTo } className='qf__body text-qf-orange font-xs font-medium underline'>
                        SIGN UP
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
        {/*
            <Document file={ pdf }>
            <Page pageNumber={ 0 } />
            </Document>
        */}
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
