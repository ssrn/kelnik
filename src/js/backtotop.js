const backtotop = () => {
  const backtotopBtn = document.querySelector(".backtotop");
  const scrollEnough = window.innerHeight / 3;
  let isAnimationRunning = false;

  window.addEventListener("scroll", () => {
    if (!isAnimationRunning) {
      window.requestAnimationFrame(() => {
        handleScroll();
        isAnimationRunning = false;
      });

      isAnimationRunning = true;
    }
  });

  const handleScroll = () => {
    if (window.scrollY >= scrollEnough && !backtotopBtn.classList.contains("backtotop--processed")) {
      backtotopBtn.classList.add("backtotop--processed");
      backtotopBtn.addEventListener("click", scrollToTop);
    }
    if (window.scrollY < scrollEnough && backtotopBtn.classList.contains("backtotop--processed")) {
      backtotopBtn.classList.remove("backtotop--processed");
      backtotopBtn.removeEventListener("click", scrollToTop);
    }
  };

  const scrollToTop = (e) => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });

    e.target.classList.remove("backtotop--processed");
  }
};

export default backtotop;


