'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Index() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
      
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        <SwiperSlide className='py-[67px] px-[100px] w-[700px]'>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='h-[320px]' />
        </SwiperSlide>
        <SwiperSlide className='py-[67px] px-[100px] w-[700px]'>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" className='h-[320px]' />
        </SwiperSlide>
        <SwiperSlide className='py-[67px] px-[100px] w-[700px]'>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" className='h-[320px]'/>
        </SwiperSlide>
     
      </Swiper>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='h-[200px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" className='h-[200px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" className='h-[200px]' />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
