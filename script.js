function changeCatTo1(){
    var catIMG = document.getElementById("current-cat");
    catIMG.src = "images/cat1.jpg";
    var title = document.getElementById("current-title");
    title.innerText = 'Cat1';
    var content = document.getElementById("current-content");
    content.innerHTML = '<p>I am a beautiful cat №1</p>';
}

function changeCatTo2(){
    var catIMG = document.getElementById("current-cat");
    catIMG.src = "images/cat2.jpg";
    var title = document.getElementById("current-title");
    title.innerText = 'Cat2';
    var content = document.getElementById("current-content");
    content.innerHTML = '<p>I am a beautiful cat №2</p>';
}

function changeCatTo3(){
    var catIMG = document.getElementById("current-cat"); 
    catIMG.src = "images/cat3.jpg";
    var title = document.getElementById("current-title");
    title.innerText = 'Cat3';
    var content = document.getElementById("current-content");
    content.innerHTML = '<p>I am a beautiful tiger</p>';
}

function changeColorScheme(){
    var body = document.getElementsByTagName('body')[0];
    body.style.cssText = 'background-color: black; color: white';
    var card = document.querySelector('#current-content');
    card.style.cssText = 'color: black';
    var image = document.querySelector('#switcher img');
    image.style.cssText = 'background-color: white;';
    image.src = "./images/moon.svg";
    image.alt = 'moon';
}

function addNewCat(){
    var table = document.getElementById('cat-info');
    table.innerHTML += '<tr> <td>Barsik</td> <td>Belarus</td> <td>2021</td> </tr>'
}

