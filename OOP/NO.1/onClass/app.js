(function () {


    // var xiaoMing = {name:"小明",age:18};

    // var sup = document.body;
    //
    // var ele = document.createElement("button");
    // ele.textContent = "+";
    // sup.appendChild(ele);
    //
    // var ele1 = document.createElement("span");
    // ele1.textContent = "10";
    // sup.appendChild(ele1);
    //
    // var ele2 = document.createElement("button");
    // ele2.textContent = "-";
    // sup.appendChild(ele2);

    //创建元素的 工厂函数 -> 精简上面的代码

    //把重复的代码 拷贝到 工厂函数中
    //相同的留下，不同的 使用变量去表示
    // function createView(tagName,content,superEle,className) {
    //
    //     var ele = document.createElement(tagName);
    //     ele.textContent = content;
    //     ele.className = className?className:"";
    //     superEle.appendChild(ele);
    //
    //     return ele;
    // }
    //
    // createView("button","+",document.body);
    // createView("span","10",document.body);
    // createView("button","-",document.body);
    //
    // var data = [{tagName:"button",content:"+"},{tagName:"span",content:"10"},{tagName:"button",content:"-"}];
    // data.forEach(function (item) {
    //     createView(item.tagName,item.content,document.body);
    // });



    // var ul = createNav("top_nav");
    // document.body.appendChild(ul);

    document.body.appendChild(createNav("top_nav"));
})();