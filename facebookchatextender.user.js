// ==UserScript==
// @name          Facebook Chat Extender
// @namespace     https://github.com/iHydra
// @version       0.0.1
// @description   Extends Facebook Chat's height and width for large screens.
// @updateURL     https://raw.githubusercontent.com/iHydra/facebookchatextender/master/facebookchatextender.meta.js
// @downloadURL   https://raw.githubusercontent.com/iHydra/facebookchatextender/master/facebookchatextender.user.js
// @include       https://facebook.com/*
// @include       https://www.facebook.com/*
// @include       http://facebook.com/*
// @include       http://www.facebook.com/*
// @author        iHydra
// @resource      CustomCSS https://github.com/iHydra/facebookchatextender/raw/master/stylesheet_0.0.1.css
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// @grant         GM_addStyle
// @grant         GM_getResourceText
// @run-at        document-start
// ==/UserScript==

var ChatCSS = GM_getResourceText ("CustomCSS");
GM_addStyle (ChatCSS);
