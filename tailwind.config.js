module.exports = {
    content: [
        "./src/**/*.js"
    ],
    theme: {
        colors: {
            'orange': '#f09155',
            'dark': '#312923',
            'dark-grey': '#656565',
            'grey': '#f7f7f7',
            'qf-brown': '#351f08',
            'qf-white': '#f7f7f7',
            'qf-black': '#231302',
            'qf-grey': '#9e9e9e',
        },
        fontFamily: {
            '1': ['Oswald', 'sans-serif'],
            '2': ['Roboto', 'sans-serif'],
        },
        screens: {
            'phone': {'max': '640px'},
            'desktop': {'max': '1024px'}
        },
        configViewer: {
        // ... configViewer Options
        },
        extend: {
            maxWidth: {
                '25': '1600px'
            },
        }
    }
}
