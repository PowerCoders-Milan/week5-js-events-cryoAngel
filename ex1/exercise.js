// define your functions here
var a = document.querySelector('a');
var strong = document.querySelectorAll('strong');
a.addEventListener('mouseover', function (){
    strong.forEach(function(strong){
        strong.style.color = "blue";
    })
})
a.addEventListener('mouseover',function boldWords(){
    a.style.fontWeight = "bold";
})
// call the functions and connect them to an event
a.addEventListener('mouseout', function remove(){
    a.style.fontWeight= "normal";
})