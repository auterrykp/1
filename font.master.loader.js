// ==UserScript==
// @name         		  Font.master.loader
// @version           0.1.2
// @description  		  Font.master.loader
// @author      		  TKA
// @license           N/A
// @match        		  *://*/*
// @exclude     	  	https://*.oasistrek.com/*
// @exclude      	  	https://m.facebook.com/*
// @exclude      	  	https://*.github.com/*
// @grant        	  	none
// @run-at      	  	document-start
// @downloadURL	      https://auterrykp.github.io/1/font.master.loader.js
// @updateURL	       	https://auterrykp.github.io/1/font.master.loader.js
// ==/UserScript==

const allowedDomains = [
'mingpao.com','am730.com.hk','nippon.com',
'shoppingdesign.com.tw','betterme-magazine.com','adaymag.com','tokyocheapo.com','harpersbazaar.com','vogue.com.tw',
'jobsdb.com', 'indeed.com','ctgoodjobs.hk',
'bbc.com','nytimes.com','wikipedia.org','cips.org',
'500px.com','flickr.com','sony.com'

];


  if (allowedDomains.some(domain => window.location.hostname.endsWith(domain))) {
    document.documentElement.classList.add('--serif-font');
  }

(function() {
    const cssUrl = "https://auterrykp.github.io/1/font-master.css";
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssUrl;
    link.type = "text/css";
    document.documentElement.appendChild(link);
})();
