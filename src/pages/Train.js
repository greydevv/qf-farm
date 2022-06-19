import ShowcaseCard from 'components/ShowcaseCard';
import FeatureCardList from 'components/FeatureCardList';
import PageHero from 'components/PageHero'
import { PackageList } from 'components/Package'
import { trainingPackages } from 'Const'
import train from 'assets/images/train/train.jpg'

export default function Train() {
    return (
        <div className='desktop:pt-10 pt-0 flex flex-col gap-10'>
            <PageHero
                headerText='TRAIN'
                bodyText='There is no substitute for a well-trained gun dog. At Quill Feather Farm we understand this necessity and offer a variety of unique and tailored training opportunities to help you get the most out of your pointing dog. We cater to the versatile hunting dog by offering both upland and waterfowl training.'
                img={ train }
            
            />
            <PackageList />
        </div>
    );
}
