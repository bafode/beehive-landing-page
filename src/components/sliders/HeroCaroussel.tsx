import React, { useState, FC } from 'react';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper/types';
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const slide_img = [
    "/images/slider1.png",
    "/images/slider2.png",
    "/images/slider3.png",
    "/images/slider1.png",
    "/images/slider2.png",
    "/images/slider3.png",
];

const HeroSlider: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(1);

    const normalizeIndex = (index: number, totalSlides: number): number => {
        return index >= totalSlides ? index % totalSlides : index;
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
            }}
        >
            <Swiper
                initialSlide={1}
                effect={"coverflow"}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 50,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                    scale: 0.85,
                }}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                style={{ width: '100%', height: '100%' }}
                onSlideChange={(swiper: SwiperClass) => setActiveIndex(swiper.realIndex)}
            >
                {slide_img.map((image, i) => (
                    <SwiperSlide key={i} style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
                        <img
                            src={image}
                            alt={`slide-${i}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                transition: 'transform 0.5s ease',
                                transform: activeIndex === normalizeIndex(i, slide_img.length) ? 'scale(1)' : 'scale(.9)',
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default HeroSlider;
