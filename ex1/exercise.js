// define your functions here
var a = document.querySelector('a');
a.addEventListener('mouseover',function boldWords(){
    a.style.fontWeight = "bold";
})
// call the functions and connect them to an event
a.addEventListener('mouseout', function remove(){
    a.style.fontWeight= "normal";
})