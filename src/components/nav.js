const nav = () => {
    const body = document.querySelector("body"),
        navArea = body.querySelector(".nav"),
        backdrop = navArea.querySelector(".backdrop"),
        navWrapper = navArea.querySelector(".nav__wrapper"),
        navContent = navWrapper.querySelector(".nav__content"),
        navBurger = navContent.querySelector(".nav__burger"),
        navLogo = navWrapper.querySelector(".nav__logo"),
        nav = navContent.querySelector(".nav__links"),
        navLinks = nav.querySelectorAll(".nav__link"),
        observer = new IntersectionObserver(observerCallback);

    // burger

    navBurger.onclick = function () {
        [navBurger, backdrop, nav, body].forEach((item) => {
            item.classList.toggle("__opened");
        });
    };

    backdrop.onclick = closeAll;
    navLogo.onclick = closeAll;
    navLinks.forEach((element) => {
        element.onclick = closeAll;
    });

    // scroll

    function closeAll() {
        [navBurger, backdrop, nav, body].forEach((item) => {
            item.classList.remove("__opened");
        });
    }

    observer.observe(navArea);

    function observerCallback(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navWrapper.classList.remove("__scroll");
                navContent.classList.remove("__scroll");
                nav.classList.remove("__scroll");
            } else if (!entry.isIntersecting) {
                navWrapper.classList.add("__scroll");
                navContent.classList.add("__scroll");
                nav.classList.add("__scroll");
            }
        });
    }
};

export default nav;
