
function Carousel(left,right,item,control,autoplay) {
    this.left  = left;
    this.right = right;
    this.control = control;
    this.items = item;
    this.autoplay = autoplay;
    this.timer = null;
    this.current = 0; //记录当前图片
    this.init();
}
Carousel.prototype = {
    go : function (cur) {
        if (cur < 0) {
            cur = this.items.length-1;
        }
        if (cur > this.items.length-1) {
            cur = 0;
        }
        // 对cur范围判断
        this.current = cur;
        this.items.eq(cur).fadeIn("slow").siblings().fadeOut("slow");
        this.control.find("i").eq(cur).addClass("active").siblings().removeClass("active");
    },
    autoImg : function () {
        var self = this;
        this.timer = setInterval(function () {
            self.current++;
            self.go(self.current);
        },3000);
    },
    init : function () {
        var self = this;
        this.left.on("click",function () {
            self.current--;
            self.go(self.current);
        });
        this.right.on("click",function () {
            self.current++;
            self.go(self.current);
        });
        if (this.autoplay) {
            this.autoImg();
        }
        this.items.parents(".wrap").on("mouseenter",function () {
            clearInterval(self.timer);
        }).on("mouseleave",function () {
            self.autoImg();
        });
        this.control.on("mouseenter","i",function () {
            var current = $(this).index();
            self.go(current);
        });
    }
};

var carousel = new Carousel($("#left"),$("#right"),$(".item"),$("#control"),true);

// $.fn.pulgin = function (option) {
//     var current = 0;
//     function go(cur) {
//         var leftValue;
//         if (cur<0) {
//             cur = 7;
//         }
//         if (cur > option.item.length-1) {
//             cur = 0;
//         }
//         current = cur;
//         option.item.eq(cur).fadeIn("slow").siblings().fadeOut("slow");
//     }
//     function init() {
//         option.left.on("click",function () {
//             current--;
//             go(current);
//         });
//         option.right.on("click",function () {
//             current++;
//             go(current);
//         });
//     }
//     init();
// };
// $("#wrap").pulgin({
//     left : $("#left"),
//     right : $("#right"),
//     item : $(".item"),
//     control : $("#control")
// });
