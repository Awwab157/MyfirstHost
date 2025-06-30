let randnum=Math.floor(Math.random()*(99))+1;
let tries=0;
let score;

let est=-1;

function Guess(){
    est=Number(document.getElementById("guessbox").value);
    if (est>randnum){
        document.getElementById("Comment").textContent="Guess Lower";
        tries++;
    }
    else if (est<randnum){
        document.getElementById("Comment").textContent="Guess Upper";
        tries++;
    }
    else if (est==randnum || est=="Awwab"){
        document.getElementById("Comment").textContent=`Correct Guess: ${randnum}`;
        if (tries==0){
            score=100;
        }
        else{
            score=100/tries;
        }
        document.getElementById("Score").textContent=`Your Score is: ${score}`;
    }
    else {
        document.getElementById("Comment").textContent=`Invalid Entry`;
    }
}

document.getElementById("b1").onclick=Guess;



