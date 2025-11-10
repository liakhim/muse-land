// components/Footer.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
    const pathname = usePathname()

    const menuItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About us' },
        { href: '/services', label: 'Features' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contacts' },
    ]

    const contacts = [
        {
            name: 'Telegram',
            href: 'https://t.me/yourusername',
            icon: '📱'
        },
        {
            name: 'Email',
            href: 'mailto:hello@yoursite.com',
            icon: '✉️'
        },
        {
            name: 'GitHub',
            href: 'https://github.com/yourusername',
            icon: '💻'
        },
    ]

    return (
        <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">

                    {/* Логотип - Справа */}
                    <div className="lg:order-3 lg:text-right">
                        <Link href="/" className="text-2xl font-bold hover:text-blue-300 transition-colors">
                            YourBrand
                        </Link>
                        <p className="text-gray-400 mt-2 text-sm">
                            Создаем цифровые решения
                        </p>
                    </div>

                    {/* Навигация - Центр */}
                    <div className="lg:order-2 lg:mx-auto">
                        <h3 className="font-semibold text-gray-300 mb-4">Pages</h3>
                        <nav className="flex flex-col space-y-2">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`hover:text-blue-300 transition-colors ${
                                        pathname === item.href ? 'text-blue-400 font-medium' : 'text-gray-400'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Контакты - Слева */}
                    <div className="lg:order-1">
                        <h3 className="font-semibold text-gray-300 mb-4">Contacts</h3>
                        <div className="flex flex-col space-y-3">
                            {contacts.map((contact) => (
                                <a
                                    key={contact.name}
                                    href={contact.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-300 transition-colors"
                                >
                                    <span className="text-lg">{contact.icon}</span>
                                    <span>{contact.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Нижняя часть */}
                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} YourBrand. Все права защищены.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                            Политика конфиденциальности
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                            Условия использования
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}