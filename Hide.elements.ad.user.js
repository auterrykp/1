// ==UserScript==
// @name         Hide.elements.ad
// @namespace    Hide.elements.ad
// @version      0.1.1
// @description  Hide.elements.ad
// @author       auterrykp
// @license      N/A
// @match        *://*/*
// @exclude      https://*.hkpl.gov.hk/*
// @exclude      https://m.facebook.com/*
// @grant        none
// @run-at       document-start
// @downloadURL  https://github.com/auterrykp/1/raw/main/Hide.elements.ad.user.js
// @updateURL    https://github.com/auterrykp/1/raw/main/Hide.elements.ad.user.js
// ==/UserScript==


(function () {
  const style = document.createElement('style');
  style.textContent = `



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
.top-promo, .zucks-widget-container, .incontent .ssm, .placeholder-ad, .mt-4, .ANDBEYOND-inread, .teads-inread,
.infogram-embed, .bg-light-n2, .fly123, .cmp-lcs-stack, .posNM, .lg\:order-3 {

    display: none !important;
    height: 0px !important;

}


  `;
  document.head.appendChild(style);
}());
