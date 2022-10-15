module.exports = {
    content: [
        './node_modules/flowbite/**/*.js',
        './src/**/*.{html,js}'
    ],
    theme: {
        minHeight: {
            minard: '300px'
        },
        borderRadius: {
            'borderDown': '0px 0px 50px 50px',
            'default': '0.9rem',
            'full': '9999px'
        },
        fontFamily: {
           dynapuff: ['DynaPuff', 'cursive'], //from main.css
        },
        fontSize: {
            big: '3rem',
            title: '1.563rem',
            subtitle: '0.9rem',
            min: '0.4rem'
        },
        extend: {
            height:  {
                card: '300px'
            },
            colors: {
                'blueDark':  '#132A44',
                'blueDarkOpacity': '#132a4478',
                'blueLight': '#A6CEF7'
            }
        },
    },
    plugins: [
        require('flowbite/plugin'),
    ]
}