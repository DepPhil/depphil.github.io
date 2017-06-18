//myHeading.textContent='Hello World';
//alert('Hey!');
document.querySelector('html').onclick = function(){
    //alert('Mouse Click detected!');
}

var myImage = document.querySelector('img');
myImage.onclick = function()
{
    var mySrc=myImage.getAttribute('src');
    if(mySrc==='truck_picture.png') myImage.setAttribute('src', 'truck_picture2.png');
    else myImage.setAttribute('src', 'truck_picture.png');
}

var myButton= document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName()
{
    var myName =  prompt('Please Enter your Name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome ' + myName;
}

if(!localStorage.getItem('name')) setUserName();
else myHeading.textContent = 'Welcome ' + localStorage.getItem('name');

myButton.onclick = function(){setUserName();}

