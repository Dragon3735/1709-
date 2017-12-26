//
// //命名空间
// window.$ = window.$ || {};
//
// // window.$ = window.$?window.$:{};
//
// window.nav = window.nav || {};
//
// (function () {
//     var a = 20;
//
//     console.log($.xxx);
//
// })();
//
// (function () {
//     var a = 30;
//     $.xxx =22;
// })();

/*
* 怪物 名字 技能、血量、等级
* 英雄 名字 技能、血量、等级、武器、装备、朋友
* */

// var wa = {skill:{},blood:1000,lv:99};

// monsterName
// monsterSkill
//monsterBlood
//monsterLv

// var monsters = [];
// var monster = {monsterName:monsters[0].name,monsterSkill:monsters[0].skill};
// console.log(monster);
//


function createMonster(info) {
    var monster = {monsterName:info.name,monsterSkill:info.skill};
    console.log(monster);
    return monster;
}

function loadData(callback) {
    var request = new XMLHttpRequest();
    request.open("get","gameDatas.json");
    request.onload = function () {
        callback(JSON.parse(request.response));
    };

    request.send();
}

function createMonster(info) {
    var monster = {monsterName:info.name,monsterSkill:info.skill};
    console.log(monster);
    return monster;
}

function loadMonsters() {
    loadData(function (datas) {
        var monsters = datas.monster;

        monsters.forEach(function (t) {
            createMonster(t);
        });
    });
}


function factory() {
    return {};
}


// function callback() {
//
// }
//
// function loadData(parm) {
//     //parm == callback
//     console.log("....");
//
//     // parm();
// }

loadData(callback);


var regExg = new RegExp();
var list = new Array();
var fun = new Function();
var date = new Date();


// function Person(_name) {
//     this.name = _name;
// }
//
// new Person("小明");
// new Person("校长");
// new Person("小李");



