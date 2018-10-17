(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=768){cw++;}if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', 'images/logo-232-5.png');
$('.js-2').attr('src', 'images/nav1-93-8.png');
$('.js-3').attr('src', 'images/nav3-77-6.png');
$('.js-4').attr('src', 'images/nav2-77-6.png');
$('.js-5').attr('src', 'images/top-img-left-444-3.png');
$('.js-6').attr('src', 'images/top-img-right-169-3.png');
$('.js-7').attr('src', 'images/title-528-3.png');
$('.js-8').attr('src', 'images/con-t-960-4.jpg');
$('.js-9').attr('src', 'images/icon-1-27.png');
$('.js-10').attr('src', 'images/icon-2-21.png');
$('.js-11').attr('src', 'images/icon-3-23.png');
$('.js-12').attr('src', 'images/con-2-300.jpg');
$('.js-13').attr('src', 'images/con-3-300.jpg');
$('.js-14').attr('src', 'images/con-4-300.jpg');
$('.js-15').attr('src', 'images/con-5-300.jpg');
$('.js-16').attr('src', 'images/con-6-300.jpg');
$('.js-17').attr('src', 'images/con-7-300.jpg');}else if($(window).width()>=768){$('.js').attr('src', 'images/logo-183.png');
$('.js-2').attr('src', 'images/nav1-74.png');
$('.js-3').attr('src', 'images/nav3-62.png');
$('.js-4').attr('src', 'images/nav2-62.png');
$('.js-5').attr('src', 'images/top-img-left-355.png');
$('.js-6').attr('src', 'images/top-img-right-135.png');
$('.js-7').attr('src', 'images/title-422.png');
$('.js-8').attr('src', (dpi>1) ? 'images/con-t-1536.jpg' : 'images/con-t-768.jpg');
$('.js-9').attr('src', 'images/icon-1-22.png');
$('.js-10').attr('src', 'images/icon-2-17.png');
$('.js-11').attr('src', 'images/icon-3-19.png');
$('.js-12').attr('src', 'images/con-2-240.jpg');
$('.js-13').attr('src', 'images/con-3-240.jpg');
$('.js-14').attr('src', 'images/con-4-240.jpg');
$('.js-15').attr('src', 'images/con-5-240.jpg');
$('.js-16').attr('src', 'images/con-6-240.jpg');
$('.js-17').attr('src', 'images/con-7-240.jpg');}else{$('.js').attr('src', (dpi>1) ? 'images/logo-150.png' : 'images/logo-75.png');
$('.js-2').attr('src', (dpi>1) ? 'images/nav1-62.png' : 'images/nav1-31.png');
$('.js-3').attr('src', (dpi>1) ? 'images/nav3-50.png' : 'images/nav3-25.png');
$('.js-4').attr('src', (dpi>1) ? 'images/nav2-52.png' : 'images/nav2-26.png');
$('.js-5').attr('src', (dpi>1) ? 'images/top-img-left-296.png' : 'images/top-img-left-148.png');
$('.js-6').attr('src', (dpi>1) ? 'images/top-img-right-114.png' : 'images/top-img-right-57.png');
$('.js-7').attr('src', (dpi>1) ? 'images/title-352.png' : 'images/title-176.png');
$('.js-8').attr('src', (dpi>1) ? 'images/con-t-640.jpg' : 'images/con-t-320.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/icon-1-18.png' : 'images/icon-1-9.png');
$('.js-10').attr('src', (dpi>1) ? 'images/icon-2-14.png' : 'images/icon-2-7.png');
$('.js-11').attr('src', (dpi>1) ? 'images/icon-3-16.png' : 'images/icon-3-8.png');
$('.js-12').attr('src', (dpi>1) ? 'images/con-2-200.jpg' : 'images/con-2-100.jpg');
$('.js-13').attr('src', (dpi>1) ? 'images/con-3-200.jpg' : 'images/con-3-100.jpg');
$('.js-14').attr('src', (dpi>1) ? 'images/con-4-200.jpg' : 'images/con-4-100.jpg');
$('.js-15').attr('src', (dpi>1) ? 'images/con-5-200.jpg' : 'images/con-5-100.jpg');
$('.js-16').attr('src', (dpi>1) ? 'images/con-6-200.jpg' : 'images/con-6-100.jpg');
$('.js-17').attr('src', (dpi>1) ? 'images/con-7-200.jpg' : 'images/con-7-100.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});