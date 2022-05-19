import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

// Import Swiper React components

// Import Swiper styles

// import required modules

export default function SwiperComponent({ heroImg, imgArray }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(undefined);

  const myLoader = ({ width = 500, quality = 50 }) => {
    return `${heroImg}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={20}
        navigation
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        loop
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
        draggable
      >
        <SwiperSlide>
          <div className='w-full h-full'>
            <Image
              src={heroImg}
              loader={myLoader}
              alt={'image of cabin'}
              width={500}
              height={220}
              layout={'responsive'}
            />
          </div>
        </SwiperSlide>
        {imgArray.map(({ id, imgUrl }) => {
          const arrayLoader = ({ width = 50, quality = 20 }) => {
            return `${imgUrl}?w=${width}&q=${quality || 75}`;
          };
          return (
            <SwiperSlide key={id}>
              <div className='w-full h-full'>
                <Image
                  src={imgUrl}
                  loader={arrayLoader}
                  alt={'image of cabin'}
                  width={500}
                  height={220}
                  layout={'responsive'}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={false}
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        loop={true}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='w-full h-full'>
            <Image
              src={heroImg}
              loader={myLoader}
              alt={'image of cabin'}
              width={500}
              height={220}
              layout={'responsive'}
            />
          </div>
        </SwiperSlide>
        {imgArray.map(({ id, imgUrl }) => {
          const arrayLoader = ({ width = 50, quality = 50 }) => {
            return `${imgUrl}?w=${width}&q=${quality || 75}`;
          };
          return (
            <SwiperSlide key={id}>
              <div className='w-full h-full'>
                <Image
                  src={imgUrl}
                  loader={arrayLoader}
                  alt={'image of cabin'}
                  width={500}
                  height={220}
                  layout={'responsive'}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}