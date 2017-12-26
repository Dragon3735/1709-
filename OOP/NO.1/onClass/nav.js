

// (function () {

    function createView(tagName,content,superEle,className) {

        var ele = document.createElement(tagName);
        ele.textContent = content;
        ele.className = className?className:"";
        superEle.appendChild(ele);

        return ele;
    }

    function loadData(callback) {
        var request = new XMLHttpRequest();
        request.open("GET","nav.json");
        request.onload = function () {
            var obj = JSON.parse(request.response);
            console.log(obj);
            callback(obj);
        };
        request.send();
    }

    function createNav(_className) {
        var ul = document.createElement("ul");
        ul.className = _className?_className:"top_nav";
        ul.className = _className;
        loadData(function (data) {
            // var li = createView("li",data.nav[0].title,ul,"item");
            data.nav.forEach(function (obj) {
                createView("li",obj.title,ul,"item");
            })
        });
        return ul;
    }

// })();


var list = [1,2,3,4,5,6];
list.forEach(function (遍历的结果,下标,原数组) {
    console.log(遍历的结果,下标,原数组);
});