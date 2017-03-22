
var btn = $(".click");
var go  = $("#go");
btn.on("click",function (index) {
    $(this).next("p").toggleClass("active");
});
var scrollTimer = null;
$(window).scroll(function () {
    if (scrollTimer) {
        clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(function () {
        if ($(this).scrollTop()<100) {
            go.css({"display":"none","animation":"2s oppacity_a"});
        }else {
            go.css({"display":"block","animation":"2s oppacity_a"});
        }
        console.log("123");
    },400);
});
go.on("click",function () {
    $("body").animate({scrollTop : 0 },500);
});
