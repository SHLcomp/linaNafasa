let countEl = document.getElementById("count-el")
// console.log(countEl)
let count = 0

function increment(){
    count = count + 1
    countEl.innerText = count
}
function save(){
    console.log(count)
}
save()
function Delete(){
    countEl.innerText = 0
    count = 0
    // console.log(count)
}

let userName = "Sarah"
let Alert = "You Have three new notifications"

console.log(Alert + " " + userName + "!!")

const message = Alert + " " + userName + "!!"

console.log(message)


let noti = document.getElementById("noti");

function messageAlert(){
    noti.innerText = message;
}