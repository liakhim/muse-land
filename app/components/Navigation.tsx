// components/Navigation.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const pathname = usePathname()

    const menuItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Features' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contacts' },
    ]

    return (
        <nav style={{position: 'fixed', width: '100%'}} className="bg-gradient-to-r bg-dark-600 text-white shadow-xl">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 container max-w-7xl">
                <div className="flex items-center justify-between h-16">
                    {/* Логотип */}
                    <Link
                        href="/"
                        className="text-2xl font-bold hover:text-blue-200 transition-colors"
                    >
                        YourBrand
                    </Link>

                    {/* Меню */}
                    <div className="flex space-x-1">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                                    pathname === item.href
                                        ? 'bg-white text-blue-600 shadow-md'
                                        : 'hover:bg-white/20 hover:shadow-sm'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Кнопка CTA */}
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                        Начать
                    </button>
                </div>
            </div>
        </nav>
    )
}