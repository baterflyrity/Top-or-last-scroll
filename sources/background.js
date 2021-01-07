function scroller(tab) {
	if (!tab) return;
	browser.tabs.executeScript(null, {
		file: 'scroll.js'
	});
}

browser.pageAction.onClicked.addListener(scroller);
