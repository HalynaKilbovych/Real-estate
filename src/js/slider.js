import Swiper from 'swiper';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

import 'swiper/swiper.scss';
import 'swiper/modules/effect-coverflow/effect-coverflow.scss';

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 60,
    modules: [Navigation, Pagination],

    effect: 'coverflow', 

    coverflowEffect: { 
        rotate: 20,
      stretch: 50,
      slideShadow: true,
    }, 

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });