import FeatureCard from 'components/FeatureCard';

export default function FeatureCardList({ data }) {
    return (
        <div className='desktop:px-0 px-6 desktop:py-24 py-10 bg-qf-dark-brown'>
            <div className='max-w-main flex h-full desktop:flex-row flex-col justify-center gap-6 mx-auto w-full'>
                { data.map((e, i) => <FeatureCard { ...e } key={ i } /> )}
            </div>
        </div>
    )
}
