let yourpoints=0;
let comppoints=0;
let choices=document.querySelectorAll(".choice");

choices.forEach(choice=>{
    // console.log(choice)
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        playgame(userchoice);
    })

})
const gamedraw=()=>{
    console.log("game draw")
}

const gencompchoice=()=>{
    const options=["rock","paper","scissors"]
    const randomidx=Math.floor(Math.random()*3)
    return options[randomidx]

}
const showwinner=(userwin)=>{
    if (userwin) {
        console.log("You Win")
    }
    else{
        console.log("You Lost and computer won")
    }
}

const playgame=(userchoice=>{
    console.log("user choice",userchoice)
    const computerchoice=gencompchoice();
    console.log("computer choice",computerchoice)
    if (userchoice===computerchoice) {
        gamedraw();
    }else{
        let userwin=true;
        if (userchoice==="rock") {
            // paper scissor
             userwin=computerchoice==="paper" ? false: true
        }else if(userchoice==="paper"){
            // rock scissors
             userwin=computerchoice==="scissors" ? false : true
        }else{
            // rock paper
            userwin=computerchoice==="rock" ? false : true
        }
        showwinner(userwin);
    }
})