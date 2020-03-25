var tabPostit = new Array();
let etatMove = false;
let idMove = 0;
let idResize = 0;
let etatResize = false;
let etatChangeContent = false;
let x;
let y;

let monRed = new Postit('red', 'yellow', '', 150, 150, 40, 100, tabPostit.length+1);
tabPostit.push(monRed);
tabPostit[tabPostit.length-1].afficheTest();

let monGreen = new Postit('green', 'yellow', '', 150, 150, 40, 300, tabPostit.length + 1);
tabPostit.push(monGreen);
tabPostit[tabPostit.length-1].afficheTest();

let monBlue = new Postit('blue', 'yellow', '', 150, 150, 40, 500, tabPostit.length + 1);
tabPostit.push(monBlue);
tabPostit[tabPostit.length-1].afficheTest();

console.log(tabPostit);

document.addEventListener('mousemove', e => {
    x = e.clientX;
    y = e.clientY;
})

document.addEventListener('mouseup', () => {
    etatMove = false;
    etatResize = false;
    etatChangeContent = false;
})

function refresh() {
    if (etatMove) {
        tabPostit[(idMove-1)].move(x, y);
        tabPostit[(idMove-1)].afficheTest();
    }
    if (etatResize) {
        tabPostit[(idResize-1)].resize(x, y);
        tabPostit[(idResize-1)].afficheTest();
    }
   
    setTimeout(refresh, 100);
}

refresh();



function sauvContexte() {
    createCookie("svTabPostit", "[" + tabPostit.toString() + "]")
    let myCookie = "svtabPostit=[" + tabPostit.toString() + "]";
    //On crée un délai d'expiration d'une semaine pour le cookie.
    let date = new Date();
    date.setTime(date.getTime() + (30 * 7 * 24 * 60 * 60 * 1000)); /* La date est en millisecondes */
    myCookie += "; expires=" + date.toGMTString(); /* Les dates des cookies doivent être au format GMT */
    logMe(myCookie, true);
    document.cookie = myCookie; /* Ajout du cookie */
}

window.onload = () => {
    tmpTabPost = readCookie("svtabPostit")
    tmpTabPost = (document.cookie.replace(/(?:(?:^|.*;s*)svtabPostit*=s*([^;]*).*$)|^.*$/, '$1'));
    alert("Voici le contenu de mon cookie : \n" + tmpTabPost + "\n ou \n " + eval(tmpTabPost))

    refresh();
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}