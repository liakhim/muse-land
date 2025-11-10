import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'About | Muse Land',
    description: 'Узнайте больше о нашей компании и нашей миссии',

    openGraph: {
        title: 'О нашей компании | Мой Сайт',
        description: 'Узнайте больше о нашей компании и нашей миссии',
        url: 'https://mysite.com/about',
        images: [
            {
                url: '/og-about.jpg',
                width: 1200,
                height: 630,
                alt: 'О нашей компании',
            },
        ],
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'О нашей компании | Мой Сайт',
        description: 'Узнайте больше о нашей компании и нашей миссии',
        images: ['/og-about.jpg'],
    },
};
export default function About() {
    return (
        <div  style={{marginTop: '64px'}} className={'container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
            <div>
                <h1>(CONTACT) Lorem ipsum dolor sit amet, consectetur.</h1>
            </div>
        </div>
    );
}