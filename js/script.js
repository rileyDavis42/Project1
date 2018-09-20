//let contentHeight = window.getComputedStyle(document.getElementById("content")).style.height;
let contentHeight = document.getElementById("content").offsetHeight;

setInterval(function(){
    updateBlur();
}, 50);

if(document.getElementById("backgroundBlur")){
    document.getElementById("backgroundBlur").style.height = contentHeight +'px';
}

function show(id){
    if(document.getElementById(id).style.maxHeight === "200px"){
        document.getElementById(id).style.maxHeight = "0";
    }
    else{
        document.getElementById(id).style.maxHeight = "200px";
    }
}

function updateBlur(){
    let contentHeight = document.getElementById("content").offsetHeight;
    document.getElementById("backgroundBlur").style.height = contentHeight + 'px';
}