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
        },
        fontFamily: {
            '1': ['Oswald', 'sans-serif'],
            '2': ['Roboto', 'sans-serif'],
        },
        
        configViewer: {
        // ... configViewer Options
        },
        extend: {
            maxWidth: {
                '25': '1600px'
            }
        }
    }
}
