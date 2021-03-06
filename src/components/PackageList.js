import { useState } from 'react'
import { composeCls } from 'components/shared'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PageBlock from 'components/PageBlock'

function CategoryTab({ title, count, isActive, onClick }) {
    const headerCls = isActive ? 'text-qf-white' : 'text-qf-light-brown'
    const expandIconCls = isActive ? 'text-qf-white' : 'text-qf-light-brown'
    const countCls = isActive ? 'text-qf-orange' : 'text-qf-light-brown'

    return (
        <div 
            onClick={ onClick }
            className='flex desktop:gap-2 items-center'
        >
            <h1 className={ composeCls(headerCls, 'font-1 desktop:text-3xl text-2xl cursor-pointer mb-0') }>
                { title.toUpperCase() }
                <span className={ countCls }>
                    { ' ' + count }
                </span>
            </h1>
            <ExpandMoreIcon className={ composeCls(expandIconCls, 'text-qf-white h-8 w-8') } />
        </div>
    )
}

export default function PackageList({ children, packages, categories, onChangeCategory, noEqualRow }) {
    const [activeCategory, setActiveCategory] = useState(categories[0])

    const changeCategory = (category) => {
        setActiveCategory(category)
        onChangeCategory(category)
    }

    // This prevents each row from matching the tallest one. Used in
    // shop/portraits so the acutal items don't expand to the height of the
    // examples block.
    const gridCls = noEqualRow ? '' : 'desktop:auto-rows-[1fr]'

    return (
        <PageBlock
            outerCls='desktop:py-24 py-10 bg-qf-dark-brown'
            innerCls='flex flex-col gap-6'
        >
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
            <div className={ composeCls(gridCls, 'grid grid-cols-1 gap-y-6') }>
                { children }
            </div>
        </PageBlock>
    )
}
