import { composeCls } from 'components/shared.js'

export default function PageBlock({ children, outerCls, innerCls }) {
    return (
        <div className={ composeCls(outerCls, 'desktop:px-40 px-6') }>
            <div className={ composeCls(innerCls, 'max-w-main mx-auto') }>
                { children }
            </div>
        </div>
    )
}
