function installChromeNewsPlusExtension() {
	if (typeof chrome !== 'undefined') {
		if (chrome.webstore) {
			try {
				chrome.webstore.install("https://chrome.google.com/webstore/detail/oficodppamcmhimhmidmadfekfkgfgjc");
			} catch(e) {
				window.open("http://goo.gl/QLIOJr");
			}
		} else {
			window.open("http://goo.gl/QLIOJr");
		}
	} else {
		window.open("http://goo.gl/QLIOJr");
	}
}

function installSafariNewsPlusExtension() {
	document.location.href = "http://goo.gl/ie6grw";
}

function installChromeExtension() {
	if (typeof chrome !== 'undefined') {
		if (chrome.webstore) {
			try {
				chrome.webstore.install("https://chrome.google.com/webstore/detail/khejhnppabfeogdfookcjkbfkkeejcbj");
			} catch(e) {
				window.open("http://goo.gl/OiP0Bq");
			}
		} else {
			window.open("http://goo.gl/OiP0Bq");
		}
	} else {
		window.open("http://goo.gl/OiP0Bq");
	}
}

function installSafariExtension() {
	document.location.href = "http://goo.gl/axWyqE";
}

function installSafariToolbar() {
	document.location.href = "http://goo.gl/7KZo5N";
}