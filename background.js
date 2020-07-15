'use strict';

chrome.browserAction.onClicked.addListener(function(tab) {
	if (tab.url.indexOf('scholar.google.com')>0) {
		// change all links to journal websites to include the proxy from MSU
		chrome.tabs.executeScript({
			file: 'updateLinks.js'
		});
	} else {
		var url1 = tab.url.substr(0,tab.url.indexOf('/',8));
		var url2 = tab.url.substr(tab.url.indexOf('/',8));
		var url3 = url1.concat('.proxy2.cl.msu.edu',url2);
		chrome.tabs.update(tab.id,{'url': url3});
	}
});

