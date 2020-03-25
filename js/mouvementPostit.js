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
