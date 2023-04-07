import React, { useRef } from "react"

// Icons
import { CgArrowLongLeftL, CgArrowLongRightL } from "react-icons/cg"

// Image
import Image from "next/image";
import logo from "public/img/logo/logo.png"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Parallax, Mousewheel } from "swiper"
import "swiper/css";

export default function Home() {
  return (
    <div className="main-content">
      <div className="header">
        <Image
          src={logo}
          width={150}
          height="auto"
        />
      </div>
      <Swiper
        speed={2400}
        parallax={true}
        spaceBetween={18}
        mousewheel={{
          enable: true,
          sensitivity: 2.4
        }}
        grabCursor={true}
        loop={true}
        modules={[Parallax, Mousewheel]}
      >
        <SwiperSlide>
          <div className="slider__layer" data-swiper-parallax="35%" style={{ backgroundImage: `url("img/screen-1/layer-back.jpg")` }}></div>
          <div className="slider__layer" data-swiper-parallax="25%" style={{ backgroundImage: `url("img/screen-1/layer-middle.png")` }}></div>
          <canvas className="particles slider__layer" data-swiper-parallax="18%" data-color="#BE9164"></canvas>
          <div className="slider__layer" data-swiper-parallax="25%" style={{ backgroundImage: `url("img/screen-1/layer-front.png")` }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__layer" data-swiper-parallax="40%" style={{ backgroundImage: `url("img/screen-2/layer-back.jpg")` }}></div>
          <div className="slider__layer" data-swiper-parallax="34%" style={{ backgroundImage: `url("img/screen-2/layer-gera.png")` }}></div>
          <div className="slider__layer" data-swiper-parallax="30%" style={{ backgroundImage: `url("img/screen-2/layer-yen.png")` }}></div>
          <canvas className="particles slider__layer" data-swiper-parallax="18%" data-color="#BE9164"></canvas>
          <div className="slider__layer" data-swiper-parallax="14%" style={{ backgroundImage: `url("img/screen-2/layer-front.png")` }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__layer" data-swiper-parallax="48%" style={{ backgroundImage: `url("img/screen-3/layer-back.jpg")` }}></div>
          <div className="slider__layer" data-swiper-parallax="35%" style={{ backgroundImage: `url("img/screen-3/layer-middle.png")` }}></div>
          <div className="slider__layer" data-swiper-parallax="29%" style={{ backgroundImage: `url("img/screen-3/layer-ciri.png")` }}></div>
          <canvas className="particles slider__layer" data-swiper-parallax="18%" data-color="#BE9164"></canvas>
          <div className="slider__layer" data-swiper-parallax="25%" style={{ backgroundImage: `url("img/screen-3/layer-front.png")` }}></div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
