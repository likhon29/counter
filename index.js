console.log("Hello form s-r-s")
let num = 0;
let countValue = document.getElementById("count");
console.log("inner TExt",countValue)
let int = null;

document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayCount,1000);
});

function displayCount(){
   num=num+1;
   countValue.innerHTML = ` ${num}`;
    }

    document.getElementById('pauseTimer').addEventListener('click', ()=>{
        clearInterval(int);
    });

    document.getElementById('resetTimer').addEventListener('click', ()=>{
        clearInterval(int);
        num=0
        countValue.innerHTML = '0';
    });

