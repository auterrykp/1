// ==UserScript==
// @name         Font.master.loader(user.script)
// @namespace    Font.master.loader(user.script)
// @version      0.87
// @description  Font.master.loader(user.script)
// @author       auterrykp
// @license      N/A
// @match        *://*/*
// @exclude      https://github.*/*
// @exclude      https://fonts.google.com/*
// @exclude      https://*highwaybus.co*/*
// @grant        none
// @run-at       document-start
// @downloadURL  https://github.com/auterrykp/1/raw/main/font.master.loader.user.js
// @updateURL    https://github.com/auterrykp/1/raw/main/font.master.loader.user.js
// ==/UserScript==


const allowedDomains = [
'mingpao.com','am730.com.hk','nippon.com',
'shoppingdesign.com.tw','betterme-magazine.com','adaymag.com',
'tokyocheapo.com','harpersbazaar.com','vogue.com.tw','oasistrek.com',
'jobsdb.com', 'indeed.com','ln.edu.hk',
'bbc.com','nytimes.com','wikipedia.org','cips.org','www3.nhk.or.jp','reuters.com','scmp.com',
'500px.com','flickr.com','flickr.net','sony.com','kef.com', 'dell.com'

];

  if (allowedDomains.some(domain => window.location.hostname.endsWith(domain))) {
    document.documentElement.classList.add('--serif-font');
  }

