/* Visual effects: scroll reveal, card tilt, cursor glow, progress bar. Content stays visible if this fails. */
(function () {
	'use strict';
	var d = document, root = d.documentElement;
	var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var touch = window.matchMedia && window.matchMedia('(hover: none)').matches;

	// scroll progress bar
	var bar = d.createElement('div');
	bar.className = 'tm_progress';
	d.body.appendChild(bar);
	function prog() {
		var h = root.scrollHeight - window.innerHeight;
		bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, window.pageYOffset / h) : 0) + ')';
	}
	window.addEventListener('scroll', prog, { passive: true });
	prog();

	if (reduce) { return; }

	// scroll reveal
	var sel = '.tm_section .awilo_fn_title, .tm_case, .tm_edu li, .tm_skillgroup, .tm_panel, .tm_links';
	var els = d.querySelectorAll(sel);
	if ('IntersectionObserver' in window && els.length) {
		root.className += ' fx';
		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (en) {
				if (en.isIntersecting) { en.target.classList.add('tm_in'); io.unobserve(en.target); }
			});
		}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
		for (var i = 0; i < els.length; i++) {
			els[i].classList.add('tm_rv');
			els[i].style.transitionDelay = ((i % 3) * 90) + 'ms';
			io.observe(els[i]);
		}
		setTimeout(function () { // failsafe
			for (var j = 0; j < els.length; j++) { els[j].classList.add('tm_in'); }
		}, 6000);
	}

	if (touch) { return; }

	// card tilt + glow
	d.addEventListener('mousemove', function (e) {
		var c = e.target.closest ? e.target.closest('.tm_case') : null;
		if (!c) { return; }
		var r = c.getBoundingClientRect();
		var x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
		c.style.setProperty('--mx', (x * 100) + '%');
		c.style.setProperty('--my', (y * 100) + '%');
		c.style.transform = 'perspective(800px) rotateX(' + ((0.5 - y) * 6) + 'deg) rotateY(' + ((x - 0.5) * 8) + 'deg) translateY(-4px)';
	});
	d.addEventListener('mouseout', function (e) {
		var c = e.target.closest ? e.target.closest('.tm_case') : null;
		if (c && !c.contains(e.relatedTarget)) { c.style.transform = ''; }
	});

	// cursor glow
	var g = d.createElement('div');
	g.className = 'tm_glow';
	d.body.appendChild(g);
	var gx = 0, gy = 0, tx = 0, ty = 0;
	window.addEventListener('mousemove', function (e) { tx = e.clientX; ty = e.clientY; }, { passive: true });
	(function loop() {
		gx += (tx - gx) * 0.12; gy += (ty - gy) * 0.12;
		g.style.transform = 'translate(' + (gx - 200) + 'px,' + (gy - 200) + 'px)';
		requestAnimationFrame(loop);
	})();
})();
