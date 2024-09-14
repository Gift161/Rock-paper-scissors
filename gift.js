for (let i = 1; i <= 5; i++) {
const getcomputerchoice = ['rock', 'paper', 'scissors']

const answer = getcomputerchoice[Math.floor(Math.random()*getcomputerchoice.length)]

let gethumanchoice = prompt('Start the game by entering your answer below')
if (gethumanchoice === 'rock', 'paper', 'scissors') {
    console.log(answer)
}else if (gethumanchoice === " ",""){
    console.log(gethumanchoice)
}

const humanchoice = gethumanchoice
const computerchoise = answer

let computerscore = 0
let playerscore = 0


function playgame(){

    function playround(humanchoice, computerchoise) {
        if (computerchoise === 'rock' && humanchoice === 'scissors') {
            console.log(`you lose ${computerchoise} beats ${humanchoice}`);
            computerscore++;
        }
        else if (computerchoise === 'paper' && humanchoice === 'rock') {
            console.log(`you lose ${computerchoise} beats ${humanchoice}`);
            computerscore++
        }
        else if (computerchoise === 'scissors' && humanchoice === 'paper') {
            console.log(`you lose ${computerchoise} beats ${humanchoice}`);
            computerscore++;
        }
        else if (computerchoise === 'scissors' && humanchoice === 'rock') {
            console.log(`you win ${humanchoice} beats ${computerchoise}`);
            playerscore++;
        }
        else if (computerchoise === 'paper' && humanchoice === 'scissors') {
            console.log(`you win ${humanchoice} beats ${computerchoise}`);
            playerscore++;
        }
        else if (computerchoise === 'rock' && humanchoice === 'paper') {
            console.log(`you win ${humanchoice} beats ${computerchoise}`);
            playerscore++;
        }
        else{console.log("It's a draw");}
        }
        playround(humanchoice, computerchoise);
    }
    
    playgame()
    console.log(`Round: ${i}`);
    console.log(`Playerscore: ${playerscore} Computerscore: ${computerscore}`)
    if (playerscore > computerscore) {
        console.log(`You win ${playerscore}:${computerscore}`);
    }else if (computerscore > playerscore){
        console.log(`You lose ${playerscore}:${computerscore}`);
    }else{console.log("It's a tie");}
    }

