'use client'
import Image from 'next/image'
interface HeroSplitReversedProps {
    subtitle?: string
    titleWord1?: string
    titleWord2?: string
    titleWord3?: string
    description?: string
    buttonText?: string
    imageSrc?: string
    imageAlt?: string
}

export default function HeroSplitReversed({
                                              subtitle = "Product Introduction",
                                              titleWord1 = "Stay in",
                                              titleWord2 = "sync",
                                              titleWord3 = "Solutions",
                                              description = "Try industry-leading music software for free, pay it off over time and own it forever.",
                                              buttonText = "Get Started",
                                              imageSrc = "/src/images/right.png",
                                              imageAlt = "Image"
                                          }: HeroSplitReversedProps) {
    return (
        <div className="bg-white flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="text-left">
                        <div className="max-w-lg">

                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                                    {subtitle}
                                </p>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug">
                                <span className="text-gray-900">{titleWord1} {titleWord2}</span>{' '}
                                <span className="text-blue-600">{titleWord3}</span>
                            </h1>

                            <p className="text-gray-600 text-base leading-relaxed mb-8">
                                {description}
                            </p>

                            <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold py-2.5 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                {buttonText}
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full">
                            <div className="rounded-3xl shadow-2xl p-4">
                                <Image
                                  src={imageSrc}
                                  alt={imageAlt}
                                  width={712}
                                  height={440}
                                  className="rounded-2xl object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}