let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorep=document.querySelector("#user-score");
const compScorep=document.querySelector("#comp-score");
const genchoice =() =>{
    const opt=["rock","paper","scissors"];
   const rand= Math.floor(Math.random()*3);
   return opt[rand];

}
const drawGame =()=>{
    console.log("DRAW"); 
    msg.innerText="DRAW";
    msg.style.backgroundColor="purple";
}
const showWin=(userWin)=>{
    if(userWin){
        userScore++;
        userScorep.innerText=userScore;
        console.log("YOU WIN");
        msg.innerText="YOU WIN!";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorep.innerText=compScore;
        console.log("YOU LOSE");
        msg.innerText="YOU LOSE!";
        msg.style.backgroundColor="red";
    }
}
const playGame=(userC) =>{
    console.log("user choice=",userC);
    const compchoice=genchoice();
    console.log("comp choice=",compchoice);
    if(userC === compchoice){
       drawGame();
    }
    else{
        let userWin=true;
        if(userC ==="rock"){
            userWin=compchoice==="paper"?false:true;
        }
        else if(userC ==="paper"){
            userWin=compchoice==="scissors"?false:true;
        }
        else{
            userWin=compchoice ==="rock"?false:true;
        }
        showWin(userWin);
    }


};


choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userC=choice.getAttribute("id");
        playGame(userC)

    });
});