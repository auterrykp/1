// ==UserScript==
// @name         Font.master.loader(user.script)
// @namespace    Font.master.loader(user.script)
// @version      0.2
// @description  Font.master.loader(user.script)
// @author       auterrykp
// @license      N/A
// @match        *://*/*
// @exclude      https://m.facebook.com/*
// @exclude      https://*.linkedin.com/*
// @exclude      https://github.*/*
// @grant        none
// @run-at       document-start
// @downloadURL  https://github.com/auterrykp/1/raw/main/font.master.loader.user.js
// @updateURL    https://github.com/auterrykp/1/raw/main/font.master.loader.user.js
// ==/UserScript==


const allowedDomains = [
'mingpao.com','am730.com.hk','nippon.com',
'shoppingdesign.com.tw','betterme-magazine.com','adaymag.com',
'tokyocheapo.com','harpersbazaar.com','vogue.com.tw','oasistrek.com',
'jobsdb.com', 'indeed.com','ctgoodjobs.hk','sc.com',
'bbc.com','nytimes.com','wikipedia.org','cips.org','www3.nhk.or.jp',
'500px.com','flickr.com','sony.com','apple.com'

];

  if (allowedDomains.some(domain => window.location.hostname.endsWith(domain))) {
    document.documentElement.classList.add('--serif-font');
  }

