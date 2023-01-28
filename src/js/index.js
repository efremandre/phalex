import { burger } from './modules/_burger.js';
import { pressUp } from "./modules/_pressUp.js";
import { pressDawn } from "./modules/_pressDawn.js";
import { initSlider } from "./modules/_initSlider.js";
// import { gallery } from "./modules/_gallery.js";
import {scrollHeader} from "./modules/_scrollHeader.js";
import {animationScroll} from "./modules/_animationScroll.js";

scrollHeader();
animationScroll();
burger();
pressUp();
pressDawn();
initSlider();
// gallery();