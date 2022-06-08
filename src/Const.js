
export const bodyCls = (extra) => {
    const base = 'text-qf-grey leading-8 font-light'
    if (extra) {
        return `${base} ${extra}`
    }
    return base
}

