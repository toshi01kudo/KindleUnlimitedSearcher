// ==UserScript==
// @name         Kindle Unlimited Searcher
// @namespace    Kindle Unlimited Searcher
// @version      0.3
// @description  Create a link to search any kindle book selling with Kindle Unlimited.
// @author       Toshihito Kudo
// @include      https://www.amazon.co.jp*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    //const SchStr = $("#twotabsearchtextbox").value;
    //const SchStr2 = $(".a-color-state.a-text-bold").textContent;
    //console.log(SchStr);
    //console.log(SchStr2);

    // クリックすると検索窓に打ち込んだ内容を読み込んで、Kindle Unlimited 対象のもののみ検索する
    $("#nav-search .nav-right").prepend(`<button id="KU_Sch_Btn" type="button">KU_Search</button>`);
    $("#KU_Sch_Btn").click(function(){
        const preUrlStr = "https://www.amazon.co.jp/s?k=";
        const postUrlStr = "&i=digital-text&rh=n%3A2250738051%2Cp_n_feature_nineteen_browse-bin%3A3169286051&dc&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&qid=1606401522&rnid=3169285051&ref=sr_nr_p_n_feature_nineteen_browse-bin_1";
        const SchStr = $("#twotabsearchtextbox").value;
        console.log(SchStr);
        const SchUrl = preUrlStr + SchStr + postUrlStr;
        console.log(SchUrl);
        window.location.href = SchUrl;
    })

    //console.log(SchUrl);
    //$(".nav-right").prepend(`<a herf="${SchUrl}">KU_Search</a>`);
})();
