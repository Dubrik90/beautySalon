import Swiper, { Navigation, Pagination, EffectFade  } from 'swiper';
/*
Подробнее https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.masters__slider')) {
		new Swiper('.masters__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,
			// Dotts
			pagination: {
				el: '.body-pagin__pagination',
				clickable: true,
				type: 'fraction',
			},
			// Arrows
			navigation: {
				nextEl: '.body-pagin__right',
				prevEl: '.body-pagin__left',
			},
			
			breakpoints: {
				320: {
					slidesPerView: 1.3,
					spaceBetween: 10,
					autoHeight: true,
				},
				500: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			//	1268: {
				//	slidesPerView: 4,
				//	spaceBetween: 30,
				//},
			},
			
			on: {

			}
		});
	}
}

//слайдер отзывов
function initSliderComent() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.comments__slider')) {
		new Swiper('.comments__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination,EffectFade],
			
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,
			// Dotts
			pagination: {
				el: '.comments-pagin__pagination',
				clickable: true,
				type: 'fraction',
			},
			// Arrows
			navigation: {
				nextEl: '.comments-pagin__right',
				prevEl: '.comments-pagin__left',
			},
			/*
			breakpoints: {
				320: {
					slidesPerView: 1.3,
					spaceBetween: 10,
					autoHeight: true,
				},
				500: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			//	1268: {
				//	slidesPerView: 4,
				//	spaceBetween: 30,
				//},
			},
			*/
			
			on: {

			}
		});
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	initSliderComent();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});