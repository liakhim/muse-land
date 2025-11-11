// components/TestimonialsSection.tsx
'use client'

interface Testimonial {
    id: number
    name: string
    role: string
    company: string
    content: string
    rating: number
}

interface TestimonialsSectionProps {
    title?: string
    subtitle?: string
    backgroundImage?: string
    testimonials?: Testimonial[]
}

export default function TestimonialsSection({
                                                title = "What Our Clients Say",
                                                subtitle = "Don't just take our word for it - hear from some of our amazing clients",
                                                backgroundImage = "/src/images/earth.png",
                                                testimonials = [
                                                    {
                                                        id: 1,
                                                        name: "Sarah Johnson",
                                                        role: "Marketing Director",
                                                        company: "TechCorp Inc.",
                                                        content: "This platform transformed our workflow. The efficiency gains we've experienced are remarkable. Our team collaboration has never been better!",
                                                        rating: 5
                                                    },
                                                    {
                                                        id: 2,
                                                        name: "Michael Chen",
                                                        role: "Product Manager",
                                                        company: "InnovateLabs",
                                                        content: "Outstanding service and incredible results. The attention to detail and customer support exceeded all our expectations.",
                                                        rating: 5
                                                    },
                                                    {
                                                        id: 3,
                                                        name: "Emily Rodriguez",
                                                        role: "CEO",
                                                        company: "StartUp Ventures",
                                                        content: "We saw immediate impact after implementation. The ROI was evident within the first quarter. Highly recommended!",
                                                        rating: 4
                                                    },
                                                    {
                                                        id: 4,
                                                        name: "David Kim",
                                                        role: "CTO",
                                                        company: "Digital Solutions",
                                                        content: "The technical expertise and innovative approach helped us solve complex challenges we've been facing for years.",
                                                        rating: 5
                                                    }
                                                ]
                                            }: TestimonialsSectionProps) {
    // Функция для отображения рейтинга звездами
    const renderStars = (rating: number) => {
        return (
            <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        className={`text-lg ${
                            index < rating ? 'text-yellow-400' : 'text-gray-600'
                        }`}
                    >
            ★
          </span>
                ))}
            </div>
        )
    }

    return (
        <div className="relative bg-black py-16 md:py-24">

            {/* PNG фон с абсолютным позиционированием */}
            <div style={{width: '1000px', height: '1000px', top: 0, right: 0, zIndex: 1, opacity: 0.4}} className="absolute">
                <div
                    className="bg-cover bg-center opacity-100"
                    style={{ backgroundImage: `url(${backgroundImage})`, width: '1000px',  height: '1000px', top: 0, right: 0 }}
                />
            </div>

            {/* Затемнение для лучшей читаемости */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Контент */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Левая часть - заголовок и описание */}
                    <div className="text-left">
                        <div className="max-w-lg">

                            {/* Подзаголовок */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                                    Testimonials
                                </p>
                            </div>

                            {/* Заголовок */}
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                <span className="text-white">{title}</span>
                            </h1>

                            {/* Описание */}
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                {subtitle}
                            </p>

                            {/* Статистика */}
                            <div className="grid grid-cols-2 gap-6 mt-12">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-2">98%</div>
                                    <div className="text-gray-400 text-sm">Client Satisfaction</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
                                    <div className="text-gray-400 text-sm">Average Rating</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Правая часть - отзывы */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 hover:bg-white/15 transition-all duration-300 group"
                            >
                                {/* Рейтинг */}
                                <div className="mb-4">
                                    {renderStars(testimonial.rating)}
                                </div>

                                {/* Текст отзыва */}
                                <p className="text-gray-200 text-sm leading-relaxed mb-4 italic">
                                    "{testimonial.content}"
                                </p>

                                {/* Информация о клиенте */}
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-gray-400 text-xs">
                                            {testimonial.role} at {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}