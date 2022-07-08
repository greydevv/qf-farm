module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'qf-orange': '#f09155',
            'dark': '#312923',
            'dark-grey': '#656565',
            'grey': '#f7f7f7',
            'qf-light-brown': '#837568',
            'qf-dark-brown': '#231302',
            'qf-brown': '#351f08',
            'qf-white': '#f7f7f7',
            'qf-light-grey': '#dfdfdf',
            'qf-black': '#231302',
            'qf-grey': '#9e9e9e',
            'qf-blue': '#7CAECD',
        },
        fontFamily: {
            '1': ['Oswald', 'sans-serif'],
            '2': ['Roboto', 'sans-serif'],
        },
        screens: {
            'phone': '640px',
            'desktop': '1024px'
        },
        configViewer: {
        // ... configViewer Options
        },
        extend: {
            maxWidth: {
                '25': '1600px',
                'main': '1200px',
                'body': '800px',
                'screen': '100vw',
            },
        }
    }
}
