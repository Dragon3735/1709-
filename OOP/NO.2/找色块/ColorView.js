
//给找色块游戏 定义了统一的命名空间
window.findColor = window.findColor || {};

(function () {

    function ColorView (_width,_space,_bgColor,_opcity,callback) {

        var view = document.createElement("div");
        view.style.cssText = "width:"+_width+"px;height:"+_width+"px;background:"+_bgColor+";opacity:"+_opcity+";float:left;margin:"+_space+"px 0 0 "+_space+"px;border-radius:5%;";

        view.onclick = function () {
            callback(_opcity);
        };

        this.view = view;
    }

    findColor.ColorView = ColorView;
})();