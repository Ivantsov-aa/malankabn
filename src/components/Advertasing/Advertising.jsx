import { Swiper, SwiperSlide } from "swiper/react";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { AdvertisingContainer, SwiperSlideStyled } from "./Advertising.style";
import { FlexWrap } from "../FlexWrap/FlexWrap";
import Button from "../Button/button";
import { useState, useRef } from "react";
import { Navigation, Pagination } from "swiper";
import { useEffect } from "react";
import { CallbackForm } from "../callback-form/callback-form";

const slides = ['/images/adv/adv-slide.png', '/images/adv/bg-image.png', '/images/adv/adv-slide.png', '/images/adv/adv-slide.png'];

export const Advertising = () => {
    const [currentSlideTitle, setCurrentSlideTitle] = useState(0);
    const [sliderPage, setSliderPage] = useState(1);
    const [positionZoom, setPositionZoom] = useState({ top: 0, left: 0 })

    const sliderPrevBtnRef = useRef();
    const sliderNextBtnRef = useRef();
    const sliderRef = useRef();

    const zoomTargetImage = (e) => {
        const { clientX, clientY } = e;
        setPositionZoom({ top: `${clientY - 300}px`, left: `${clientX - 550}px` });
        const size = (window.innerWidth - 240) / 4;
        const image = sliderRef.current.children[0].children[sliderPage - 1].children[0];

        const canvas = document.querySelector('#canvas');
        canvas.style.display = 'block';
        const ctx = canvas.getContext("2d");
        canvas.width = size;
        canvas.height = size;
        ctx.scale(4, 4);
        ctx.drawImage(image, (-clientX + 470) / 1.8, (-clientY + 270) / 1.5);
    }

    return (
        <AdvertisingContainer className="pb-128">
            <Breadcrumbs className='mb-32' currentPage='Реклама' />
            <h2>Реклама на зарядных станциях и в приложении Malanka New</h2>
            <FlexWrap className='pb-128' gap={128}>
                <FlexWrap className='slider-container' gap={64}>
                    <FlexWrap justify='center' align='center' className='slider-preview'>
                        <img src={slides[currentSlideTitle]} alt='malanka' />
                    </FlexWrap>
                    <Swiper
                        slidesPerView={2}
                        slidesPerGroup={1}
                        spaceBetween={64}
                        onSlideChange={e => setCurrentSlideTitle(e.activeIndex)}
                    >
                        {slides.map((item, i) => (
                            <SwiperSlideStyled
                                key={i}
                            >
                                <img src={item} alt='malanka' />
                            </SwiperSlideStyled>
                        ))}
                    </Swiper>
                </FlexWrap>
                <FlexWrap className='adv-title' direction='column' gap={32}>
                    <FlexWrap direction='column' gap={16}>
                        <h3>Вас обязательно заметят владельцы электромобилей Беларуси</h3>
                        <p className='regular-text'>
                            Рекламные баннеры в мобильном приложении крупнейшей сети зарядных станций Маланка. Экраны зарядных станций, лайтбоксы, а также LED-экран магазина без персонала. Целевая аудитория электромобилистов в Вашем распоряжении.
                        </p>
                    </FlexWrap>
                    <FlexWrap direction='column' gap={16}>
                        <h3>Веб-сайт Malanka и социальные сети</h3>
                        <p className='regular-text'>
                            Партнерские материалы и рекламные баннеры на нашем сайте, разделе новости, Telegram, Instagram Маланка.
                        </p>
                    </FlexWrap>
                    <Button>
                        Прайс-лист скачать
                    </Button>
                </FlexWrap>
            </FlexWrap>
            <FlexWrap className='pb-128'>
                <FlexWrap direction='column' className='pt-64' gap={32}>
                    <h3>Экраны зарядных станций</h3>
                    <p className='regular-text'>
                        Ваш рекламный баннер будет размещен на выбранных локациях, клиенты зарядной сети и прохожие обязательно заметят рекламное сообщение на ЖК-мониторе.
                    </p>
                </FlexWrap>
                <img src='/images/adv/example.png' alt='malanka' />
                <FlexWrap direction='column' className='pt-64' gap={32}>
                    <h4>А еще станцию можно оклеить в Ваш уникальный дизайн!</h4>
                    <img src='/images/adv/bn-bg.png' alt='malanka' />
                </FlexWrap>
            </FlexWrap>
            <FlexWrap className='news-page zoom-container pb-128' direction='column'>
                <h3 className='mb-8'>Супербыстрые зарядные комплексы</h3>
                <div className='mb-16 slider__title'>
                    <p>Лайтбоксы, led-экран, стела – электромобили и их владельцы в Вашем фокусе</p>
                    <div className='slider__control-panel'>
                        <p>{sliderPage} / {2}</p>
                        <div className='slider-btns'>
                            <button
                                className='slider-prev-btn'
                                ref={sliderPrevBtnRef}
                            >
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.8" d="M17.55 20.9733L10.277 13L17.55 5.02664L15.3365 2.59998L5.84999 13L15.3365 23.4L17.55 20.9733Z" fill="#7A7A95" />
                                </svg>
                            </button>
                            <button
                                className='slider-next-btn'
                                ref={sliderNextBtnRef}
                            >
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.8" d="M17.55 20.9733L10.277 13L17.55 5.02664L15.3365 2.59998L5.84999 13L15.3365 23.4L17.55 20.9733Z" fill="#7A7A95" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <Swiper
                    className='news-page__slider'
                    slidesPerView={1}
                    slidesPerGroup={1}
                    modules={[Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl: sliderPrevBtnRef.current,
                        nextEl: sliderNextBtnRef.current
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = sliderPrevBtnRef.current;
                        swiper.params.navigation.nextEl = sliderNextBtnRef.current;
                    }}
                    onSlideChange={e => setSliderPage(e.activeIndex + 1)}
                    ref={sliderRef}
                >
                    {['/images/main-1.png', '/images/main-2.png'].map((item, i) => (
                        <SwiperSlideStyled className='zoom' key={i}>
                            <img
                                src={item}
                                loading='lazy'
                                alt='slide-cover'
                                onMouseMove={zoomTargetImage}
                                onMouseLeave={() => {
                                    const canvas = document.querySelector('#canvas');
                                    canvas.style.display = 'none';
                                }}
                            />
                        </SwiperSlideStyled>
                    ))}
                </Swiper>
                <canvas id='canvas' style={{ ...positionZoom }}></canvas>
            </FlexWrap>
            <FlexWrap gap={128}>
                <h3>Заинтересовались или возникли вопросы?</h3>
                <CallbackForm />
            </FlexWrap>
        </AdvertisingContainer>
    )
}