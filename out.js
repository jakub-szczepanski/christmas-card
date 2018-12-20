var uk = document.getElementById('uk');
var fr = document.getElementById('fr');
var pl = document.getElementById('pl');
var esp = document.getElementById('esp');
var ger = document.getElementById('ger');
var rus = document.getElementById('rus');
var gr = document.getElementById('gr');
var it = document.getElementById('it');
var swe = document.getElementById('swe');
var headerText = document.getElementById('hTxt');

uk.addEventListener('click', function(){
    headerText.innerHTML = "Merry Christmas";
    headerText.classList.remove('smaller');
    headerText.classList.remove('smallerGreece');
});

fr.addEventListener('click', function(){
    headerText.innerHTML = "Joyeux noel";
    headerText.classList.remove('smaller');
    headerText.classList.remove('smallerGreece');
})

pl.addEventListener('click', function(){
    headerText.innerHTML = "Wesołych Świąt";
    headerText.classList.remove('smaller');
    headerText.classList.remove('smallerGreece');
})

esp.addEventListener('click', function(){
    headerText.innerHTML = "Feliz navidad";
    headerText.classList.remove('smaller');
    headerText.classList.remove('smallerGreece');
})

ger.addEventListener('click', function(){
    headerText.innerHTML = "Frohe Weihnachten";
    headerText.classList.add('smaller');
})

rus.addEventListener('click', function(){
    headerText.innerHTML = "Schastlivogo Rozhdestva";
    //headerText.innerHTML = "Счастливого Рождества";
    headerText.classList.add('smaller');
})

gr.addEventListener('click', function(){
    headerText.innerHTML = "Kalá Christoúgenna";
    //headerText.innerHTML = "Καλά Χριστούγεννα";
    headerText.classList.add('smallerGreece');
})

it.addEventListener('click', function(){
    headerText.innerHTML = "Buon Natale";
    headerText.classList.remove('smaller');
    headerText.classList.remove('smallerGreece');
})

swe.addEventListener('click', function(){
    headerText.innerHTML = "God jul";
    headerText.classList.remove('smaller');
    headerText.classList.remove('smallerGreece');
})