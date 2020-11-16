var tabs = document.getElementById("tabs").getElementsByTagName("li");
var good = document.getElementById("goods");
var list = good.getElementsByTagName("ul");
for(var i = 0; i < tabs.length; i++){
    tabs[i].index = i;
    tabs[i].onclick = function(){
        for(var j = 0; j < tabs.length; j++){
            tabs[j].className = "";
            list[j].style.display = 'none';
    
        }
        this.className = 'active';
        list[this.index].style.display = 'block';
    
    };
}


