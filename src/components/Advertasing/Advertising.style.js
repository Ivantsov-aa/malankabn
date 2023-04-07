import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const AdvertisingContainer = styled.main`
    max-width: 1720px;
    margin: 0 auto;

    >* {
        padding-left: 20px;
        padding-right: 20px;
    }

    h2 {
        margin: 32px 0;
    }

    .slider-container {
        max-width: 780px;

        .slider-preview {
            position: relative;
            width: 100%;
            max-width: 290px;
            background: url('/images/adv/slider-cover.png') no-repeat center;
            padding: 65px 17px;

            img {
                object-fit: cover;
                height: 100%;
                border-radius: 38px;
            }

            &::before {
                content: '';
                position: absolute;
                top: 73px;
                left: 50%;
                transform: translateX(-50%);
                width: 64px;
                height: 18px;
                background: url('/images/adv/camera.png') no-repeat center;
            }
        }

        .swiper {
            padding-top: 110px;
            width: 100%
        }
    }

    .adv-title {
        padding: 64px;
        max-width: 708px;
        width: 100%;
        background: url('/images/adv/bg-image.png') no-repeat center;
        color: #fff;

        button {
            margin-top: 16px;
        }
    }

    .news-page__slider {
        height: 784px;
        width: 100%;
    }

    .zoom-container {
        position: relative;
    }

    #canvas {
        display: none;
        position: absolute;
        z-index: 1000000;
        box-shadow: 0px 4px 47px rgba(0, 0, 0, 0.13);
        background: #fff;
        border-radius: 50%;
    }
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
    max-width: 187px;
    opacity: 0.5;
    border-radius: 20px;
    overflow: hidden;
    height: 410px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &.zoom {
        opacity: 1;
        max-width: 100%;
        position: relative;

        &, img {
            max-height: 764px;
            height: 100%;
        }

        img {
            object-fit: contain;
        }
    }
`;