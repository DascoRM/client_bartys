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
            'default': '0.5rem',
            'full': '9999px'
        },
        fontFamily: {
           dynapuff: ['DynaPuff', 'cursive'], //from main.css
        },
        fontSize: {
            big: '3rem',
            title: '1.563rem',
            subtitle: '0.9rem',
            small: '0.7rem',
            min: '0.4rem'
        },
        extend: {
            height:  {
                card: '300px'
            },
            colors: {
                'blueDark':  '#132A44',
                'blueDarkOpacity': '#132a4478',
                'blueLight': '#3470B6',
                'grey': '#494E54',
                'background': '#F5F5F5'
            }
        },
    },
    plugins: [
        require('flowbite/plugin'),
    ]
}