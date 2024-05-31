export default (fn) => {
  const scrollToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", (ev) => {
    if (window.scrollY > 20){
        scrollToTopBtn.classList.remove("d-none");
    } else {
        scrollToTopBtn.classList.add("d-none");
    }
  });
};
