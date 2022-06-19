import train_thumb from 'assets/images/train/train_thumb.jpg'
import hunt_thumb from 'assets/images/hunt/hunt_thumb.jpg'
import shop_thumb from 'assets/images/shop/shop_thumb.jpg'
import individual_thumb from 'assets/images/train/individual_thumb.jpg'
import group_thumb from 'assets/images/train/group_thumb.jpg'
import bootcamp_thumb from 'assets/images/train/bootcamp_thumb.jpg'
import { ReactComponent as PhoneIcon } from 'assets/images/qf/phone.svg'
import { ReactComponent as EmailIcon } from 'assets/images/qf/email.svg'
import { ReactComponent as FbIcon } from 'assets/images/qf/facebook.svg'

export const navLinks = [ 
    {
        to: '/',
        text: 'HOME',
    },
    {
        to: '/about',
        text: 'ABOUT',
    },
    {
        to: '/hunt',
        text: 'HUNT',
    },
    {
        to: '/train',
        text: 'TRAIN',
    },
    {
        to: '/shop',
        text: 'SHOP',
    },
    {
        to: '/contact',
        text: 'CONTACT',
    },
]

export const contactInfo = { 
    phone: {
        handle: '410-274-6077',
        icon: <PhoneIcon />,
    },
    email: {
        handle: 'quillfeatherfarm@gmail.com',
        icon: <EmailIcon />,
    },
    facebookFarm: {
        handle: 'Quill Feather Farm',
        icon: <FbIcon />,
    },
    facebookGunDogs: {
        handle: 'Quill Feather Gun Dogs',
        icon: <FbIcon />,
    }
};

export const mainFeatures = [
    {
        img: hunt_thumb,
        titleText: 'hunt',
        bodyText: 'Hunt pheasant, chukar, and quail on guided hunts across our seventy acre field.',
        to: '/hunt',
    },
    {
        img: train_thumb,
        titleText: 'train',
        bodyText: "Send your pups to our overnight bootcamp while you're away. blah blah  other shit about training.",
        to: '/train',
    },
    {
        img: shop_thumb,
        titleText: 'studio',
        bodyText: 'Shop our art studio and apparel and view our products of choice for all things gun dog.',
        to: '/shop',
    }
];

export const trainingPackages = {
    individual: {
        img: individual_thumb,
        packages: [
            {
                headerText: 'EVALUATION',
                bodyText: 'A mandatory precursor to any individual program. Having an understanding of where you and your dog are is an imperative step to building a successful training program.',
                price: '$100.00',
            },
            {
                headerText: 'PERSONALIZED',
                bodyText: 'A personalized program built to fulfill the needs of you and your dog.',
                disclaimer: 'Pricing does not include birds.',
                price: '$85.00',
                rate: 'hr',
            },
            {
                headerText: 'WEEKEND WARRIOR',
                bodyText: 'Drop your dog off Friday and we work with the dog Saturday, Sunday, and Monday. You return Monday evening and work with us and your dog on what we have accomplished in the past three days.',
                disclaimer: 'Does not include birds and price may vary based on training selection.',
                price: '$300.00',
            },
        ]
    },
    group: {
        img: group_thumb,
        packages: [
            {
                headerText: 'FOUNDATION OBEDIENCE',
                bodyText: 'A four week class focusing on building the foundations of obedience.',
                price: '$100.00'
            },
        ]
    },
    bootcamp: {
        img: bootcamp_thumb,
        packages: []
    }
}

export const cristinBio = "Cristin is an all-around creative person with a deep-rooted passion for dogs…especially bird dogs. She has been training, observing, and loving dogs since childhood, and has personal experience with a wide variety of breeds including: Yorkshire Terriers, Shetland Sheepdogs, Schnauzers, Collies, Labrador Retrievers, Chesapeake Bay Retrievers, Weimaraners, and German Shorthaired Pointers. She combines this lifetime of hands-on experiences with a dog psychology methodology to develop a solid and reliable process for getting the most out of your dog. Preferring to call herself a coach (rather than a trainer), she chooses to teach and encourage the human and not solely train the canine. She has a unique ability to identify problem sources and devise applicable solutions and has been providing behavior modification services since 2010. Originally from Maryland, waterfowling and labs were in her blood and although she is comfortable working with all breeds, her interest in versatile dog training was piqued in 2014 when she brought home a German Shorthaired Pointer named Remmel. A busy mom with two boys (and two bonus girls) and (at least) four active GSPs, she not only understands the importance of a well-balanced life, but also recognizes the positive impact it can have your relationship with your dog. Regardless of your situation, she promises to work with you to find the best solutions that work for you and your dog, both in the field and at home. Cristin is also an accomplished artist whose favorite subjects include dogs and waterfowl. She is also the current Director of Testing for the Keystone Chapter of NAVHDA. When not working with dogs, she enjoys hunting, fishing, crabbing, and just about anything outdoors."
export const brandtBio = "Brandt is a detail-oriented person with a background in engineering, construction, and excavation. He’s a busy dad with two girls (and two bonus boys), a licensed SEO, a PSMA Certified Inspector, and he can finesse earth with heavy equipment like an artist forming clay. An avid hunter, Brandt always dreamed of having a farm of his own with enough land to hunt and a dog of his own to hunt alongside him. His bird dog journey began in 2013 when he brought home a German Shorthaired Pointer named Molson. He didn’t really know what he wanted out of his dog at this time, only that he didn’t want a female. With 4 sisters, 2 daughters, and 7 nieces Brandt knew the new addition to the family needed to be male. Although predominantly a deer hunter, Brandt quickly recognized his dog needed more. After joining NAVHDA to help him get the most for Molson, he realized he not only enjoyed the training process, he had a real knack for helping others through issues with their bird dogs. Brandt has been the Director of Training for the Keystone Chapter of NAVHDA since 2016 and has helped countless members train their versatile dog. He has qualified for the NAVHDA Invitational three times, is in the NAVHDA Apprentice Judge Program, and is currently training a dog for the NAVHDA Utility Test. When not in the field, Brandt LOVES to cook and encourages everyone he meets to try new things."