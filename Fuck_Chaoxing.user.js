// ==UserScript==
// @name         超星学习通网页版强制打开作业考试等页面
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://mooc1.chaoxing.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chaoxing.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //let needInsert = $('.beatmapset-header__buttons').length == 1 && $('.beatmapset-header__buttons')[0].innerHTML.indexOf('/download"') && $('.btn-discussion-instert').length === 0;
    /*
    if (( document.documentElement.textContent || document.documentElement.innerText ).indexOf('体验新版') > -1){
        console.log('continue!');
    } else {
        console.log('no support for new page ;_;');
    }
    */
    let liLength = $('.navshow').find("li").length;
    if ( liLength < 9 ) {
        console.log("仅有 " + liLength.toString() + " 个元素，脚本将补全未显示的按钮。");

        let i_tz;
        for(i_tz = 0; i_tz <liLength; i_tz++) {
            if ($('.navshow').find("li")[i_tz].innerText == "通知") break;
        }
        let tzUrl = $('.navshow a:eq(' + i_tz.toString() + ')').attr('href');
        let zyUrl = 'https://mooc1.chaoxing.com' + tzUrl.replace("/schoolCourseInfo/getNotifyList?", "/work/getAllWork?");
        let ksUrl = 'https://mooc1.chaoxing.com' + tzUrl.replace("/schoolCourseInfo/getNotifyList?", "/exam/test?");
        let tjUrl = 'https://mooc1.chaoxing.com' + tzUrl.replace("/schoolCourseInfo/getNotifyList?", "/moocAnalysis/statistics-std?");
        let tlUrl = 'https://mooc1.chaoxing.com' + tzUrl.replace("/schoolCourseInfo/getNotifyList?", "/bbscircle/grouptopic?").replace("classId", "clazzId");
        console.log(zyUrl);

        let append_str = '<ul>';
        append_str += '<li><a mode="fuseMode" href="' + zyUrl + '" title="作业">作业</a></li>'
        append_str += '<li><a mode="fuseMode" href="' + ksUrl + '" title="考试">考试</a></li>'
        append_str += '<li><a mode="fuseMode" href="' + tjUrl + '" title="统计">统计</a></li>'
        append_str += '<li><a mode="fuseMode" href="' + tlUrl + '" title="讨论">讨论</a></li>'
        append_str += '</ul>';
        $('.navshow ul').before(append_str);
    } else {
        console.log('功能齐全，脚本将不会执行。');
    }
})();
