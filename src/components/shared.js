export const composeCls = (extra, base) => {
    if (extra) {
        base = `${base} ${extra}`
    }

    return base
}

export function QfInput({ className, errors, placeholder, ...rest }) {
    const baseCls = 'rounded border-2 border-qf-light-brown font-2 bg-qf-light-brown py-4 px-2 focus:outline-none placeholder-qf-dark-brown text-qf-white'
    return (
        <div className={ className }>
            <input 
                type='text' 
                placeholder={ placeholder }
                className='w-full block rounded border-2 border-qf-light-brown font-2 bg-qf-light-brown py-4 px-2 focus:outline-none placeholder-qf-dark-brown text-qf-white'
                { ...rest }
            />
            { errors && 
                <span>{ errors }</span>
            }
        </div>
    )
}

export function QfButton({ className, disabled, children, ...rest }) {
    let baseCls = 'bg-qf-brown rounded text-qf-white text-center font-1 py-4 px-6'
    if (disabled) {
        baseCls += ' opacity-20'
    }
    return (
        <button 
            className={ composeCls(baseCls, className) } 
            disabled={ disabled }
            { ...rest }
        >
            { children }
        </button>
    )
}
