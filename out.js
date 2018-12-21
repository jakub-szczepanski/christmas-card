var uk = document.getElementById('uk');
var fr = document.getElementById('fr');
var pl = document.getElementById('pl');
var esp = document.getElementById('esp');
var ger = document.getElementById('ger');
var rus = document.getElementById('rus');
var gr = document.getElementById('gr');
var it = document.getElementById('it');
var swe = document.getElementById('swe');
var headerText = document.getElementById('headText');


uk.addEventListener('click', function(){
    headerText.innerHTML = "Merry Christmas";
    headerText.classList = "";
    headerText.classList.add('fade');
});

fr.addEventListener('click', function(){
    headerText.innerHTML = "Joyeux noel";
    headerText.classList = "";
    headerText.classList.add('rotate');
})

pl.addEventListener('click', function(){
    headerText.innerHTML = "Wesołych Świąt";
    headerText.classList = "";
    headerText.classList.add('rotate');
})

esp.addEventListener('click', function(){
    headerText.innerHTML = "Feliz navidad";
    headerText.classList = "";
    headerText.classList.add('rotate');
})

ger.addEventListener('click', function(){
    headerText.innerHTML = "Frohe Weihnachten";
    headerText.classList = "";
    headerText.classList.add('smaller');
    headerText.classList.add('rotate');
})

rus.addEventListener('click', function(){
    headerText.innerHTML = "Schastlivogo Rozhdestva";
    //headerText.innerHTML = "Счастливого Рождества";
    headerText.classList = ""
    headerText.classList.add('smaller');
    headerText.classList.add('rotate');
})

gr.addEventListener('click', function(){
    headerText.innerHTML = "Kalá Christoúgenna";
    //headerText.innerHTML = "Καλά Χριστούγεννα";
    headerText.classList = ""
    headerText.classList.add('smallerGreece');
    headerText.classList.add('rotate');
})

it.addEventListener('click', function(){
    headerText.innerHTML = "Buon Natale";
    headerText.classList = "";
    headerText.classList.add('rotate');
})

swe.addEventListener('click', function(){
    headerText.innerHTML = "God jul";
    headerText.classList = "";
    headerText.classList.add('rotate');
})