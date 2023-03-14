import Carousel from "bootstrap/js/src/carousel";

const bootstrapSlider = () => {
    const carouselsButtons = document.querySelectorAll("[data-bs-slide]");
    carouselsButtons.forEach((element) => {
        element.addEventListener("click", function () {
            const carousel = element.closest(".carousel");
            const classCarousel = new Carousel(carousel);
            const bsSlide = element.dataset.bsSlide;
            bsSlide == "prev" ? classCarousel.prev() : classCarousel.next();
        });
    });
};

export default bootstrapSlider;
