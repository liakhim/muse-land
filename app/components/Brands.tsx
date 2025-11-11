// components/BrandsSectionMinimal.tsx
'use client'

import Image from "next/image";

interface Brand {
    id: number
    name: string
    logo: string
}

interface BrandsSectionProps {
    title?: string
    subtitle?: string
    brands?: Brand[]
}

export default function Brands({
                                                 title = "Our Partners",
                                                 subtitle = "Lorem ipsum dolor mercue lorem ipsum ",
                                                 brands = [
                                                     { id: 1, name: "TechCorp", logo: "/src/images/brands/1.svg" },
                                                     { id: 2, name: "InnovateLabs", logo: "/src/images/brands/2.svg" },
                                                     { id: 3, name: "Global Solutions", logo: "/src/images/brands/3.svg" },
                                                     { id: 4, name: "NextGen", logo: "/src/images/brands/4.svg" },
                                                     { id: 5, name: "Visionary Inc", logo: "/src/images/brands/5.svg" }
                                                 ]
                                             }: BrandsSectionProps) {
    return (
        <div className="bg-white py-12 md:py-16 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {title && (
                    <div className="text-center mb-12">
                        <h2 className="text-1xl md:text-2xl font-bold text-black">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-gray-600 mt-2">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}

                {/* Бренды в ряд */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {brands.map((brand) => (
                        <div
                            key={brand.id}
                            className="group cursor-pointer"
                        >
                            <div className="flex flex-col items-center">
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    width={147}
                                    height={48}
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}