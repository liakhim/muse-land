'use client'

interface HeroSectionProps {
    subtitle?: string
    titleWord1?: string
    titleWord2?: string
    titleWord3?: string
    description?: string
    buttonText?: string
}

export default function HeroSection({
                                        subtitle = "New approach",
                                        titleWord1 = "Grow",
                                        titleWord2 = "your business",
                                        titleWord3 = "online",
                                        description = "Use modern technologies to automate processes and increase profits",
                                        buttonText = "Start using"
                                    }: HeroSectionProps) {
    return (
        <div className="bg-white w-full">
            <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-center container max-w-7xl mx-auto " style={{ fontFamily: 'Sohne, sans-serif' }}>

                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">
                    {subtitle}
                </p>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                    <span className="text-gray-900">{titleWord1} {titleWord2}</span>{' '}
                    <span className="text-blue-600">{titleWord3}</span>
                </h1>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-xl mx-auto font-normal">
                    {description}
                </p>

                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg text-sm transition-colors duration-200">
                    {buttonText}
                </button>
            </div>
        </div>
    )
}