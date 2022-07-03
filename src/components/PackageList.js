import { useState } from 'react'
import { composeCls } from 'components/shared'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CategoryTab({ title, count, isActive, onClick }) {
    const cls = 'font-1 desktop:text-3xl text-2xl cursor-pointer'

    return (
        <div 
            onClick={ onClick }
            className='flex desktop:gap-2 items-center'
        >
            <h1 className={ composeCls(cls, isActive ? 'text-qf-white' : 'text-qf-light-brown') }>
                { title.toUpperCase() }
                { isActive &&
                    <span className='text-qf-orange'>
                        { ' ' + count }
                    </span>
                }
            </h1>
            { isActive && count > 0 &&
                <ExpandMoreIcon className='text-qf-white h-8 w-8' />
            }
        </div>
    )
}

export default function PackageList({ children, packages, categories, onChangeCategory }) {
    const [activeCategory, setActiveCategory] = useState(categories[0])

    const changeCategory = (category) => {
        setActiveCategory(category)
        onChangeCategory(category)
    }

    return (
        <div className='desktop:px-40 px-6 desktop:py-24 py-10 bg-qf-dark-brown flex flex-col gap-6'>
            <div className='flex desktop:flex-row flex-col desktop:justify-between desktop:pb-10'>
                { Object.keys(packages).map((category, i) => {
                    return <CategoryTab 
                        key={ i }
                        title={ category }
                        count={ packages[category].packages.length }
                        isActive={ category === activeCategory }
                        onClick={ () => changeCategory(category) }
                    />
                })}
            </div>
            { children }
        </div>
    )
}