var a = 0;
var b = 0;

var button1 = document.getElementById('count1');
var button2 = document.getElementById('count2');

button1.addEventListener('click', function(){
    a++;
    document.getElementById('count').innerHTML = "count:" +" "+ a;
    if (a == 10){
        var img = document.createElement('img');
        img.setAttribute("src","images/nice.png");
        img.setAttribute("width", "100px");
        img.setAttribute("height", "100px");
        document.body.insertBefore(img, button1);
    }
})

button2.addEventListener('click', function(){
    a--;
    document.getElementById('count').innerHTML = "count:" +" "+ a;
    if (a <= 10){
        var img = document.createElement('img');
        img.setAttribute("src","images/wrong.png");
        img.setAttribute("width", "100px");
        img.setAttribute("height", "100px");
        document.body.insertBefore(img, button2);
    }
})