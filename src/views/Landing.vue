<template>
    <div :class="$style.container">
        <div :class="$style.imageSlide">
            <swiper :loop="true" :slidesPerView="1"  ref="swiper"
                :spaceBetween="0" :modules="modules" :effect="'fade'"
                :autoplay="{
                    delay: 5000,
                    disableOnInteraction: false,
                }">
                <swiper-slide v-for="(item, index) in list" :key="index + 'imageSlide'" :class="$style.slide">
                    <div :class="$style.contents">
                        <img :class="[$style.image, $style.zoomed]" 
                            :src="getImagePath(index)" />
                        <div :class="$style.text">
                            <span :class="$style.bar">-</span>
                            <span :class="$style.title">{{ item.title + ' ' + item.title2 }}</span>
                            <span :class="$style.detail">{{ item.detail }}</span>
                            <span :class="$style.detail">{{ (item.detail2 ?? '') + ' ' + (item.detail3 ?? '') }}</span>
                        </div>

                        <div :class="$style.mobileText">
                            <span :class="$style.bar">-</span>
                            <span :class="$style.title">{{ item.title }}</span>
                            <span :class="[$style.title, $style.margin]">{{ item.title2 }}</span>
                            <span :class="$style.detail">{{ item.detail }}</span>
                            <span :class="$style.detail">{{ item.detail2 ?? ''}}</span>
                            <span :class="$style.detail">{{ item.detail3 ?? ''}}</span>
                        </div>

                        <div :class="$style.copyright">
                            <span>Copyright © The Swing Golf Co., Inc.</span>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;700&family=Noto+Sans+KR:wght@700&display=swap');
</style>

<style lang="scss" module scoped>
@import "@/assets/scss/utils.scss";

.container {
    min-width: 1200px;
    width: 100%;

    overflow: hidden;

    @include mobile {
        min-width: initial;
    }

    > .imageSlide {
        width: 100%;
        height: 100%;
        .slide {
            width: 100%;
            height: 100%;

            > .contents {
                position: relative;

                > .image {
                    width: 100%;
                    height: 100vh;
                    
                    object-fit: cover;

                    animation: zoomAnimation 10s infinite
                }

                > span {
                    display: block;
                }

                > .text {
                    width: 100%;
                    text-align: center;

                    position: absolute;
                    top: 45%;
                    left: 50%;
                    transform: translate(-50%, -50%);

                    color: white;

                    @include mobile {
                        display: none;
                    }

                    > span {
                        display: block;
                    }

                    > .bar {
                        width: 100%;

                        font-family: 'Montserrat';
                        font-size: 100px;
                        font-weight: lighter;
                    }

                    > .title {
                        font-family: 'Montserrat';
                        font-size: 100px;
                        font-weight: bold;

                        text-shadow: 2px 2px 10px #5b5b5b;

                        animation: slideUp 1s ease-in-out 1;
                    }

                    > .detail {
                        font-family: 'Noto+Sans+KR';
                        font-size: 50px;

                        text-shadow: 2px 2px 10px #5b5b5b;
                        animation: slideUp 1s ease-in-out 1;
                    }
                }

                > .mobileText {
                    width: 100%;

                    display: none;
                    text-align: center;

                    padding: 0px 20px 0px 20px;

                    position: absolute;
                    top: 45%;
                    left: 50%;
                    transform: translate(-50%, -50%);

                    color: white;

                    @include mobile {
                        display: initial;
                    }

                    > span {
                        display: block;
                    }

                    > .bar {
                        width: 100%;

                        font-family: 'Montserrat';
                        font-size: 5em;
                        font-weight: lighter;
                    }

                    > .title {
                        font-family: 'Montserrat';
                        font-weight: bold;
                        font-size: 2.8em;

                        text-shadow: 2px 2px 10px #5b5b5b;

                        animation: slideUp 1s ease-in-out 1;
                    }

                    > .detail {
                        font-family: 'Noto+Sans+KR';
                        font-size: 1.4em;

                        text-shadow: 2px 2px 10px #5b5b5b;
                        animation: slideUp 1s ease-in-out 1;
                    }

                    > .margin {
                        margin-bottom: 30px;
                    }
                }

                > .copyright {
                    width: 100%;
                    text-align: center;

                    font-size: 20px;

                    position: absolute;
                    bottom: 60px;
                    left: 50%;
                    transform: translate(-50%, -50%);

                    color: white;

                    @include mobile {
                        font-size: 15px;
                    }
                    > span {
                        font-family: 'Montserrat';

                        opacity: 0.7;
                    }
                }
            }	
        }	
    }
}

.zoomed {
    animation: zoomAnimation 10s infinite
}

@keyframes zoomAnimation {
    0%, 100% {
        transform: scale(1)
    }
    50% {
        transform: scale(1.1)
    }
}


@keyframes slideUp {
    0% {
        transform: translateY(100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}


</style>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade } from 'swiper/modules'

import bg1 from '@/assets/images/bg1.jpg';
import bg2 from '@/assets/images/bg2.jpg';
import bg3 from '@/assets/images/bg3.jpg';

interface List {
    title: string,
    title2: string,
    detail: string,
    detail2?: string,
    detail3?: string
}

const modules = [ EffectFade, Autoplay ]
const list: List[] = [
    {
        title: 'We will Make it',
        title2: 'possible',
        detail: '우리는 앞선 미래가치를 만듭니다.'
    }, {
        title: 'Frontier',
        title2: 'of Future',
        detail: '혁신적인 안목과 빠른 실행력,',
        detail2: '탄탄한 기반을 통해',
        detail3: '진취적으로 도전하고 성장합니다.'
    }, {
        title: 'Future',
        title2: 'Thinking',
        detail: '가능성을 확장하고',
        detail2: '미래가치를 창출합니다.'
    },
]

const getImagePath = (index: number) => {
    switch (index) {
        case 0:
            return bg1
        case 1:
            return bg2
        case 2:
            return bg3
        default:
            return ''
    }
}

</script>

  