//给找色块游戏 定义了统一的命名空间
window.findColor = window.findColor || {};

//>5:蝙蝠
// 5-10：狗
//10>：色魔
(function () {

    /*
    * ControlColorView 创建游戏界面的类
    * parms：参数
    *   _superView:把游戏界面放到哪一个父容器上
    * */
    function ControlColorView(_superView,callback) {
        //分数的变量
        this.score = 0;

        this.gameViewContainer = document.createElement("div");
        this.gameViewContainer.className = "game_view_container";
        _superView.appendChild(this.gameViewContainer);

        // _width,_space,_bgColor,_opcity
        // var colorView = new findColor.ColorView(200,10,"red",1);
        // this.gameViewContainer.appendChild(colorView.view);

        //默认列数
        this.column = 2;

        this.showColorView = function () {

            //整个色块的宽度 600
            var allWidth = 600;
            //把色块 平分成几份 -> 为了得到一个 与宽度成比例的 固定间距
            var avgWidth = allWidth/this.column;

            //0.1:间隙 与 平均宽度的 比例 -> 可以自己随意调
            //得到 色块与色块的间距
            this.space = avgWidth*0.1;
            //计算 所有间距之和 -> 2*2 有3个间距，3*3有4个间距
            //总共有列数+1的间距
            var allSpaceNum = this.column+1;
            //总宽度-总间距 = 色块总共的宽度
            var allColorWidth = allWidth - this.space*allSpaceNum;
            //单个 一个色块的宽度 = 总共剩余的宽度/总共的列数
            this.width = allColorWidth/this.column;

            //R G B 0-255之间的 随机数字 组成的颜色
            this.color = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
            this.gameViewContainer.style.backgroundColor = "rgba("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+Math.random()+")";
            //随机出来 特殊色块的下标
            var index = parseInt(Math.random()*this.column*this.column);
            //可以通过 变量的方式  替代 this
            var self = this;

            //根据外面列数  创建色块的数量
            for (var i=0;i<this.column*this.column;i++){
                var opcity = i!==index?1:0.9;
                var colorView = new findColor.ColorView(this.width,this.space,this.color,opcity,function (num) {

                    //只要不在 类里面  this一般 都表示window
                    num===1?self.fail():self.success();
                });
                this.gameViewContainer.appendChild(colorView.view);
            }
        };

        this.success = function () {
            this.score++;
            callback();
            //列数自增
            this.column++;
            //清除 上一次游戏中的界面
            this.gameViewContainer.innerHTML = "";
            //把增加完 列数的界面 更新上去
            this.showColorView();
        };
        this.fail = function () {
            this.score = 0;
            callback();
            this.column = 2;
            //清除 上一次游戏中的界面
            this.gameViewContainer.innerHTML = "";
            //把增加完 列数的界面 更新上去
            this.showColorView();
        };
    }

    findColor.ControlColorView = ControlColorView;
})();







