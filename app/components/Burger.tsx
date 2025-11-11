"use client";
import { useState } from 'react';
import Link from "next/link";

export default function HamburgerButton() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={handleClick}
                className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
                aria-label="Открыть меню"
            >
                <span
                    className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                        isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
                />
                <span
                    className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                <span
                    className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                        isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link
                        href="/"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200 border-b border-gray-100"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200 border-b border-gray-100"
                    >
                        About
                    </Link>

                    <Link
                        href="/blog"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200 border-b border-gray-100"
                    >
                        Blog
                    </Link>

                    <Link
                        href="/contacts"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200 border-b border-gray-100"
                    >
                        Contacts
                    </Link>

                    <div className="pt-2 px-3 mt-2 border-t border-gray-100">
                        <button
                            onClick={() => {
                                console.log('Кнопка нажата');
                                setIsOpen(false);
                            }}
                            className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-medium py-2 px-6 rounded-lg text-sm transition-colors"
                        >
                            Start using
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}