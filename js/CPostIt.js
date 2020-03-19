class Postit {
    backgroundColor;
    heigth;
    width;
    textColor;
    textContent;
    positionX;
    positionY;

    constructor(backgroundColor, textColor, textContent, height, width, positionX, positionY) {
        this.backgroundColor = backgroundColor;
        this.height = height;
        this.width = width;
        this.textColor = textColor;
        this.textContent = textContent;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    changeBackgroundColor(backgroundColor){
        this.backgroundColor = backgroundColor;
    }
    resize(width, height){
        this.width = width;
        this.height = height;
    }
    move(positionX, positionY){
        this.positionX = positionX;
        this.positionY = positionY;
    }
    changeContent(textContent){
        this.textContent = textContent;
    }
    changeTextColor(textColor){
        this.textColor = textColor;
    }
    afficheTest() {
        let monElem = document.createElement('div')
        monElem.style.position = "fixed";
        monElem.style.top = this.positionY + "px";
        monElem.style.left = this.positionX + "px";
        monElem.style.width = this.width + "px";
        monElem.style.height = this.height + "px";
        monElem.style.backgroundColor = this.backgroundColor;
        monElem.style.padding = "5px";
        monElem.style.color = this.textColor;
        monElem.style.borderRadius = "5px";
        monElem.innerHTML = this.textContent;
        document.body.appendChild(monElem);
    }
}


monTest = new Postit('red', 'yellow', 'ne pas oublier', 200, 200, 40, 100);
monTest.afficheTest();


