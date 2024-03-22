let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".message-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;
const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6] // diagonals
];
const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO){
            
            box.innerText= "O";
            box.classList.add("O");
            turnO = false;     
        }
        else{
            box.innerText= "X";
            box.classList.add("X");
            turnO = true;
        }
        box.disabled= true;
        count++;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw = () =>{
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () =>{
    boxes.forEach((box)=>{
        box.disabled = true;
    });
};

const enableBoxes = () =>{
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
    });
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations! Winner is ${winner}!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(pattern of winPatterns){
        
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val !="" && pos2val !="" && pos3val!=""){
                if(pos1val === pos2val && pos2val === pos3val){
                    showWinner(pos1val);
                }
            }
          
    }
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);