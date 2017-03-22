function getRandomBox() {
    var nums = [];
    for (var i = 0; i < 10; i++) {
        var num = Math.ceil(Math.random() * 8);
        if (nums.indexOf(num) === -1) {
            nums.push(num);
        }
        if (nums.length === 3) break;
    }
    return nums;
}

function getRandomColor() {
    var colorrandom = [];
    var color = ["#FFC1C1", "#FFC125", "#FF3030", "#EEAEEE", "#CAFF70", "#C9C9C9", "#8B4789", "#71C671"];
    for (var i = 0; i < 10; i++) {
        var num = Math.ceil(Math.random() * 7);
        if (colorrandom.indexOf(color[num]) === -1) {
            colorrandom.push(color[num]);
        }
        if (colorrandom.length === 3) break;
    }
    return colorrandom;
}

function showRandom() {
    var three = getRandomBox();
    var threeColor = getRandomColor();
    for (var i = 0; i < boxs.length; i++) {
        boxs.eq(i).css("background-color", "#000");
    }
    for (i = 0; i < 3; i++) {
        boxs.eq(three[i]).css("background-color", threeColor[i]);
    }
}
var btn1 = $("#btn-1");
var btn2 = $("#btn-2");
var boxs = $(".box");
var timer = null;
btn1.on("click", function() {
    timer = setInterval(showRandom, 1000);
});
btn2.on("click", function() {
    clearInterval(timer);
    for (var i = 0; i < boxs.length; i++) {
        boxs.eq(i).css("background-color", "#000");
    }
});
