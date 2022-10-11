module.exports = {
    content: ['./src/**/*.{html,js}'],
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
            title: '1.563rem',
            subtitle: '0.9rem'
        },
        extend: {
            height:  {
                card: '300px'
            },
            colors: {
                'blueDark':  '#132A44',
            }
        },
    }
}