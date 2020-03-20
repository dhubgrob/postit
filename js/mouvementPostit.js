let actionClic = false;
let x;
let y;

let monTest = new Postit('red', 'yellow', '', 200, 200, 40, 100);
monTest.afficheTest();


document.addEventListener('mousemove', e => {
    x = e.clientX;
    y = e.clientY;
    if(actionClic==true) {
        monTest.positionX = x;
        monTest.positionY = y;
    }
})

document.addEventListener('mouseup', () => {
    console.log("on pose !")
    actionClic = false;
})

function refresh() {
    if (actionClic) {
        console.log("on déplace !");
        monTest.move(this.positionX, this.positionY);
        monTest.afficheTest();
    }
    setTimeout(refresh, 100);
}

refresh();

/*
function refresh() {
    if (onBouge) {
        console.log("on déplace !")
        maVoit.changePlace(x, y);
        maVoit.afficheTest();
    }
    setTimeout(refresh, 300)
}

refresh();
*/
