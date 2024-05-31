import onReady from "./modules/onReady.js";
import initEditor from "./modules/initEditor.js";
import getCookie from "./modules/getCookie.js";
import setCookie from "./modules/setCookie.js";
import tourGuide from "./modules/tour.js";

onReady(() => {
  initEditor();

  if (!getCookie("tour_shown")){
    document.documentElement.style.overflow = "hidden";
    tourGuide.start();
    setCookie("tour_shown");
  }
});
