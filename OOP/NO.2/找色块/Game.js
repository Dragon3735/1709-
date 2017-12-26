//给找色块游戏 定义了统一的命名空间
window.findColor = window.findColor || {};

(function () {

    function Game(_superView) {

        this.time = 60;
        this.timer = null;
        var self = this;

        this.scoreView = document.createElement("span");
        this.scoreView.textContent = "0分";
        this.resultView = document.createElement("span");
        this.resultView.style.display = "none";
        this.resultView.style.cssText = "display: none;  width: 200px;  height: 30px;  background-color: #8f877d;  color: white;  position: absolute;  left: 50%;  top:50%;  margin: -15px 0 0 -100px;text-align: center;z-index:99;";
        _superView.appendChild(this.scoreView);
        _superView.appendChild(this.resultView);

        //启动游戏
        this.startGame = function () {
            var colorView = new findColor.ControlColorView(_superView,function () {
                self.scoreView.textContent = colorView.score+"分";
            });
            colorView.showColorView();

            this.timer = setInterval(function () {
                self.time--;
                var res = "";
                if (self.time<=0){
                    colorView.fail();
                    if (colorView.score<5){
                        res = "恭喜成为蝙蝠";
                    }else if (colorView.score>=5&&colorView<10){
                        res = "恭喜成为狗";
                    }else {
                        res = "恭喜成为色魔";
                    }
                    self.resultView.textContent = res;
                    self.resultView.style.display = "block";
                    setTimeout(function () {
                        self.resultView.style.display = "none";
                    },500);
                    colorView.score = 0;
                    clearInterval(self.timer);
                    self.timer = null;
                    self.time = 60;
                    alert("游戏失败");
                }
            },1*1000);

        }

    }

    //在 公开在window上面的 findColor对象上 定义一个属性（变量）
    //这个变量的值 是Game这个类
    findColor.Game = Game;
})();