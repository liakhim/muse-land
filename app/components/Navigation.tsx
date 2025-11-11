// components/Navigation.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Burger from "@/app/components/Burger";

export default function Navigation() {
    const pathname = usePathname()

    const menuItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contacts' },
    ]

    return (
        <nav style={{position: 'fixed', width: '100%'}} className="bg-black z-20 text-white shadow-xl">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 container max-w-7xl">
                <div className="flex items-center justify-between h-16">

                    <Link
                        href="/"
                        className="text-2xl font-bold hover:text-blue-200 transition-colors">
                        YourBrand
                    </Link>

                    <div className="flex space-x-1 max-md:hidden">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                                    pathname === item.href
                                        ? 'bg-white text-blue-600 shadow-md'
                                        : 'hover:bg-white/20 hover:shadow-sm'
                                }`}>
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <button className="max-md:hidden bg-white text-blue-600 cursor-pointer px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg ">
                        <span>Get started</span>
                    </button>

                    <div className={'burger min-md:hidden'}>
                        <Burger/>
                    </div>
                </div>
            </div>
        </nav>
    )
}