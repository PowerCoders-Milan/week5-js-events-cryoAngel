/*var p = document.getElementsByTagName('p')[1];
var text = document.createTextNode('this is :'+" "+ screen.width + "px");
p.nextSibling(text);


p.addEventListener('fullScreenChange', function (){
    document.onfullscreenchange(p)
})*/
/*var p = document.querySelector('p');

p.addEventListener('resize', function(){
    var width = "this is the width:"+" "+screen.availWidth + "px";
    var height = "this is the height:"+" "+screen.availHeight + "px";
    console.log(width)
    document.getElementById('para').innerText= width +" "+ height;
});

var body = document.querySelector('body');

body.addEventListener('mouseover', function(){
    var width = "this is the width:"+" "+screen.availWidth + "px";
    var height = "this is the height:"+" "+screen.availHeight + "px";
    console.log(width)
    document.getElementById('para').innerText= width +" "+ height;
});*/

function resize(){
    var height = document.documentElement.clientHeight;
    var width = document.documentElement.clientWidth;

    document.getElementById('para').innerHTML = "this is the width" +" "+ width +" "+ "and this is the height" +" "+ height;
}