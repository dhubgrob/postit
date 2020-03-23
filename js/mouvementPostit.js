let actionClic = false;
let x;
let y;

let monTest = new Postit('red', 'yellow', '', 200, 200, 40, 100);
monTest.afficheTest();


document.addEventListener('mousemove', e => {
    x = e.clientX;
    y = e.clientY;
})

document.addEventListener('mouseup', () => {
    actionClic = false;
})

function refresh() {
    if (actionClic) {
        monTest.move(x, y);
        monTest.afficheTest();
    }
    setTimeout(refresh, 100);
}

refresh();
