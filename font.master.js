// ==UserScript==
// @name         		Font.master
// @version             0.1
// @description  		Font.master
// @author      		TKA
// @license             N/A
// @match        		*://*/*
// @exclude     		https://*.oasistrek.com/*
// @exclude      		https://m.facebook.com/*
// @exclude      		https://github.com/*
// @grant        		none
// @run-at      		document-start
// @downloadURL	        https://auterrykp.github.io/username.github.io/font-master.js
// @updateURL	     	https://auterrykp.github.io/username.github.io/font-master.js
// ==/UserScript==

const allowedDomains = [
'mingpao.com','am730.com.hk', 'nippon.com',
'shoppingdesign.com.tw', 'betterme-magazine.com', 'adaymag.com',
'jobsdb.com', 'indeed.com', 'ctgoodjobs.hk',
'bbc.com', 'nytimes.com', 'wikipedia.org',
];

  if (allowedDomains.some(domain => window.location.hostname.endsWith(domain))) {
    document.documentElement.classList.add('--serif-font');
  }

(function() {
    const cssUrl = "https://auterrykp.github.io/username.github.io/font-master.css";
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssUrl;
    link.type = "text/css";
    document.documentElement.appendChild(link);
})();
