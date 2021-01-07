!(function scroll() {
	if (window.scrollX * 2 < document.documentElement.clientWidth && window.scrollY * 2 < document.documentElement.clientHeight) window.scrollTo(window.TopOrLastScrollExtension_lastX || 0, window.TopOrLastScrollExtension_lastY || 0);
	else {
		window.TopOrLastScrollExtension_lastX = window.scrollX;
		window.TopOrLastScrollExtension_lastY = window.scrollY;
		window.scrollTo(0, 0);
	}
}());
