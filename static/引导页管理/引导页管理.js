let inputtext = document.getElementsByClassName('message');
let define = document.getElementById('define');
let change = document.getElementsById('change');
let logochange = document.getElementById('logo-change');
(() => {
    inputtext[0].value = "深圳市兴海物联科技有限公司";
    inputtext[1].value = "深圳市豪威科技大厦8b";
    inputtext[2].value = "0755-89895502";
})();
let bgimage = document.getElementById('bgimage').files[0];
let logoimage = document.getElementById('logo').files[0];
let data = new FormData();
data.append("bgimage", bgimage);
data.append("logoimage", logoimage);
define.onclick = function () {
    let ajax = new XMLHttpRequest();
    ajax.open('POST', 'http://www.baidu.com', true);
    ajax.send('data' + inputtext[0].value + inputtext[1].value + inputtext[2].value);
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            let text = JSON.parse(ajax.responseText);
            let url = "/" + text.data;
            change.style['background-image'] = url;
            logochange.style['background-image'] = url;
        }
        else {
            alert('未能连接到服务器或网络错误' + ajax.status);
        }
    }
}
