
var btn = $("#top");
var close = $("#close");
var side = $(".aside").eq(0);
var show = $("#show");
var scrollTimer = null;
btn.on("click",function (e) {
    $("body").animate({scrollTop:0},500);
});
close.on("click",function () {
    side.css({width:0,visibility:"hidden"});
    btn.css({width:0,visibility:"hidden"});
    show.css({width:40,visibility:"visible"});
    $(this).css({width:0,visibility:"hidden"});
});
show.on("click",function () {
    side.css({width:40,visibility:"visible"});
    btn.css({width:40,visibility:"visible"});
    close.css({width:40,visibility:"visible"});
    $(this).css({width:0,visibility:"hidden"});
});
$(window).on("scroll",function (e) {
    if (scrollTimer) {
        clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(function () {
        if ($("body").scrollTop()<100) {
            btn.css({"bottom":-100});
        }else {
            btn.css({"bottom":100});
        }
    },400);
});
