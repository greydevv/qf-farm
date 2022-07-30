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
                disclaimer: 'Pricing does not include shipping • US shipping only.',
                imgObj: {
                    alt: '',
                    url: 'shop/artwork/preening_mallard.jpg',
                },
                to: makeShopLink('Preening Mallard', 6),
            },
            {
                title: 'PREENING WOOD-DUCK',
                desc: '"Preening Wood Duck" print #2/25 | framed | dimensions: 23" w x 19" h | rustic gray barn wood frame with double matting white over black.',
                price: 150,
                disclaimer: 'Pricing does not include shipping • US shipping only.',
                imgObj: {
                    alt: '',
                    url: 'shop/artwork/preening_wood_duck.jpg',
                },
                to: makeShopLink('Preening Wood-Duck', 2),
            },
            {
                title: 'CHUKAR',
                desc: '"Chukar" print #3/25 | framed | dimensions: 20" w x 25" h | rustic wood frame with double matting white over black.',
                price: 150,
                disclaimer: 'Pricing does not include shipping • US shipping only.',
                imgObj: {
                    alt: '',
                    url: 'shop/artwork/chukar.jpg',
                },
                to: makeShopLink('Chukar', 3),
            },
        ]
    },
    merch: {
        packages: [
            {
                title: 'PULLOVER HOODIE',
                desc: 'Features our small logo on the front and the large logo on the back. Colored orange/safety-orange. Materials include cotton/polyester.',
                price: 40,
                disclaimer: 'Color may vary from photo. We are currently awaiting a bulk shipment, individual items may not be immediately available. Pricing does not include shipping • US shipping only.',
                imgObj: {
                    alt: '',
                    url: 'shop/merch/hoodie.jpg',
                },
                to: makeMerchLink('Quill Feather Hoodie'),
            },
            {
                title: 'SHORT-SLEEVE T-SHIRT',
                desc: 'Features our small logo on the front and the large logo on the back. This item has no front pocket. Colored orange/safety-orange. Materials include cotton/polyester.',
                price: 20,
                disclaimer: 'Color may vary from photo. We are currently awaiting a bulk shipment, individual items may not be immediately available. Pricing does not include shipping • US shipping only.',
                imgObj: {
                    alt: '',
                    url: 'shop/merch/t_shirt.jpg',
                },
                to: makeMerchLink('Short-Sleeve T-Shirt'),
            },
            {
                title: 'QUILL FEATHER T-SHIRT',
                desc: 'Color: "Gravel". This color is slightly darker than our "Silver" option. Materials include cotton/polyester.',
                price: 20,
                disclaimer: 'Color may vary from photo. Pricing does not include shipping • US shipping only.',
                imgObj: {
                    alt: '',
                    url: 'shop/merch/t_shirt_gravel.jpg',
                },
                to: makeMerchLink('Quill Feather T-Shirt: Gravel'),
            },
            {
                title: 'QUILL FEATHER T-SHIRT',
                desc: 'Color: "Silver". This color is slightly lighter than our "Gravel" option. Materials include cotton/polyester.',
                price: 20,
                disclaimer: 'Color may vary from photo. Pricing does not include shipping • US shipping only.',
                imgObj: {
                    alt: '',
                    url: 'shop/merch/t_shirt_silver.jpg',
                },
                to: makeMerchLink('Quill Feather T-Shirt: Silver'),
            },
            {
                title: 'QUILL FEATHER T-SHIRT',
                desc: 'Color: "Tan". Materials include cotton/polyester.',
                price: 20,
                disclaimer: 'Color may vary from photo. Pricing does not include shipping • US shipping only.',
                imgObj: {
                    alt: '',
                    url: 'shop/merch/t_shirt_tan.jpg',
                },
                to: makeMerchLink('Quill Feather T-Shirt: Tan'),
            },
            {
                title: 'QUILL FEATHER T-SHIRT',
                desc: 'Color: "Safety Orange". Materials include cotton/polyester.',
                price: 20,
                disclaimer: 'Color may vary from photo. Pricing does not include shipping • US shipping only.',
                imgObj: {
                    alt: '',
                    url: 'shop/merch/t_shirt_safety_orange.jpg',
                },
                to: makeMerchLink('Quill Feather T-Shirt: Safety Orange'),
            },
            {
                title: 'QUILL FEATHER T-SHIRT',
                desc: 'Color: "Carolina Blue". Materials include cotton/polyester.',
                price: 20,
                disclaimer: 'Color may vary from photo. Pricing does not include shipping • US shipping only.',
                imgObj: {
                    alt: '',
                    url: 'shop/merch/t_shirt_carolina_blue.jpg',
                },
                to: makeMerchLink('Quill Feather T-Shirt: Carolina Blue'),
            },
        ]
    },
    portraits: {
        packages: [
            {
                title: 'DOG PORTRAITS',
                desc: 'We’ve all had that special dog. Maybe it was your first dog, or best bud from childhood, or maybe it’s the one currently sitting by your side. Why not immortalize and honor them with a custom portrait? Cristin works in a variety of mediums such as acrylic paint, colored pencils, and her personal favorite, pen-and-ink. Contact us to find out more about getting an original portrait done.',
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
                    url: 'shop/portraits/examples/knox.jpg',
                }
            },
            {
                desc: '"Kimber" | Prismacolor pencils on 98# paper | 14" x 17"',
                imgObj: {
                    alt: '',
                    url: 'shop/portraits/examples/kimber.jpg',
                }
            },
            {
                desc: '"Libby" | acrylic on canvas | 16" x 20"',
                imgObj: {
                    alt: '',
                    url: 'shop/portraits/examples/libby.jpg',
                }
            },
            {
                desc: '"Sonny" | acrylic on canvas | 10" x 10"',
                imgObj: {
                    alt: '',
                    url: 'shop/portraits/examples/sonny.jpg',
                }
            },
            {
                desc: '"Ace in a T-shirt" | Black Liquitex ink on 98# paper | 14" x 17"',
                imgObj: {
                    alt: '',
                    url: 'shop/portraits/examples/ace_in_t_shirt.jpg',
                }
            },
            {
                desc: '"Patches" | Black Liquitex ink on 98# paper | 14" x 17"',
                imgObj: {
                    alt: '',
                    url: 'shop/portraits/examples/patches.jpg',
                }
            },
            {
                desc: '"Bear" | Black Liquitex ink on 98# paper | 14" x 17"',
                imgObj: {
                    alt: '',
                    url: 'shop/portraits/examples/bear.jpg',
                }
            },
            {
                desc: '"Goose" | Black Liquitex ink on 98# paper | 14" x 17"',
                imgObj: {
                    alt: '',
                    url: 'shop/portraits/examples/goose.jpg',
                }
            },
            {
                desc: '"Rosie" | Black Liquitex ink on 98# paper | 14" x 17"',
                imgObj: {
                    alt: '',
                    url: 'shop/portraits/examples/rosie.jpg',
                }
            },
            {
                desc: '"Shadow" | Black Liquitex ink on 98# paper | 14" x 17"',
                imgObj: {
                    alt: '',
                    url: 'shop/portraits/examples/shadow.jpg',
                }
            },
            {
                desc: '"Maggie" | acrylic on canvas | 16" x 20"',
                imgObj: {
                    alt: '',
                    url: 'shop/portraits/examples/maggie.jpg',
                }
            },
            {
                desc: '"Jess" | Black Liquitex ink on 98# paper | 14" x 17"',
                imgObj: {
                    alt: 'dog portrait pen and ink',
                    url: 'shop/portraits/examples/jess.jpg',
                }
            },
        ],
    }
}