(function () {
  const style = document.createElement('style');
  style.textContent = `


/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;500;600&family=Noto+Sans+HK:wght@300&family=Noto+Serif+HK:wght@300;500;600&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap');

/* Font Variables */

:root {
  --main-font: '-apple-system', PingFang HK;
  --jp-font:  '-apple-system','IBM Plex Sans JP';
  --alt-font: 'CathaySans_Lt','PingFang HK','Noto Sans HK';
  --serif-font: 'Iowan', 'Hiragino Mincho ProN','Merriweather','Noto Serif HK';
  --icon-fonts: 'Font Awesome 6 Free', 'Font Awesome 6 Brands', 'Font Awesome 5 Pro', 'Font Awesome 5 Free', 'FontAwesome', 'ichiba-icon-font', 'Material Icons', 'Google Material Icons', 'Google Symbols', 'bootstrap-icons', 'Material-Design-Iconic-Font', 'Flaticon', 'icons', 'Ionicons', 'global-iconfont', 'icomoon', 'font-icons', 'Line Awesome Free', 'simple-line-icons', 'entypo', HSBCIconFont, 'HSBCIcon-Font', HSBC Icons, 'shared-icons', 'element-icons', 'nytcn-icon', 'octicons', 'Material Symbols Outlined', 'webflow-icons', 'SonyGwn-SystemIcons', 'Glyphicons Halflings', 'fidelity-icon-font', 'popular-symbols', 'lite-glyphs-outlined', 'lite-glyphs-filled', 'snaptu-symbols', 'Google Sans Flex', 'wico', 'Support MDL2 Assets', 'compass-icons-v1', 'Icons', 'header_icons', 'smarticon', 'cx-icons', 'micon', 'iconhangseng', 'Trip Geom', 'iconfont', 'rei', 'NextIcon',
  Ay-Web-Icons-Line,iconfont,hkbn-icon,rex-icon-font,popular-symbols,lite-glyphs-outlined,lite-glyphs-filled,snaptu-symbols,Genericons,
  licon,VideoJS,zozotown-icon,theme-icons,festival-walk,CnNextIcon,icon-mo,Fitbit Icons,fricon,AmebaNewSymbols,FluentSystemIcons,
  news24,tipi,Proxima Nova Regular,nine1,AMC Icons,ico,FabricMDL2Icons-20,FabricMDL2Icons,FabricMDL2Icons-6,mui-global-iconfont,flight-icon,
  themify,qobuz-web,ef-icons,Pluto Sans,sans-serif;
}


/* Apply font ONLY to content elements */

@media(pointer:fine) {

html * {
  font-family: var(--main-font) !important;
  /* letter-spacing: 0.025em !important; */
  /* font-size-adjust: 0.52 !important; */
}

}

@media(pointer:coarse) {

html * {
  font-family: var(--main-font) !important;
  /* letter-spacing: 0.025em !important; */
  /* font-size-adjust: 0.52 !important; */
}

}


/* Japanese content override */

html[lang*="ja"] * {
  font-family: var(--jp-font) !important;
 /* letter-spacing: 0.025em !important; */
  font-size-adjust: 0.55 !important
}


/* Specific sites serif font content override */

:is(html.--serif-font,
html[lang="en-us"],
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
  [class*="fa-"], [class="fa"], [class="fas"], [class="fal"], [class="fab"], [class="fad"], [class="far"],
  [class="icon"], [class*="icon-"], [class*="Icon"], [class*="icon_"], [class*="-icon"], [class*="_icon"], [class*="Chevron"], [class*="chevron"],
  [class*="vjs"], [class*="glyph"], [class*="material-icons"], [class*="material-symbols-outlined"],
  i, .material-icons, .docon, .ji, .tb-ifont, .google-symbols, .f3, #privacy-dashboard ::before,*::before, *::after
) {
  font-family: var(--icon-fonts) !important;
}


html :is(span:not([class*="title"], [class*="heading"]), div:not([class*="title"], [class*="heading"]),
p, td, ul, li, small, list, pre, time, select, main, u, code, blockquote, footer, address, br, input),
body.bookmark a {

  font-weight: 300 !important;

}

html :is(/*a:not([href="wxinfo/currwx/current.htm"]),*/th,h2,h3,h4,em) {
  font-weight: 400 !important;
}

html *[style*="font-weight:700"],
html *[style*="font-weight:600"],
b, strong,
h1#articleTitle,
h1[class*="head"], h1[id*="head"],
h4 span.xdj266r {
  font-weight: 500 !important
}


/* Japanese font override */
html[lang*="ja"] :is(b, strong),
.myyoyaku-list-default__rstname-target,
.rdheader-rstname a,
.rdheader-rstname span {
  font-weight: 500 !important;
}


/* Serif font override */
html.--serif-font :is(b, strong, h1),
.incontent article h2 {
  font-weight: 600 !important;
}


/* Font-Faces */

@font-face {
    font-family: 'STXihei-Light';
    src: url(https://rawcdn.githack.com/auterrykp/Fonts/392074a0afc9b741233f2597084eadcbfbdc7163/STXihei-Light.woff2) format('woff2');
    unicode-range:
    U+4E00-9FFF,
    U+3400-4DBF,
    U+20000-2A6DF,
    U+2A700-2B73F,
    U+2B740-2B81F,
    U+2B820-2CEAF,
    U+F900-FAFF;

}

/*@font-face {
    font-family: 'PingFangSC-Light';
    src: url(https://rawcdn.githack.com/auterrykp/Fonts/9ac3fde5673ecd0bdd630309832c1e216943a367/PingFangSC-Light.woff2) format('woff2');
    unicode-range:
    U+4E00-9FFF,
    U+3400-4DBF,
    U+20000-2A6DF,
    U+2A700-2B73F,
    U+2B740-2B81F,
    U+2B820-2CEAF,
    U+F900-FAFF;

}*/

@font-face {
    font-family: 'PingFangSCRegular.EN';
    src: url(https://rawcdn.githack.com/auterrykp/Fonts/8e9a7bf1a446333b8de3cbfec422046d4e7b8fbd/PingFangSCRegular.woff2) format('woff2');
    unicode-range: U+0000-00FF;
}

@font-face {
    font-family: 'CathaySans_Lt';
    src: url(https://rawcdn.githack.com/auterrykp/Fonts/e321a95fb49e932beb9afdb6b7870a75e99323a6/CathaySans_Lt.woff2) format('woff2');
    unicode-range: U+0000-00FF;
}

}

@font-face {
    font-family: 'New York';
    src: url(https://github.com/auterrykp/1/raw/main/new-york-small_regular.woff2) format('woff2');
    unicode-range: U+0000-00FF;

}



/* master.css */

.page-article .border-primary,#postContent .entry-content h2,
#__next p.break-words,.incontent article :where(p,h2),dfn+div p,article.post-wrap .single-entry p,
#postContent p[style].post-page .post-body-article .post-body-content p,
.entry-content p,
.section--insider__content div {


  max-width: 95% !important;
  width: 95% !important;
  margin-right: auto !important;
  margin-left: auto !important;
  box-sizing: border-box !important;
  text-align: justify!important;
  text-justify: inter-word !important;
  font-size: 20px !important

}


/*hko*/
.post .title,#postContent p:not(strong),#GeneralSituation_content p,
#forecastPeriod p,#forecastDesc p,#forecastContent p,#forecastPeriod,
.area_weather_forecast>div:nth-child(2)>div:nth-child(1)>div:last-child,#fnd_general,
.area_weather_forecast a {

font-size: 18px !important;
font-weight: 300 !important;
color: black !important

}

/*oasis*/
html[xmlns="http://www.w3.org/1999/xhtml"],[lang="zh-Hant"] {
  max-width: 98% !important;
  margin-right: auto !important;
  margin-left: auto !important;
  box-sizing: border-box !important;
}

/*Youtube caption*/

.html5-video-player .caption-visual-line .ytp-caption-segment:last-child[style] {

font-size: 32px !important;
font-weight: 300 !important;
background: rgba(8, 8, 8, 0) !important;
text-shadow: 2px 2px #000000 !important

}


/*mobile FB*/

@media(pointer:coarse) {

.xdj266r.x14z9mp  {
font-size: 22px !important
}

#app-body .native-text .a, #app-body div.m  {
font-size: 22px !important
}

}





/* Grouped IDs and Classes for Ad/Share/Promo Elements */
#AD-970x250-AD1, #abtest_banner_li, #ad-fullscreen, #ad-lite-recommend-wrap, #ad-overlay, #ad_banner_pos1, #ad_unit,
#adsDefinitions, #afscontainer1, #banner-close-monkey, #banner-exit, #branch-banner-iframe, #contentSponsorshipAd,
#cto_banner_content, #google-center-div, #google_ads_frame1, #google_ads_iframe, #google_center_div, #google_image_div,
#gwd-ad, #mobile_banner_native_1, #nativead_0, #pixad891d, #post_under_ads, #sda-LREC2, #sda-WFPAD,
#topInAppNotificationBanner, #zi_ad_article_below_title, #footerBanner, #footerPromo, #teads0, #posNM,
[id*="adbox--page_auto_ad"], .AdContainer-sc-8mk8fx-0, .RichSmartAppBanner, ._popIn_recommend_container, .ad-box,
.ad-flyingcarpet1-placeholder, .ad-frame-fix, .ad-tip, .ad300, .adContainer, .adWrap, .ad_google_LREC, .adncon,
.adnol, .ads-parallax-fixed, .adsbyfalcon, .adsbygoogle, .advert__holder, .banner, .bnextmeida-banner, .footerBanner,
.footerPromo, .googleAds-frame, .google_ads_iframes, .gpt_ads_nobg, .gpt_ads_title, .header-ad, .herald-ad, .img_ad,
.inread-ad-container, .kiwi-ad-sticky-wrapper, .kiwi-ad-wrapper-ypa-300x250, .mpads, .native_ad, .new_ad, .pixad2199d,
.share-btns, .share-widget, .shareSocalBtn, .share_btn, .smart-banner-container, .smartbanner, .sp_foreign_banner,
.stick-share, .subscribe-bar-container, .subscribe-cover, .tmb_tn_ad_content, .tm-floating-banner__contents,
.top-promo, .zucks-widget-container, .incontent .ssm, .placeholder-ad, #__next .app-wrapper .mt-4, .ANDBEYOND-inread, .teads-inread,
.infogram-embed, .bg-light-n2, .fly123, .cmp-lcs-stack, .posNM {

    display: none !important;
    height: 0px !important;

}

  `;
  document.head.appendChild(style);
}());
