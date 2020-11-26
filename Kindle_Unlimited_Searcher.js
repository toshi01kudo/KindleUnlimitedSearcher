// ==UserScript==
// @name         Kindle Unlimited Searcher
// @namespace    Kindle Unlimited Searcher
// @version      0.1
// @description  try to take over the world!
// @author       Toshihito Kudo
// @include      https://www.amazon.co.jp*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    const preUrlStr = "https://www.amazon.co.jp/s?k=";
    const SchStr = $("#twotabsearchtextbox").value;
    const SchStr2 = $(".a-color-state.a-text-bold").textContent;
    const postUrlStr = "&i=digital-text&rh=n%3A2250738051%2Cp_n_feature_nineteen_browse-bin%3A3169286051&dc&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&qid=1606401522&rnid=3169285051&ref=sr_nr_p_n_feature_nineteen_browse-bin_1";
    console.log(SchStr);
    console.log(SchStr2);

    const SchUrl = preUrlStr + SchStr + postUrlStr;
    console.log(SchUrl);
    $(".nav-right").prepend(`<a herf="#">test</a>`);
})();
