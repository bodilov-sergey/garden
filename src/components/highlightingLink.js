const highlightingLink = () => {
	const anchorBlocks = document.querySelectorAll(".anchor"),
		navLinks = document.querySelector(".nav__links").querySelectorAll(".nav__link"),
		observer = new IntersectionObserver(observerCallback, { rootMargin: "-49.9999% 0%" });

	anchorBlocks.forEach((element) => observer.observe(element));

	function observerCallback(entries) {
		entries.forEach((entry) => {
			navLinks.forEach(link => {
				if (entry.isIntersecting) {
					if (link.href.split('#')[1] == entry.target.id) {
						link.classList.add("c-main");
					} else {
						link.classList.remove("c-main");
					}
				} else if (!entry.isIntersecting) {
					if (link.href.split('#')[1] == entry.target.id) {
						link.classList.remove("c-main");
					}
				}
			});
		});
	}
};

export default highlightingLink;
