/**
 * Created by Administrator on 16-8-27.
 */
ajax({
    "method": "GET",
    "url": "/sliders",
    "success": function (data) {
        var newsListMaker3 = Handlebars.compile(document.getElementById("news-list-template3").text);
        document.getElementById("photos-show").innerHTML = newsListMaker3(eval("("+data+")"));
        var newsListMaker4 = Handlebars.compile(document.getElementById("news-list-template4").text);
        document.getElementById("choose").innerHTML = newsListMaker4(eval("("+data+")"));
    },
    "Error": function (text) {
        alert(text);
    },
    "async": false
});

ajax({
    "method": "GET",
    "url": "/tags",
    "success": function (data) {
        var newsListMaker5 = Handlebars.compile(document.getElementById("news-list-template5").text);
        document.getElementById("show-title").innerHTML = newsListMaker5(eval("("+data+")"));
        var newsListMaker6 = Handlebars.compile(document.getElementById("news-list-template6").text);
        document.getElementById("show-title2").innerHTML = newsListMaker6(eval("("+data+")"));
    },
    "Error": function (text) {
        alert(text);
    },
    "async": false
});

ajax({
    "method": "GET",
    "url": "/news?num=4",
    "success": function (data) {
        var newsListMaker = Handlebars.compile(document.getElementById("news-list-template").text);
        document.getElementById("news-list").innerHTML = newsListMaker(eval("("+data+")"));
        var newsListMaker2 = Handlebars.compile(document.getElementById("news-list-template2").text);
        document.getElementById("first-title").innerHTML = newsListMaker2(eval("("+data+")"));
    },
    "Error": function (text) {
        alert(text);
    },
    "async": false
});

var imgLi = document.getElementById("photos-show").getElementsByTagName("img");
var chooseLi = document.getElementById("choose").getElementsByTagName("li");
var countP = 0;
var timer ;
timer =setInterval(show, 2000);
function show() {
    for (var i = 0; i < imgLi.length; i++) {
        imgLi[i].className = "d-show";
        chooseLi[i].className = "";
    }
    if(countP >= imgLi.length ){
        countP = 0;
    }
    imgLi[countP].className = "";
    chooseLi[countP].className = "colorChange";
    ++countP;
}
var  c = 0;
for(var i = 0; i < chooseLi.length; i++) {
    chooseLi[i].onclick = function () {
        clearInterval(timer);
        console.log("lalallalalla");
        for (var j = 0; j < imgLi.length; j++) {
            imgLi[j].className = "d-show";
            chooseLi[j].className = "";
        }
        console.log(i);
        imgLi[c].className = "";
        chooseLi[c].className = "colorChange";
        countP = c ;
        ++c;
        timer = setInterval(show, 2000);
        console.log(timer);
    };
}

var moreTitle = document.getElementById("more-title");
var container = document.getElementById("container");
var containerM = document.getElementById("container-m");
var  moreTitle2 =  document.getElementById("more-title2");
var showTitle = document.getElementById("show-title");
var showTitleLI = document.getElementById("show-title").getElementsByTagName("li");
var showTitle2 = document.getElementById("show-title2").getElementsByTagName("li");
moreTitle.onclick = function () {
    containerM.style.display = "block";
    container.style.display = "none";
}
moreTitle2.onclick = function () {
    containerM.style.display = "none";
    container.style.display = "block";
}
for(var i = 0; i < showTitle2.length; i++) {
    showTitle2[i].onclick = function (event) {
        var title_btn = event.target;
        showTitle.appendChild(title_btn);
        showTitleLI = document.getElementById("show-title").getElementsByTagName("li");
        returnTOP();
    };
}
function returnTOP() {
    for (var i = 0; i < showTitle2.length; i++) {
        showTitleLI[i].onclick = function () {
            containerM.style.display = "none";
            container.style.display = "block";
        }
    }
}
returnTOP();