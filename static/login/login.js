let username = document.getElementById('username');
let keyword  = document.getElementById('keyword');
let loginbut = document.getElementById('login-but');
let keywordvalue = keyword.value;
let usernamevalue = username.value;
username.onblur = function isRegisterUserName() {
    let patrn=/^[a-zA-Z0-9_-]{4,16}$/;
    if (patrn.test(username.value)) {
        return true;
    }
    else
        alert("用户名只能由5-20位数字或字母组成");
};
keyword.onblur = function isPasswd() {
    let patrn=/^(\w){6,20}$/;
    if (!patrn.exec(keyword.value)){
        alert("密码含有非法字符，只能由5-20位");
    }
    return true;
};
loginbut.onclick = ()=>{
    let request = new XMLHttpRequest();				
    request.onreadystatechange = function(){
        if(request.status == 200 && request.readyState == 4)
            return true;          	
     else 
        {
            alert("登录失败"+'状态码:'+request.status);
        }			
}
request.open("post","https://www.easy-mock.com/mock/5c35a447a7a7577b357b4596/example/example#!",true);
request.send('username='+usernamevalue+'&keyword'+keywordvalue);
}