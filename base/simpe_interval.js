/**
 * Created by oneleaf on 15/9/25.
 */
var x=0,y=0,z=0;
function disPlayVaule(){
    console.log("X=%d; Y=%d; Z=%d",x,y,z);
}

function updateX(){
    x +=1;
}

function upDateY(){
    y +=1;
}

function upDateZ(){
    z +=1;
    disPlayVaule();
}

setInterval(updateX,500);
setInterval(upDateY,1000);
setInterval(upDateZ,2000);

