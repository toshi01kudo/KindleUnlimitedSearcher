// ==UserScript==
// @name         Kindle Unlimited Searcher
// @namespace    Kindle Unlimited Searcher
// @version      1.6
// @description  Create a link to search any kindle book selling with Kindle Unlimited.
// @author       Toshihito Kudo
// @include      https://www.amazon.co.jp*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // ID nav-search配下のnav-rightクラスの前（検索ボタンの前）にボタンを生成。
    $("#nav-search .nav-right").prepend(`<button id="KU_Sch_Btn" type="button">KU<br>Sch</button>`);
    // クリックすると検索窓に打ち込んだ内容を読み込んで、Kindle Unlimited 対象のもののみ検索する
    $("#KU_Sch_Btn").css({"background-color":"orange","font-size":"80%","color":"black"});
    $("#KU_Sch_Btn").click(function(){
        const preUrlStr = "https://www.amazon.co.jp/s?k=";
        const postUrlStr = "&i=digital-text&rh=n%3A2250738051%2Cp_n_feature_nineteen_browse-bin%3A3169286051&dc&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&qid=1606401522&rnid=3169285051&ref=sr_nr_p_n_feature_nineteen_browse-bin_1";
        //const SchStr = $("#twotabsearchtextbox").value;
        const SchStr = $("#twotabsearchtextbox").val();
        //const SchStr = $(".a-color-state.a-text-bold").textContent;
        //console.log(SchStr);
        const SchUrl = preUrlStr + SchStr + postUrlStr;
        //console.log(SchUrl);
        window.location.href = SchUrl;
    });

    //// 各種リンク先へ飛ぶボタンを生成
    // https://www.amazon.co.jp/gp/kindle/ku/ku_central?ref_=nav_AccountFlyout_ku
    // https://www.amazon.co.jp/hz/mycd/myx?ref_=nav_AccountFlyout_myk
    // https://read.amazon.co.jp/kp/notebook
    //$("#nav-tools").prepend(`<button id="KU_Central" type="button">KU<br>Central</button>`);
    //$("#KU_Central").after(`<button id="Kdl_MyBooks" type="button">My<br>Books</button>`);
    //$("#Kdl_MyBooks").after(`<button id="Kdl_HighLights" type="button">DogEar</button>`);
    $("#nav-tools").prepend(`<button id="Kdl_HighLights" type="button">DogEar</button>`);
    $("#Kdl_HighLights").before(`<ul class="flex-container"><li><button id="KU_Central" type="button">KU Central</button></li><li><button id="Kdl_MyBooks" type="button">My Books</button></li></ul>`);

    // ボタンのスタイルを指定
    $(".flex-container").css({"display":"flex","flex-direction":"column"});
    $("#KU_Central").css({"background-color":"navy","font-size":"80%","color":"white","width":"80px","padding":"3px"});
    $("#Kdl_MyBooks").css({"background-color":"navy","font-size":"80%","color":"white","width":"80px","padding":"3px"});
    $("#Kdl_HighLights").css({"background-color":"white","font-size":"100%","color":"turquoise","font-weight":"bold"});

    // ボタンのリンク先を指定（新しいタブで開く）
    $("#KU_Central").click(function(){
        //window.location.href = 'https://www.amazon.co.jp/gp/kindle/ku/ku_central?ref_=nav_AccountFlyout_ku';
        const url = 'https://www.amazon.co.jp/gp/kindle/ku/ku_central?ref_=nav_AccountFlyout_ku';
        window.open(url, '_blank');
    });
    $("#Kdl_MyBooks").click(function(){
        //window.location.href = 'https://www.amazon.co.jp/hz/mycd/myx?ref_=nav_AccountFlyout_myk';
        const url = 'https://www.amazon.co.jp/hz/mycd/myx?ref_=nav_AccountFlyout_myk';
        window.open(url, '_blank');
    });
    $("#Kdl_HighLights").click(function(){
        //window.location.href = 'https://read.amazon.co.jp/kp/notebook';
        const url = 'https://read.amazon.co.jp/kp/notebook';
        window.open(url, '_blank');
    });
})();
