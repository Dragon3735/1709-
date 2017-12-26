

//创建Monster类（构造函数）
function Monster(_name) {
    // this 这个（自己<将来 通过Monster这个类 创建出来的对象>）
    this.name = _name;
}

var qingWa = new Monster("青蛙");
console.log(qingWa.name);

var houZi = new Monster("猴子");
console.log(houZi.name);







