// 英雄 名字 技能、血量、等级、武器、朋友


function Hero(_name,_image,_skill,_blood,_lv,_wepon,_friend) {
    this.name = _name;
    this.ui = document.createElement("img");
    this.ui.src = _image;
    this.skill = _skill;
    this.blood = _blood;
    this.lv = _lv;
    this.wepon = _wepon;
    this.friend = _friend;
}
var xiaoMing = new Hero("小明","hero.png","用力砍",1000,21,"草帽套装",[]);
var xiaoMing2 = new Hero("小明","hero.png","用力砍",1000,21,"草帽套装",[]);
var xiaoMing3 = new Hero("小明","hero.png","用力砍",1000,21,"草帽套装",[]);

xiaoMing.ui.onclick = function () {
    console.log(xiaoMing.name);
};

document.body.appendChild(xiaoMing.ui);
document.body.appendChild(xiaoMing2.ui);
document.body.appendChild(xiaoMing3.ui);


// 通过构造函数的方式创建3个怪物和英雄
// 点击开始按钮  随机出现怪物 并介绍怪物的信息
//点击选择英雄 展示英雄的详细信息
