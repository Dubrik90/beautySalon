// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";


const videoElParent = document.querySelector('.video');
const videoEl = videoElParent.querySelector('.video__item');

if (videoEl) {
	videoElParent.addEventListener("click", function () {
		if (videoEl.paused) {
			videoEl.play();
			videoElParent.classList.add('video-play');
		} else {
			videoEl.pause()
			videoElParent.classList.remove('video-play');
		}
	});
}
