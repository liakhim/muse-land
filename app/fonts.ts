import localFont from 'next/font/local'

export const sohne = localFont({
    src: [
        {
            path: '../public/fonts/test-sohne-font/sohne.otf',
            weight: '900',
            style: 'normal',
        },
        {
            // path: '../public/fonts/test-sohne-font/sohne_s.otf',
            path: '../public/fonts/test-sohne-font/sohne_400.otf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-sohne',
    display: 'swap',
})