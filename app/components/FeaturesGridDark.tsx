// components/FeaturesGridDark.tsx
'use client'

interface FeatureItem {
    icon: string
    title: string
    description: string
}

interface FeaturesGridProps {
    title?: string
    subtitle?: string
    features?: FeatureItem[]
}

export default function FeaturesGridDark({
                                             title = "Our Features",
                                             subtitle = "Discover what makes our platform unique",
                                             features = [
                                                 {
                                                     icon: "⚡",
                                                     title: "Fast Performance",
                                                     description: "Lightning fast loading times and smooth user experience"
                                                 },
                                                 {
                                                     icon: "🔒",
                                                     title: "Secure & Safe",
                                                     description: "Enterprise-grade security to protect your data and privacy"
                                                 },
                                                 {
                                                     icon: "🛠️",
                                                     title: "Easy to Use",
                                                     description: "Intuitive interface that requires no technical knowledge"
                                                 },
                                                 {
                                                     icon: "📈",
                                                     title: "Growth Tools",
                                                     description: "Built-in analytics and insights to help you grow"
                                                 }
                                             ]
                                         }: FeaturesGridProps) {
    return (
        <div className="relative bg-black pt-15 pt-35 md:pt-15 md:pb-35 overflow-x-visible overflow-y-hidden">

            {/* Контент */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Заголовок секции */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-300">
                        {subtitle}
                    </p>
                </div>

                {/* Сетка фич */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="text-center group cursor-pointer bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300"
                        >
                            {/* Иконка */}
                            <div className="w-16 h-16 mx-auto mb-6 bg-blue-500/20 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-200">
                <span className="text-2xl">
                  {feature.icon}
                </span>
                            </div>

                            {/* Заголовок */}
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {feature.title}
                            </h3>

                            {/* Описание */}
                            <p className="text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}