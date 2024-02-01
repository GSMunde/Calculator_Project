
var num = document.querySelectorAll("#keyboard > div");
var bag = document.querySelector("#display");
for(i = 0; i < num.length; i++){
    num[i].addEventListener("click", MyFunction);
}
function MyFunction(){
    var targetNumber = event.target.innerText;
    switch(targetNumber){
        case "C":
          bag.innerText = "";
          break;
        case "=":
          bag.innerText = eval(bag.innerText);
          break;
        default:
          bag.innerText += targetNumber;
    }
}
