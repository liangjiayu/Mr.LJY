$(function () {
    var $audio = $("#music-src");
    var audioDOM = $audio[0];
    var lists = null; //存储专辑
    var display_list = false; //专辑显示状态
    var Lyric = null;
    var sid = null;

    // 下一首歌曲并设置对应的图片
    function nextSong(song) {
        var Song = song.song[0];
        console.log(Song);
        $audio.attr("src",Song.url);
        sid = Song.sid;
        $(".music-body-cover").attr("src",Song.picture);
        $(".music-title").html(Song.title);
        $(".music-singer").html(Song.artist);
        console.log(sid);
    }
    // 通过ajax获取随机歌曲
    function getSong() {
        $.ajax({
            url :"http://api.jirengu.com/fm/getSong.php",
            method:"GET",
            dataType: "json",
            channel:1
        }).done(function (song) {
            nextSong(song);
        });
    }
    // 通过ajax获取专辑
    function getList() {
        $.ajax({
            url :"http://api.jirengu.com/fm/getChannels.php",
            method :"GET",
            dataType: "json"
        }).done(function (list) {
            lists = list.channels;
            console.log(lists);
        });
    }
    function getLyric() {
        $.ajax({
            url :"http://api.jirengu.com/fm/getLyric.php",
            method :"GET",
            dataType: "json",
            data: {sid:120986689},
        }).done(function (lyric) {
            console.log(lyric);
        });
    }
    // 显示专辑
    function showList() {
        display_list = !display_list;
        if (display_list) {
            var music_list = $(".music-list").find("ul")[0];
            var tem = "";
            tem = lists.map(function (ele,index) {
                if (index >=8) {
                    return;
                }
                return "<li>"+lists[index].name+"</li>";
            }).join('');
            music_list.innerHTML = tem;
            $(".music-list").show();
        }else {
            $(".music-list").hide();
        }
    }
    // 停止歌曲函数
    function stopSong() {
        if (audioDOM.paused) {
            audioDOM.play();
            $(".music-stop").find("i").removeClass("icon-iconfontplay2").addClass("icon-iconfontstop");
            $("#music-img").addClass("img_move_active").removeClass("img_move_stop");
            $(".music-body-logo").removeClass("logo-stop");

        }else {
            audioDOM.pause();
            $(".music-stop").find("i").removeClass("icon-iconfontstop").addClass("icon-iconfontplay2");
            $("#music-img").addClass("img_move_stop").removeClass("img_move_active");
            $(".music-body-logo").addClass("logo-stop");
        }
    }
    // 初始化页面 绑定事件
    function init() {
        getSong();
        $("#next-song").on("click",getSong);
        $("#prev-song").on("click",getSong);
        $(".music-stop").on("click",stopSong);
        $(".music-menu").on("click",showList);
        getList();
    }
    init();
});
