function anim(duration) {
	let temp;
	return function(sel) {
			cancelAnimationFrame(temp);
			const start = performance.now();
			const from = window.pageYOffset || document.documentElement.scrollTop;
			const to = document.querySelector(sel).getBoundingClientRect().top;
			requestAnimationFrame(function step(timestamp) {
					let progress = (timestamp - start) / duration;
					1 <= progress && (progress = 1);
					window.scrollTo(0, from + to * progress | 0);
					1 > progress && (temp = requestAnimationFrame(step));
			})
	}
};
window.scrollMenu = anim(800);

window.addEventListener('scroll', function() {
	arrowTop.hidden = pageYOffset < 100;
});
