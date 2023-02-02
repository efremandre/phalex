import { burger } from './modules/_burger.js';
import { pressUp } from "./modules/_pressUp.js";
import { pressDawn } from "./modules/_pressDawn.js";
import { initSlider } from "./modules/_initSlider.js";
import {scrollHeader} from "./modules/_scrollHeader.js";
import {animationScroll} from "./modules/_animationScroll.js";
import { galleryModal } from "./modules/_gallery.js";
import { modalImg } from "./modules/_modalImg.js";

scrollHeader();
animationScroll();
burger();
pressUp();
pressDawn();
initSlider();
galleryModal();
modalImg();