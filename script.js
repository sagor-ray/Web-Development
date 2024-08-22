const firstContainer = document.querySelector("#firstContainer");
firstContainer.style.display = "none";
let count = 0;

const boxes = document.querySelectorAll(".box");
const winnerText = document.querySelector("#winner");
const winningPattern = [[0,1,2], 
                    [0,3,6],
                    [0,4,8],
                    [1,4,7],
                    [2,5,8],
                    [3,4,5],
                    [6,7,8],
                    [6,4,2]]
let turnO = true;
boxes.forEach(box => {
   box.addEventListener('click', () => {
    if(turnO){
        box.innerText = 'X';
        box.style.color = "#670dab";
        turnO = false;
    } else{
        box.innerText = 'O';
        box.style.color = "#b0413e";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
    count+= 1;
    if(count === 9){
        firstContainer.style.display = "flex";
        winnerText.innerText = `Oops!!! The Game is Draw`;
       }
   })   
})

const checkWinner = () => {
    for(let pattern of winningPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val!='' && pos2Val!='' && pos3Val!=''){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                winnerText.innerText = `Congratulations!! The winner is: ${pos1Val}`;
                boxes.forEach(box => {
                    box.disabled = true;
                })
                firstContainer.style.display = "flex";
            }
        }
        
    }
}
// Reset button code
const resetFun = () => {
    boxes.forEach(box => {
        box.innerText = '';
        box.disabled = false;
        firstContainer.style.display = "none";
        count = 0;
        turnO = true;
})
}
const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener('click', resetFun)
const newGame = document.querySelector("#newGame");
newGame.addEventListener("click", resetFun);
