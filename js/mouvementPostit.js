let classElem = new Array();
let etatMove = false;
let etatResize = false;
let etatChangeContent = false;
let x;
let y;

let monTest = new Postit('red', 'yellow', '', 200, 200, 40, 100, 1);
monTest.afficheTest();


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
        monTest.move(x, y);
        monTest.afficheTest();
    }
    if (etatResize) {
        monTest.resize(x, y);
        monTest.afficheTest();
    }
   
    setTimeout(refresh, 100);
}

refresh();
