
//define Box property
var bG = "#0D2C54";
var w = 100;
var h = 100;



let box = document.getElementById("box");
box.style.backgroundColor = bG;
box.style.width = w + "px";
box.style.height = h + "px";

var startPoint = 0 ;


//move left function
let moveLeft =()=>{

    startPoint += 10;
    box.style.left = startPoint + 'px';

}

//move right

let  moveRight=()=>{

    startPoint -= 10;
    box.style.left = startPoint + 'px';   
}

//move top

let  moveTop=()=>{

    startPoint += 10;
    box.style.top = startPoint + 'px';   
}

//move bottom

let  moveBottom=()=>{

    
    box.style.bottom = startPoint + 'px';   
    startPoint += 15;
}















