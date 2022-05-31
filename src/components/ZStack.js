import './ZStack.css'

export function ZStackElement({ children, className }) {
    return (
        <div className={ 'row-start-1 row-end-1 col-start-1 col-end-1 ' + className }>
            { children }
        </div>
    );
}

export function ZStack({ children, className}) {
    return (
        <div className={ 'grid place-content-center ' + className }>
            { children }
        </div>
    );
}
