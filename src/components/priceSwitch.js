const priceSwitch = () => {
    [].forEach.call(document.querySelectorAll(".calculator__filling"), function (form) {
        form.addEventListener("change", function () {
            try {
                let kit = form
                    .querySelectorAll("input[data-price]:checked");
                const priceNew = form.querySelector(".price-new");
                let numberFrom = Number(
                    typeof priceNew.dataset.from === "undefined" ? 0 : priceNew.dataset.from
                );
                let numberTo = 0;
                const list = form.querySelector(".calculator__list")
                list.innerHTML = '';
                kit.forEach(element => {
                    const articleLi = document.createElement("li");
                    const price = element.getAttribute("data-price")
                    numberTo += Number(price.split(' ')[0])
                    const name = element.getAttribute("value")
                    articleLi.innerHTML = `<span>${name}</span> <span>${price}</span>`;
                    list.append(articleLi);
                });
                const time = {
                    start: performance.now(),
                    duration: 1000,
                };
                const tick = function (now) {
                    const progress = Math.min((now - time.start) / time.duration, 1);
                    const easing = Math.pow(progress - 1, 5) + 1;
                    const value = numberFrom + (numberTo - numberFrom) * easing;
                    priceNew.textContent = value.toFixed();
                    if (progress < 1) {
                        requestAnimationFrame(tick);
                    } else {
                        priceNew.dataset.from = numberTo.toFixed();
                    }
                };
                requestAnimationFrame(tick);
            } catch (e) {
                console.error(e);
            }
        });
        form.dispatchEvent(new Event("change"));
    });
};

export default priceSwitch;
