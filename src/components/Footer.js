import Link from 'next/link'
import PageBlock from 'components/PageBlock'
import { navLinks } from 'lookups/navigation.js'

export default function Footer() {
    return (
        <PageBlock
            outerCls='border-t-2 border-qf-light-brown h-full bg-qf-dark-brown desktop:pt-10 pt-6 desktop:pb-20 pb-12'
        >
            <h2 className='mb-6'>
                QUILL FEATHER FARM
            </h2>
            <div className='flex desktop:flex-row flex-col desktop:gap-6 gap-1'>
                { navLinks.map(({href, text}, i) => {
                    return (
                        <Link key={ i } href={ href }>
                            <a className='qf__body text-qf-light-brown font-xs font-medium'>{ text }</a>
                        </Link>
                    )
                })}
            </div>
        </PageBlock>
    )
}
