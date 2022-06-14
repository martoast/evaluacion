import { gsap } from "gsap";

// Inject gsap's core for global use
export default (context, inject) => {
  inject("gsap", gsap);
};
