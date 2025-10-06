let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let h2=document.querySelector("h2");

let btns=["red", "yellow","green","blue"];

// game started
document.addEventListener("keypress", function()
{
    if(started==false)
    {
        console.log("game has Started");
        started=true;

        levelUp();
    }
});

// Function levelUp 
function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    // /Choose Random Color
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

// Function btnFlash
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 250);
}

// Function chkButton
function chkButton(idx)
{
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length)
        setTimeout(levelUp,1000);
    }
    else{
        h2.innerHTML=`Game Over! Your Score was <b>${level-1}</b> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";            
        }, 150);
        reset();
    }
}

//  adding eventListdener to the Buttons
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click", btnPress);
}

// /Function btnPress
function btnPress()
{
    console.log(this);
    let btn=this;
    btnFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    chkButton(userSeq.length-1); 
}

// game reset
function reset()
{
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}