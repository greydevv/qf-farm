const makeShopLink = (name, printNum) => {
    const mailToObj = {
        subject: `${name}: Purchase`,
        body: encodeURIComponent(`I'm interested in purchasing the ${name} print #${printNum}! Please let me know how to proceed with payment.\n\n\nName: \nPhone: `)
    }
    return `mailto:quillfeatherfarm@gmail.com?subject=${mailToObj.subject}&body=${mailToObj.body}`
}

const makeMerchLink = (name) => {
    const mailToObj = {
        subject: `${name}: Purchase`,
        body: encodeURIComponent(`I'm interested in purchasing the ${name}! Please let me know how to proceed with payment.\n\n\nSize: \nName: \nPhone: `)
    }
    return `mailto:quillfeatherfarm@gmail.com?subject=${mailToObj.subject}&body=${mailToObj.body}`
}

export const shopPackages = {
    artwork: {
        packages: [
            {
                title: 'PREENING MALLARD',
                desc: '"Preening Mallard" print #6/25 | framed | dimensions: 24" w x 19" h | wormwood frame with double flat black matting.',
                price: 150,
                disclaimer: 'Pricing does not include shipping • US shipping only',
                imgObj: {
                    alt: '',
                    url: 'shop/preening_mallard.jpg',
                },
                to: makeShopLink('Preening Mallard', 6),
            },
            {
                title: 'PREENING WOOD-DUCK',
                desc: '"Preening Wood Duck" print #2/25 | framed | dimensions: 23" w x 19" h | rustic gray barn wood frame with double matting white over black.',
                price: 150,
                disclaimer: 'Pricing does not include shipping • US shipping only',
                imgObj: {
                    alt: '',
                    url: 'shop/preening_wood_duck.jpg',
                },
                to: makeShopLink('Preening Wood-Duck', 2),
            },
            {
                title: 'CHUKAR',
                desc: '"Chukar" print #3/25 | framed | dimensions: 20" w x 25" h | rustic wood frame with double matting white over black.',
                price: 150,
                disclaimer: 'Pricing does not include shipping • US shipping only',
                imgObj: {
                    alt: '',
                    url: 'shop/chukar.jpg',
                },
                to: makeShopLink('Chukar', 3),
            },
        ]
    },
    merch: {
        packages: [
            {
                title: 'PULLOVER HOODIE',
                desc: 'Features our small logo on the front and the large logo on the back. Colored orange/safety-orange and made of cotton/polyester.',
                price: 40,
                disclaimer: 'Pricing does not include shipping • US shipping only',
                imgObj: {
                    alt: '',
                    url: 'shop/merch/hoodie.jpg',
                },
                to: makeMerchLink('Quill Feather Hoodie', 3),
            },
        ]
    },
    portraits: {
        packages: [
            {
                title: 'DOG PORTRAITS',
                desc: 'Commissioned portraits created by Cristin. Colored pencil, pen and ink, and acrylic on canvas. Please see examples below of previously commissioned portraits!',
                disclaimer: 'Pricing varies, starting at $200',
                price: 200,
                buyText: 'CONTACT',
                to: `mailto:quillfeatherfarm@gmail.com?subject=${encodeURIComponent("Portrait Commission")}&body=${encodeURIComponent("I'm interested in getting a commission done! Please send me some more information.\n\n\nName: \nPhone: ")}`
            },
        ],
        examples: [
            {
                desc: '"Knox" | Prismacolor pencils on 98# paper | 14" x 17"',
                imgObj: {
                    alt: '',
                    url: 'shop/examples/knox.jpg',
                }
            },
            {
                desc: '"Kimber" | Prismacolor pencils on 98# paper | 14" x 17"',
                imgObj: {
                    alt: '',
                    url: 'shop/examples/kimber.jpg',
                }
            },
            {
                desc: '"Libby" | acrylic on canvas | 16" x 20"',
                imgObj: {
                    alt: '',
                    url: 'shop/examples/libby.jpg',
                }
            },
            {
                desc: '"Sonny" | acrylic on canvas | 10" x 10"',
                imgObj: {
                    alt: '',
                    url: 'shop/examples/sonny.jpg',
                }
            },
            {
                desc: '"Ace in a T-shirt" | Black Liquitex ink on 98# paper | 14" x 17"',
                imgObj: {
                    alt: '',
                    url: 'shop/examples/ace_in_t_shirt.jpg',
                }
            },
            {
                desc: '"Patches" | Black Liquitex ink on 98# paper | 14" x 17"',
                imgObj: {
                    alt: '',
                    url: 'shop/examples/patches.jpg',
                }
            },
            {
                desc: '"Bear" | Black Liquitex ink on 98# paper | 14" x 17"',
                imgObj: {
                    alt: '',
                    url: 'shop/examples/bear.jpg',
                }
            },
            {
                desc: '"Goose" | Black Liquitex ink on 98# paper | 14" x 17"',
                imgObj: {
                    alt: '',
                    url: 'shop/examples/goose.jpg',
                }
            },
            {
                desc: '"Rosie" | Black Liquitex ink on 98# paper | 14" x 17"',
                imgObj: {
                    alt: '',
                    url: 'shop/examples/rosie.jpg',
                }
            },
            {
                desc: '"Shadow" | Black Liquitex ink on 98# paper | 14" x 17"',
                imgObj: {
                    alt: '',
                    url: 'shop/examples/shadow.jpg',
                }
            },
            {
                desc: '"Maggie" | acrylic on canvas | 16" x 20"',
                imgObj: {
                    alt: '',
                    url: 'shop/examples/maggie.jpg',
                }
            },
            {
                desc: '"Jess" | Black Liquitex ink on 98# paper | 14" x 17"',
                imgObj: {
                    alt: 'dog portrait pen and ink',
                    url: 'shop/examples/jess.jpg',
                }
            },
        ],
    }
}

