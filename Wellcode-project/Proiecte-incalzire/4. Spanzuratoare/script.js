

function word() {
    let wordReceived = document.getElementById("in").value
    document.getElementById("in").value = ""
    let lengthString = wordReceived.length
    console.log(lengthString)
    $("#words").append(wordReceived[0]);
    document.getElementById("words")
    for(let i = 1; i < lengthString - 1; ++i) {
       let a = document.createElement(<type="text" id="lengthString"> _ </text>"
       a.id = lengthString
       document.querySelector('#words').appendChild(a)
    }
    $("#words").append(wordReceived[lengthString - 1]);
}