let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");

let turnText = document.querySelector("h2");
let turnO = true;

const gameReset = () =>
{
    turnO = true;
    for(let box of boxes)
    {
        box.innerText = "";
        box.disabled = false;
    }

    turnText.innerText="Player 1's turn ( O )";
}

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) =>
{
    box.addEventListener("click", () =>
    {
        if(turnO === true)
        {
            box.innerText="O";
            turnText.innerText="Player 2's turn ( X )";
            turnO= false;
        }
        else
        {
            box.innerText="X";
            turnText.innerText="Player 1's turn ( O )";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    })
})

const checkWinner = () =>
{
    for(let pattern of winPatterns)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val == pos2Val && pos2Val == pos3Val && pos3Val == pos1Val)
            {
                console.log("Winner");
                if(pos1Val === 'O')
                    turnText.innerText="Player 1 ( O ) won the Game!";
                else
                    turnText.innerText="Player 2 ( X ) won the Game!";

                for(let box of boxes)
                    box.disabled = true;
            }
        }
    }
    if([...boxes].every(box => box.innerText !== ""))
    {
        turnText.innerText = "It's a Draw!";
    }
}

resetBtn.addEventListener("click", gameReset);