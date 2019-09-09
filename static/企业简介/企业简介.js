let image = document.getElementsByClassName('image');
let inde = 0;
window.onload = function () {
    var list = document.getElementById("list");

    function animate(offset) {
        /*获取的style.left，是相对左边获取距离，所以第一张图后style.left都为负值*/
        /*且style.left获取的是字符串，需要用parseInt()或者parseFloat()取整转化为数字。*/
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + "px";
        list.style.transition = '300ms ease';   //给动画添加过渡时间
        /*从最后一张偏移值到第一张*/
        if (newLeft <= -4920) {
            list.style.left = 0 + 'px';
        }
        /*从第一张偏移值到最后第一张*/
        if (newLeft > 0) {
            list.style.left = -3690 + 'px';
        }
    }
    // prev.onclick = function(){
    //     animate(580);
    // }
    // next.onclick = function(){
    //     animate(-580);
    // }

    var timer;
    function autoplay() {
        timer = setInterval(function () {
            animate(1230);
        }, 3000);
    }
    autoplay();
    /*---鼠标悬停停止---*/
    var container = document.getElementById('container');
    function stopplay() {
        clearInterval(timer);
    }
    // container.onmouseover = stopplay;
    container.onmouseout = autoplay;
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var index = 1;
    function showButton() {
        //清除之前的样式
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
            }
        }
        buttons[index - 1].className = 'on';
    }
    function ad() {
        setInterval(function showutton() {
            inde++;
            if (inde == buttons.length) inde = 0;
            buttons[inde].className = "on";
            for (let z = 0; z < buttons.length; z++) {
                if (z != inde) {
                    buttons[z].className = "";
                }

            }
        }, 3000);
    }

    ad();
    // prev.onclick = function() {
    //     index -= 1;
    //     if(index < 1){
    //         index = 4;
    //     }
    //     showButton();
    //     animate(580);
    // }
    // next.onclick = function() {
    //     index += 1;
    //     if(index > 4){
    //         index = 1;
    //     }
    //     showButton();
    //     animate(-580);
    // }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            var clickIndex = parseInt(this.getAttribute('index'));
            var offset = 1230 * (index - clickIndex);
            animate(offset);
            index = clickIndex;
            showButton();
        }

    }
    //添加图片部分
    let p;
    function isimage() {
        for (let p = 5; p > 0; p--) {
            if (image[p].children.length != 1) {
                image[p].style.border = 'none';
            }
            if (image[p].children.length == 1) {
                console.log(p);
                return;
            }
        }
    }
    isimage();
    let file = document.getElementById('file');
    let file1 = document.getElementById('file').files[0];
    let data = new FormData();
    data.append("testfile", file1);
    file.onclick = function () {
        let ajax = new XMLHttpRequest();
        ajax.open('POST', 'http://www.baidu.com', true);
        ajax.send('data');
        ajax.onreadystatechange = () => {
            if (ajax.readyState == 4 && ajax.status == 200) {
                let text = JSON.parse(ajax.responseText);
                let url = "/" + text.data;
                let img = document.createElement('img');
                img.src = url;
                image[p].removeChild(file);
                image[p].innerHTML = '';
                image[p].appendChild(img);
                let newinput = document.createElement('input');
                let newtext = document.createTextNode('添加图片');
                newinput.type = 'file';
                newinput.id = 'file';
                image[p + 1].appendChild(newtext);
                image[p + 1].appendChild(newinput);
                image[p + 1].style.border = '1px solid black';
            }
            else {
                alert('未能连接到服务器或网络错误' + ajax.status);
            }
        }
    }
}