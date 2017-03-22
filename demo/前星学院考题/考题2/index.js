(function ($) {
    $.fn.addAnimation = function (animationName) {
        this.addClass("animated "+ animationName).one("animationend",function () {
            $(this).removeClass("animated "+ animationName);
        });
    };
})(jQuery);

$(function () {
    var $WIN = $(window);
    var btnTop = $("#btn-top");
    var timer = null;
    // var aside = $("#aside-box");
    // var selfBox = $("#self-box");
    // aside.addAnimation( "bounceInUp");
    // selfBox.addAnimation( "bounceInUp");
    $WIN.on("scroll",function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            var winTop = $WIN.scrollTop();
            if (winTop>0) {
                btnTop.fadeIn();
            }else {
                btnTop.fadeOut();
            }
            console.log(123);
        },100);
    });
    btnTop.on("click",function (e) {
        $("body,html").animate({
            scrollTop : 0
        },500);
    });
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 150,
        mobile: true,
        live: true
    });

    wow.init();
});
