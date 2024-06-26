var timer =60;
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
     }
        document.querySelector("#runtimeval").textContent=timer;
    },1000);

}


function getNewhit(){

   let rn = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent= rn;

};



runTimer();

makeBubble();
getNewhit();