var timer=60;
var score=0;
var hitrn=0;


function makeBubble(){ 
    var clutter="";

for(var i=1;i<148;i++){
    var rn=Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${rn}</div>`;

    

}
document.querySelector("#pbtm").innerHTML=clutter;
/*math.random() it gives the number in range 0 to 1
for ex- 0.265347293
if math.random()*10= 2.8795776

where as math.floor() y pint k baad  k number ko hata deta h
for example- math.floor(2.375486)=2
so,thus we use math.floor(math.random()*10)=2*/
}
var timer=60;
function runTimer(){
    var timerint= setInterval(function(){
        // sirf 0 tk hi chalna chahiye
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        //or agar wesa nhi h to befaaltu humko setinterval nhi chalana
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML= `<h1>Game over</h1>`
        }
    },1000);


}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent=hitrn;
}
function increaseScore(){
    score+=100;
    document.querySelector("#scoreval").textContent=score;
}

/*event bubbling
jispe click karoge wo element par event raise hoga ,aur event listener na milne milne event element ke parent par listener dhumdhega,or waha bhi naa milne par event parent ke parent ke parent par listener dhundhega   */
document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})
runTimer();
makeBubble();
getNewHit();
increaseScore();