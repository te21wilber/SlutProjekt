function menu(){
    var bar = document.getElementById("bar");
    if (bar.style.top === "-100%" || bar.style.top === "") {
        bar.style.top = "calc(50pt + 60px)";
    } else {
        bar.style.top = "";
    }
}

//calc(50pt + 60px)