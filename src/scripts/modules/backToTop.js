export default () => {
  const backToTopBtn = document.getElementById("back-to-top");

  backToTopBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });

  window.addEventListener("scroll", () => {
    const documentScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (documentScrollTop > screen.height / 4) {
      backToTopBtn.classList.remove("d-none");
    } else {
      backToTopBtn.classList.add("d-none");
    }
  });
};
