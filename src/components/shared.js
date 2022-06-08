const composeCls = (base, extra) => {
    if (extra) {
        base = `${base} ${extra}`
    }

    return base
}

export function QfInput({ className, placeholder, ...rest }) {
    const baseCls = 'rounded border-2 border-qf-light-grey font-2 bg-qf-white py-4 px-2 focus:outline-none placeholder-qf-light-grey text-qf-brown'
    return (
        <input 
            type='text' 
            placeholder={ placeholder }
            className={ composeCls(baseCls, className) } 
            { ...rest }
        />
    )
}

export function QfButton({ className, children, ...rest }) {
    const baseCls = 'bg-qf-brown text-qf-white text-center rounded font-1 py-4'
    return (
        <button 
            className={ composeCls(baseCls, className) } 
            { ...rest }
        >
            { children }
        </button>
    )
}
