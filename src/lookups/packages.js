const makePackageLink = (name, verbiage) => {
    const mailToObj = {
        subject: `${name}: Sign Up`,
        body: encodeURIComponent(`I'm interested in signing up for ${verbiage}! Please send me more information.\n\n\nName: \nPhone: `)
    }
    return `mailto:quillfeatherfarm@gmail.com?subject=${mailToObj.subject}&body=${mailToObj.body}`
}

const weekendWarriorPackage = {
    title: 'WEEKEND WARRIOR',
    desc: 'Drop your dog off Friday and we work with the dog Saturday, Sunday, and Monday. You return Monday evening and work with us and your dog on what we have accomplished in the past three days.',
    disclaimer: 'Pricing does not include birds and price may vary based on training selection.',
    price: 300,
    imgObj: {
        alt: '',
        url: 'train/packages/weekend_warrior.jpg',
    },
    to: makePackageLink('Weekend Warrior', 'the Weekend Warrior program')
}

export const trainingPackages = {
    individual: {
        img: process.env.REACT_APP_S3_BUCKET_NAME + 'train/individual_thumb.jpg',
        packages: [
            {
                title: 'EVALUATION',
                desc: 'A mandatory precursor to any individual program. Having an understanding of where you and your dog are is an imperative step to building a successful training program.',
                price: 100,
                imgObj: {
                    alt: '',
                    url: 'train/group_thumb.jpg',
                },
                to: makePackageLink('Evaluation', 'an evaluation')
            },
            {
                title: 'PERSONALIZED',
                desc: "We'll take what we learn during your evaluation to define where you are. Then, taking in account where you want to go, we'll create a personalized program just for you to help get you and your dog there.",
                disclaimer: 'Pricing does not include birds.',
                price: 85,
                rate: 'hr',
                imgObj: {
                    alt: '',
                    url: 'train/packages/personalized.jpg',
                },
                to: makePackageLink('Personalized', 'a personalized training program')
            },
            weekendWarriorPackage,
        ]
    },
    group: {
        img: process.env.REACT_APP_S3_BUCKET_NAME + 'train/group_thumb.jpg',
        packages: [
            {
                title: 'FOUNDATION OBEDIENCE',
                desc: 'A four week class focusing on building the foundations of obedience.',
                price: 100,
                imgObj: {
                    alt: '',
                    url: 'train/packages/foundation_obedience.jpg',
                },
                moreTo: 'foundation-obedience',
                to: makePackageLink('Foundation Obedience', 'the foundation obedience class')
            },
            {
                title: 'INTERMEDIATE GUN DOG',
                desc: 'A four week class focusing on bulding upon the foundation of obedience by taking your dog from the yard to the field.',
                disclaimer: 'Pricing does not include birds.',
                price: 250,
                imgObj: {
                    alt: '',
                    url: 'train/packages/intermediate_gun_dog.jpg',
                },
                moreTo: 'intermediate-gun-dog',
                to: makePackageLink('Intermediate Gun Dog', 'the intermediate gun dog class')
            },
        ]
    },
    overnight: {
        img: process.env.REACT_APP_S3_BUCKET_NAME + 'train/bootcamp_thumb.jpg',
        packages: [
            {
                title: 'COME, SIT, STAY... WITH US',
                desc: 'Our "Come, Sit, Stay…with Us" program combines customized training with extended stay. Choose anything from the most basic obedience to steadiness and beyond. You pick the training, you pick the dates, you pick the duration. ',
                price: 40,
                disclaimer: 'Pricing starts at $40/day and does not include birds. Dates based on availability.',
                rate: 'day',
                imgObj: {
                    alt: '',
                    url: 'train/packages/come_sit_stay.jpg',
                },
                to: makePackageLink('Come Sit Stay With Us', 'the "Come, Sit, Stay... with Us" package')
            },
            weekendWarriorPackage
        ]
    }
}
