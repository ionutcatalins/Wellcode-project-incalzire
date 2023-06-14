const words = new Array(1000);
let numberWords = 0

function buttonSave() {
    words[numberWords] = document.getElementById("in").value;
    ++numberWords
}
function searchWords() {
    let search = document.getElementById("in").value;    
    if(words.includes(search)) {
        document.getElementById("myResult").innerHTML = "Cuvantul se afla in dictionar"
    } else {
        document.getElementById("myResult").innerHTML = "Cuvantul nu se afla in dictionar"
    }
}