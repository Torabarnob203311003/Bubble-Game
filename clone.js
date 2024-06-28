// ignore this code... its the clone of script.js



var timer =60;
var score = 0;
var hitrn = 0;
 function increaseScore(){

 score+=10;

document.querySelector('#scoreval').textContent =  score ;


 


   
  

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
        document.querySelector("#pbtm").innerHTML =`
        
        
        
         <div class="game-over-container">
                <div><h1>Game Over</h1></div>
                <div><h1>Your Score is: ${score}</h1></div>
                <div><h1>  Best Of Luck For Next Time</h1></div>
                <button id="reloadButton">Play Again</button>
            </div>
            <style>
                     #reloadButton{
                           padding:10px;
                           border-radius :10px;
                           font-family: "Gilroy";
                           font-weight:700;
                           text:15px;
                           margin: 20px 0;
     font-size: 2rem;
     font-weight: 600;
   //   text-shadow: 0 0 10px #ff6ec7, 0 0 20px #ff3ba7, 0 0 30px #ff0099;
      text-align: center;
     background-color: #1b1e23;
   
     border-radius: 10px;
     box-shadow: 0 0 20px #13a682;
     /* Pink shadow */
     color: #00d2ff;
     /* Neon yellow text */

                     }
            
            </style>

            
      `
      ;
        document.getElementById('reloadButton').addEventListener('click', function() {
            location.reload(); // Reload the page
        });
      
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