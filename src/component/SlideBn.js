import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const bnList = ["S/S 2024", "Pops of colour", "Spring texture"];

const SlideBn = () => {
  return (
    <Bn>
        <Swiper
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
            {
                bnList.map((slide, idx) => 
                    <SwiperSlide>
                        <img src={`/assets/main${idx + 1}.jpg`} alt={slide} />
                        <BnTitle $idx={idx}>{slide}</BnTitle>
                    </SwiperSlide>
                )
            }
        </Swiper>
    </Bn>
  )
}

export default SlideBn

const Bn = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin-bottom: 40px;
    cursor: pointer;
    
    img {
        width: 100%;
        height: auto;
    }

    .swiper-pagination-bullet {
        background: #ffffff !important;
    }
    .swiper-button-prev, .swiper-button-next {
        color: #ffffff !important;
    }
`;

const BnTitle = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: clamp(3rem, 4vw, 8rem);
    font-weight: 700;
    color: ${props => props.$idx === 1 ? "#fff" : "#222"};
    opacity: 0.8;
`;
