// clientWidth 获取元素实际宽度
var oMesArr = document.getElementsByClassName("mes");
var oMesWrap = document.getElementById("mes-wrap");
var oChoose = document.getElementsByClassName("choose-cont")[0];
var oChooseCont = oChoose.getElementsByTagName("span")[0];
var oButton = document.getElementsByTagName("button")[0]

var str =
`程序员 医生 老师 飞行员 邮递员 警察 护士 科学家 美术家 回家 歌手 办公室职员 经理 老板 助手 空姐 海军 工程师 作家 航海家 空军 陆军 舞蹈家 书法家 模特 护士 导演 演员 服务员 法官 秘书`
var contentArr = [];
var contentIndex = 0;
contentArr = str.split(" ");

function appChild(content){
        var randTop = Math.floor(Math.random() * window.innerHeight);
        var randLeft = Math.floor(Math.random() * window.innerWidth);
        var para=document.createElement("p");
        var node=document.createTextNode(content);

        para.className = "mes mes-animate";
        para.style.top = randTop + 'px';
        para.style.left = randLeft + 'px';
        para.appendChild(node);
        var element=document.getElementById("mes-wrap");
        element.appendChild(para);
}

setInterval(function() {
    if(contentIndex >= contentArr.length)
        contentIndex = 0;
    appChild(contentArr[contentIndex]);
    setTimeout(function() {
        oMesWrap.removeChild(oMesArr[0]);
    },3000);
    contentIndex++;
},100);

var a = 0;
var timer;
oButton.addEventListener("click",function() {
    var i = 0;
    if(a%2 === 0) {
        oButton.innerHTML = "STOP"
        timer = setInterval(function() {
            if(i >= contentArr.length)
                i = 0;
            oChooseCont.innerHTML = contentArr[i];
            i++;
        },50)
    } else {
        clearInterval(timer);
        oButton.innerHTML = "START"
    }
    a++;
    if(a > 1) a = 0;
},false)
