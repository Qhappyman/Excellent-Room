(function(){
    document.write( 
    '<div id="nav">'+
    '<div id="picture"></div>'+
    '<ul>'+
        '<li><a href="../pages/引导页管理.html">引导页管理</a></li>'+
        '<li><a href="../pages/index.html">首页管理</a></li>'+
        '<li><a href="../pages/户型展示.html" id="li1">户型展示</a></li>'+ //暂时添加id改变链接颜色，后续设计函数
        '<li>品牌概括'+
            '<span class="arrow" onclick="change(list1)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg t="1564888169738" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1735" width="200" height="200"><path d="M522.9 727l22.6-22.7 362.1-362a16.1 16.1 0 0 0 0-22.6L885 297a16.2 16.2 0 0 0-22.7 0L511.6 647.8l-349.9-350a16.2 16.2 0 0 0-22.7 0l-22.6 22.7a16.1 16.1 0 0 0 0 22.6l361.2 361.2h0.1l22.6 22.7a16.1 16.1 0 0 0 22.6 0z" p-id="1736" fill="#8a8a8a"></path></svg></span></li>'+
            '<div class="list" id="list1">'+
                '<ul>'+
                    '<li><a href="../pages/企业简介.html">企业简介</a></li>'+
                    '<li><a href="../pages/品牌荣耀.html">品牌荣耀</a></li>'+
                    '<li><a href="../pages/发展历程.html">发展历程</a></li>'+
                    '<li><a href="../pages/企业文化.html">企业文化</a></li>'+
                '</ul>'+
           '</div>'+
        
        '<li><a href="../pages/项目介绍.html">项目介绍</a></li>'+
        '<li>楼盘周边 <span class="arrow" onclick="change(list2)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg t="1564888169738" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1735" width="200" height="200"><path d="M522.9 727l22.6-22.7 362.1-362a16.1 16.1 0 0 0 0-22.6L885 297a16.2 16.2 0 0 0-22.7 0L511.6 647.8l-349.9-350a16.2 16.2 0 0 0-22.7 0l-22.6 22.7a16.1 16.1 0 0 0 0 22.6l361.2 361.2h0.1l22.6 22.7a16.1 16.1 0 0 0 22.6 0z" p-id="1736" fill="#8a8a8a"></path></svg></span></li>'+
            '<div class="list" id="list2">'+
                '<ul>'+
                    '<li><a href="../pages/园林景观.html">园林景观</a></li>'+
                    '<li><a href="../pages/周边设施.html">周边设施</a></li>'+
                '</ul>'+
            '</div>'+
        '<li><a href="../pages/移动端.html">移动端管理</a></li>'+
        '<li><a href="../pages/项目管理.html">项目管理</a></li>'+
   '</ul>'+
'</div>')})();
