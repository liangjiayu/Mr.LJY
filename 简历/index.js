var header = $("#header");
var $header_box = header.find(".header-box");
var $main = $(".main").eq(0);
var timer = null;
var nowtime = new Date();

$(".header-menu").eq(0).on("click",function (e) {
    $("#aside").addClass("aside-active");
});
$("#aside-close").on("click",function (e) {
    $("#aside").removeClass("aside-active");
});
$(function () {
    var day = nowtime.getDate();
    var month = nowtime.getMonth();
    $("#time-month").html(month+1);
    $("#time-day").html(day);
    $(window).on("scroll",function (e) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            if ($("body").scrollTop()<1) {
                $header_box.height(100);
                $main.css({"margin-top":100});
            }else {
                $header_box.height(45);
                $main.css({"margin-top":45});
            }
            console.log("123");
        },50);
    });
    $(".header-menu").eq(0).on("click",function (e) {
        $("#aside").addClass("aside-active");
    });
    $("#aside-close").on("click",function (e) {
        $("#aside").removeClass("aside-active");
    });
});
