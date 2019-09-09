let content = document.getElementById("content");
let text = document.getElementById("text");
let changemiddle = document.getElementById("change-middle");
content.onmousedown=()=> {
    if(changemiddle.lastElementChild.id=="content"){
    changemiddle.removeChild(changemiddle.lastChild);
    let text = document.createElement("textarea");
    text.id="text";
    text.innerHTML="中海·铂樾府为“中国主流豪宅缔造者”——中海地产于南通打造的高端项目，项目地处主城区圆融商圈板块，位于南通市交通主轴——青年路与校西路交汇处，南通市各大一流配套均在项目3km生活范围圈内。项目占地约9.4万方，临河及公园，容积率为1.5，建筑密度为6%，绿化率32%，是片区内低密度社区代表。 项目结合南通人群需求，传承法式贵族风格，由全球设计团队匠心打造，项目实现纯人车分流，并打造三大景观轴线，五大法式庄园，奢享360m景观视野";
    changemiddle.replaceChild(text,changemiddle.lastChild);}
}
changemiddle.onmouseout = ()=>{
    if(changemiddle.lastElementChild.id=="text"){
    changemiddle.removeChild(changemiddle.lastChild);
    let div = document.createElement("div");
    div.id="content";
    div.innerHTML="中海·铂樾府为“中国主流豪宅缔造者”——中海地产于南通打造的高端项目，项目地处主城区圆融商圈板块，位于南通市交通主轴——青年路与校西路交汇处，南通市各大一流配套均在项目3km生活范围圈内。项目占地约9.4万方，临河及公园，容积率为1.5，建筑密度为6%，绿化率32%，是片区内低密度社区代表。 项目结合南通人群需求，传承法式贵族风格，由全球设计团队匠心打造，项目实现纯人车分流，并打造三大景观轴线，五大法式庄园，奢享360m景观视野";
    changemiddle.replaceChild(div,changemiddle.lastChild);}  
}