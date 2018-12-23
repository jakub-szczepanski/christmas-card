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
var headMain = document.querySelector('headMain');


function exit() {
    $('.headMain .letters').each(function () {
        $(this).html($(this).unwrap());
    });
}

function movingLetters() {
    $('.headMain .letters').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({ loop: false })
        .add({
            targets: '.headMain .letter',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 950,
            delay: function (el, i) {
                return 60 * i;
            }
        });

}

uk.addEventListener('click', function () {
    headerText.innerHTML = "Merry Christmas";
    headerText.classList.remove('pulse');
    headerText.style.fontSize = "1.3em";
    headerText.style.marginTop = "90px";
    movingLetters().exit();
});

fr.addEventListener('click', function () {
    headerText.innerHTML = "Joyeux noel";
    headerText.classList.remove('pulse');
    headerText.style.fontSize = "1.4em";
    headerText.style.marginTop = "90px";
    movingLetters().exit();
})

pl.addEventListener('click', function () {
    headerText.innerHTML = "Wesołych Świąt";
    headerText.classList.remove('pulse');
    headerText.style.fontSize = "1.2em";
    headerText.style.marginTop = "90px";
    movingLetters().exit();
})

esp.addEventListener('click', function () {
    headerText.innerHTML = "Feliz navidad";
    headerText.classList.remove('pulse');
    headerText.style.fontSize = "1.3em";
    headerText.style.marginTop = "90px";
    movingLetters().exit();
})

ger.addEventListener('click', function () {
    headerText.innerHTML = "Frohe Weihnachten";
    headerText.classList.remove('pulse');
    headerText.style.fontSize = "1em";
    headerText.style.marginTop = "90px";
    movingLetters().exit();
})

rus.addEventListener('click', function () {
    //headerText.innerHTML = "Schastlivogo Rozhdestva";
    headerText.innerHTML = "Счастливого Рождества";
    headerText.classList.remove('pulse');
    headerText.style.fontSize = ".9em";
    //headerText.style.marginTop = "-30px";
    movingLetters().exit();
})

gr.addEventListener('click', function () {
    //headerText.innerHTML = "Kalá Christoúgenna";
    headerText.innerHTML = "Καλά Χριστούγεννα";
    headerText.classList.remove('pulse');
    headerText.style.fontSize = "1em";
    headerText.style.marginTop = "90px";
    movingLetters().exit();
})

it.addEventListener('click', function () {
    headerText.innerHTML = "Buon Natale";
    headerText.classList.remove('pulse');
    headerText.style.fontSize = "1.5em";
    headerText.style.marginTop = "90px";
    movingLetters().exit();
})

swe.addEventListener('click', function () {
    headerText.innerHTML = "God jul";
    headerText.classList.remove('pulse');
    headerText.style.fontSize = "1.5em";
    headerText.style.marginTop = "90px";
    movingLetters().exit();
})