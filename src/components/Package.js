export default function Package({ img, title, nightlyRate }) {

    const toDollar = (n) => {
        return `$ ${n}`;
    };

    return (
        <div className='grid grid-cols-[30%_auto]'>
            <div className='h-full aspect-square rounded-lg'>
                <img src={ img } />
            </div>
            <div>
                <h3 className='font-1 text-lg text-dark font-bold'>{ title }</h3>
                <p>{ toDollar(nightlyRate) }<span>/ night</span></p>
            </div>
        </div>
    );
}
