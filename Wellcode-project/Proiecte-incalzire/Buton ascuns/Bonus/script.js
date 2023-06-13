let numberButton = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function button() {
   let value = document.getElementById("btncount").value
   let buttonWin = getRandomInt(value)
   console.log(buttonWin)
   for (let i = 0; i < value; ++i) {
    let choose = 'loser()'
        if (numberButton == buttonWin) {
            choose = 'win()'
        }  
    ++numberButton
        let newBtn = document.createElement(type='button');
        newBtn.id = numberButton;
         
        newBtn.setAttribute("onclick", choose)
        newBtn.innerText="Buton" + (numberButton)
        document.querySelector('#result').appendChild(newBtn)
    }
    
}


function win() {
    console.log('Castigator')
}
function loser() {
    console.log('Necastigator')
}