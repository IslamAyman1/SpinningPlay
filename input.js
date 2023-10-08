// function end(){
//     window.location.replace('end.html')
// }
let first = document.getElementById('first');
let second = document.getElementById('second');
let result = document.getElementById('result')
function end(){
   
    if(first.value == "" && second.value == ""){
        result.innerHTML = "enter Your Name Please"
    }else{
        window.location.replace('end.html');
        
    }
}

