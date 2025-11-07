// app/about/page.tsx
import Link from "next/link";
import { Metadata } from 'next';
import Image from 'next/image';
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
        <div className={'flex'}>
            <div></div>
            <div className={'ml-auto'}>
                <Image
                    src="/src/images/1.png"
                    alt="Описание изображения"
                    width={1000}
                    height={700}
                />
            </div>
        </div>
    );
}