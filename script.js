var timer =60;
var score =0;
var hitrn = 0;
 function increaseScore(){

  score += 10;
 document.querySelector('#scoreval').textContent = score;

  };
function makeBubble(){



    let clutter ="";

for( i=1;i<=160; i++){

  var rn=Math.floor(Math.random()*10)
   clutter += ` <div class="bubble">${rn}</div>`
}

document.querySelector('#pbtm').innerHTML =clutter
}
function runTimer(){
    let timerint =setInterval(function(){

     if(timer>0){

        timer--;
     }
     else{

        clearInterval(timerint);// i did this bcz withouting clearing the time interval in background it will be run  randomly and it will take space... so for managing the memory soace i use this else option.. nothing else..
        document.querySelector("#pbtm").innerHTML =`<h1>Game Over</h1>
        `
     }
        document.querySelector("#runtimeval").textContent=timer;
    },1000);

}
function getNewhit(){

    hitrn = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent= hitrn;

};



 document.querySelector('#pbtm').addEventListener("click",function(dets){

var clickdum=( Number(dets.target.textContent));
if(clickdum===hitrn){

   increaseScore();
   getNewhit();
   makeBubble();
 
}

 });

runTimer();

makeBubble();
getNewhit();
increaseScore();