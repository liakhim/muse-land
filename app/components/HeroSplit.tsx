'use client'
import Image from 'next/image'

interface HeroSplitProps {
    subtitle?: string
    titleWord1?: string
    titleWord2?: string
    titleWord3?: string
    description?: string
    buttonText?: string
    imageSrc?: string
    imageAlt?: string
}

export default function HeroSplitWithImage({
                                               subtitle = "Product Introduction",
                                               titleWord1 = "Create",
                                               titleWord2 = "Innovative",
                                               titleWord3 = "Solutions",
                                               description = "Our platform provides all the necessary tools for rapid business development",
                                               buttonText = "Get Started",
                                               imageSrc="/src/images/logos.png",
                                               imageAlt = "Product Image"
                                           }: HeroSplitProps) {
    return (
        <div className="bg-white flex items-center py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1">
                        <div className="relative w-full max-w-2xl mx-auto">
                            <div className="flex flex-col align-middle justify-center rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    width={480}
                                    height={480}
                                    className="object-cover m-auto"
                                    priority
                                />
                            </div>

                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-2xl -z-10"></div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-50 rounded-3xl -z-10"></div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 text-left">
                        <div className="max-w-md">

                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                                    {subtitle}
                                </p>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                <span className="text-gray-900">{titleWord1}</span>{' '}
                                <span className="text-gray-900">{titleWord2}</span>
                                <br />
                                <span className="text-blue-600">{titleWord3}</span>
                            </h1>

                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {description}
                            </p>

                            <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold py-3 px-10 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                {buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}