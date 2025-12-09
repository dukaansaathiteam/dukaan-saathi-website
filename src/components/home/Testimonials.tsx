"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Container } from "@/components/ui/Container";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Kumar",
        shop: "Laxmi General Store",
        image: "https://i.pravatar.cc/150?img=11",
        text: "Dukaan Saathi ne meri life aasan kar di. Ab hisaab kitaab ke liye alag se register nahi rakhna padta.",
        rating: 5,
    },
    {
        name: "Sunita Devi",
        shop: "Sunita Fashion Point",
        image: "https://i.pravatar.cc/150?img=5",
        text: "Best part ye hai ki ye Hindi mein bhi kaam karta hai. Mere staff ko sikhane mein koi dikkat nahi hui.",
        rating: 5,
    },
    {
        name: "Amit Patel",
        shop: "Patel Electronics",
        image: "https://i.pravatar.cc/150?img=3",
        text: "Inventory management features are excellent. I get low stock alerts instantly on WhatsApp.",
        rating: 4,
    },
    {
        name: "Vikram Singh",
        shop: "Singh Mobile Zone",
        image: "https://i.pravatar.cc/150?img=12",
        text: "Transactions are tracked automatically. I know exactly how much credit is pending.",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-slate-900 border-t border-white/5 overflow-hidden">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
                        Dukaan Owners Love Us
                    </h2>
                    <p className="text-slate-400">
                        Join 500+ happy shopkeepers growing their business.
                    </p>
                </div>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    pagination={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="w-full py-12"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i} className="max-w-[350px] md:max-w-[400px]">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative">
                                <Quote className="absolute top-6 right-6 text-white/10 rotate-180" size={48} />

                                <div className="flex gap-1 mb-6 text-yellow-500">
                                    {[...Array(5)].map((_, k) => (
                                        <Star key={k} size={18} fill={k < t.rating ? "currentColor" : "none"} className={k < t.rating ? "" : "text-gray-600"} />
                                    ))}
                                </div>

                                <p className="text-slate-300 text-lg mb-8 italic">"{t.text}"</p>

                                <div className="flex items-center gap-4">
                                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-[var(--color-secondary)]" />
                                    <div>
                                        <h4 className="text-white font-bold">{t.name}</h4>
                                        <p className="text-sm text-[var(--color-secondary)]">{t.shop}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
}