(function () {
  const style = document.createElement('style');
  style.textContent = `



/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Murecho:wght@300&family=Noto+Sans+HK:wght@300&family=Noto+Serif+HK:wght@400&display=swap');


/* Font Variables */

:root {
  --main-font: 'PingFangSCRegular.EN','PingFangSC-Light','Noto Sans HK','Murecho';
  --jp-font: 'Murecho';
  --alt-font: 'CathaySans_Lt','STXihei-Light','Noto Sans HK';
  --serif-font: 'New York','Noto Serif HK';
}


/* Apply font ONLY to content elements */

html * {
  font-family: var(--main-font) !important;
  letter-spacing: 0.025em !important;
  /* font-size-adjust: 0.52 !important; */
}


/* Japanese content override */

html[lang*="ja"] * {
  font-family: var(--jp-font) !important;
  letter-spacing: 0.025em !important;
  /* font-size-adjust: 0.52 !important; */
}


/* Specific sites serif font content override */

:is(html.--serif-font,
html[lang*="fr"],html[lang*="de"],html[lang="es"],
html[lang="it"],html[lang="pt"],html[lang="nl"],
html[lang="sv"],html[lang="no"],html[lang="da"],
html[lang="fi"],html[lang="pl"],html[lang="cs"],
html[lang="sk"],html[lang="sl"],html[lang="ro"],
html[lang="bg"],html[lang="hr"],html[lang="hu"],
html[lang="el"]) * {
  font-family: var(--serif-font) !important;
  letter-spacing: 0.025em !important;
  /* font-size-adjust: 0.52 !important; */
}


/* Preserve native icon fonts for common icon-like elements */
html :is(
  [class*="fa-"],  [class="fa"],  [class="fas"],
  [class="fal"],  [class="fab"],  [class="fad"],
  [class="far"],  [class="icon"],  [class*="icon-"],
  [class*="icon_"],  [class*="-icon"],  [class*="_icon"],
  [class*="vjs"],  [class*="glyph"],  [class*="material-icons"],
  [class*="material-symbols-outlined"],  .material-icons,
  .docon,
  .ji,
  .tb-ifont,
  .google-symbols,
  *::before,
  *::after
) {
  font-family:
    'Font Awesome 6 Free', 'Font Awesome 6 Brands', 'Font Awesome 5 Pro', 'Font Awesome 5 Free', 'FontAwesome',
    'ichiba-icon-font', 'Material Icons', 'Google Material Icons', 'Google Symbols', 'bootstrap-icons',
    'Material-Design-Iconic-Font', 'Flaticon', 'icons', 'Ionicons', 'global-iconfont',
    'icomoon', 'font-icons', 'Line Awesome Free', 'simple-line-icons', 'entypo',
    'HSBCIcon-Font', 'shared-icons','element-icons','nytcn-icon','octicons','Material Symbols Outlined','webflow-icons', sans-serif !important;
}



/* Font-Faces */
@font-face {
  font-family: 'PingFangSC-Light';
  src: url(https://github.com/auterrykp/1/raw/main/PingFangSC-Light.woff2) format('woff2');
}

@font-face {
  font-family: 'PingFangSCRegular.EN';
  src: url(https://github.com/auterrykp/1/raw/main/PingFangSCRegular.woff2) format('woff2');
}

@font-face {
  font-family: 'CathaySans_Lt';
  src: url(https://github.com/auterrykp/1/raw/main/CathaySans_Lt.woff2) format('woff2');
}

@font-face {
	font-family: 'Iowan－BT';
    src: url(https://github.com/auterrykp/1/raw/main/iowan.woff) format('woff');
    unicode-range: U+00-2B11,U+EBE7-FB02;
}

@font-face {
	font-family: 'GenSenMaruGothicTW-Light';
    src: url(https://rawcdn.githack.com/auterrykp/Fonts/425066cd1e3c20623619856b8b2810f204367e4c/GenSenMaruGothicTW-Light-07OCT21.woff2) format('woff2');
    unicode-range: U+2000-206F,U+2100-214F,U+2E80-2EFF,U+3000-303F,U+3400-4D8F,U+4E00-9FFF,U+F900-FAFF,U+FF00-FFEF;
}

@font-face {
	font-family: 'STXihei-Light';
    src: url(https://github.com/auterrykp/1/raw/main/STXihei-Light.woff2) format('woff2');
	unicode-range: U+3005-30FF,U+3105-32A3,U+2000-206F,U+2100-214F,U+2E80-2EFF,U+3000-303F,U+3400-4D8F,U+4E00-9FFF,U+F900-FAFF,U+FF00-FFEF;

}

@font-face {
	font-family: 'New York';
    src: url(https://github.com/auterrykp/1/raw/main/new-york-small_regular.woff2) format('woff2');
	unicode-range: U+3005-30FF,U+3105-32A3,U+2000-206F,U+2100-214F,U+2E80-2EFF,U+3000-303F,U+3400-4D8F,U+4E00-9FFF,U+F900-FAFF,U+FF00-FFEF;

}


/* master.css */


.page-article .border-primary,#postContent .entry-content h2,
p.break-words,.incontent p,dfn+div p,article.post-wrap .single-entry p,#postContent p[style].post-page .post-body-article .post-body-content p {


  max-width: 95% !important;
  width: 95% !important;
  margin-right: auto !important;
  margin-left: auto !important;
  box-sizing: border-box !important;
  text-align: justify!important;
  text-justify: inter-word !important
  color: #e4e6eb !important

}


.incontent h2, #bkg_wrapper h1 {
font-weight: bold !important;
color: #e4e6eb !important;

}

/*hko*/
.post .title,#postContent p:not(strong),#GeneralSituation_header,#GeneralSituation_content p,#forecastPeriod p,#forecastDesc p,#forecastContent p,#forecastPeriod,.area_weather_forecast>div:nth-child(2)>div:nth-child(1)>div .header,.area_weather_forecast>div:nth-child(2)>div:nth-child(1)>div:last-child,#fnd_general,.header.gs {
font-size: 1.1rem !important
}

/*oasis*/
html[xmlns="http://www.w3.org/1999/xhtml"],[lang="zh-Hant"] {
  max-width: 98% !important;
  margin-right: auto !important;
  margin-left: auto !important;
  box-sizing: border-box !important;
}

/*hk01,mingpao,am730*/
.incontent p,
dfn+div p,
p.break-words,
.page-article .border-primary {
  font-size: 19px !important
}

/*Hide elements*/

/* Grouped IDs */
#AD-970x250-AD1,
#abtest_banner_li,
#ad-fullscreen,
#ad-lite-recommend-wrap,
#ad-overlay,
#ad_banner_pos1,
#ad_unit,
#adsDefinitions,
#afscontainer1,
#banner-close-monkey,
#banner-exit,
#branch-banner-iframe,
#contentSponsorshipAd,
#cto_banner_content,
#google-center-div,
#google_ads_frame1,
#google_ads_iframe,
#google_center_div,
#google_image_div,
#gwd-ad,
#mobile_banner_native_1,
#nativead_0,
#pixad891d,
#post_under_ads,
#sda-LREC2,
#sda-WFPAD,
#topInAppNotificationBanner,
#zi_ad_article_below_title,
#footerBanner,
#footerPromo,
.AdContainer-sc-8mk8fx-0,
.RichSmartAppBanner,
._popIn_recommend_container,
.ad-box,
.ad-flyingcarpet1-placeholder,
.ad-frame-fix,
.ad-tip,
.ad300,
.adContainer,
.adWrap,
.ad_google_LREC,
.adncon,
.adnol,
.ads-parallax-fixed,
.adsbyfalcon,
.adsbygoogle,
.advert__holder,
.banner,
.bnextmeida-banner,
.footerBanner,
.footerPromo,
.googleAds-frame,
.google_ads_iframes,
.gpt_ads_nobg,
.gpt_ads_title,
.header-ad,
.herald-ad,
.img_ad,
.inread-ad-container,
.kiwi-ad-sticky-wrapper,
.kiwi-ad-wrapper-ypa-300x250,
.mpads,
.native_ad,
.new_ad,
.pixad2199d,
.share-btns,
.share-widget,
.shareSocalBtn,
.share_btn,
.smart-banner-container,
.smartbanner,
.sp_foreign_banner,
.stick-share,
.subscribe-bar-container,
.subscribe-cover,
.tmb_tn_ad_content,
.tm-floating-banner__contents,
.top-promo,
.zucks-widget-container,
.incontent .ssm,
.placeholder-ad,
.mt-4,
.ANDBEYOND-inread,
.teads-inread,
.infogram-embed,
.bg-light-n2,
#teads0,
.fly123,
.cmp-lcs-stack,
#posNM,
.posNM,
[id*="adbox--page_auto_ad"]

 {

    display: none !important;
    height: 0px !important;

}


  `;
  document.head.appendChild(style);
}());
