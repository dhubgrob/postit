class Postit {
    backgroundColor;
    heigth;
    width;
    textColor;
    textContent;
    positionX;
    positionY;

    constructor(backgroundColor, height, width, textColor, textContent, positionX, positionY) {
        this.backgroundColor = 'red';
        this.height = 200;
        this.width = 200;
        this.textColor = 'yellow';
        this.textContent = 'ne pas oublier !';
        this.positionX = 120;
        this.positionY = 160;
    }

    changeBackgroundColor(backgroundColor){
        this.backgroundColor = 'red';
    }
    resize(width, height){
        this.width = 200;
        this.height = 200;
    }
    move(positionX, positionY){
        this.positionX = positionX;
        this.positionY = positionY;
    }
    changeContent(textContent){
        this.textContent = textContent;
    }
    changeTextColor(textColor){
        this.textColor = 'yellow';
    }
    afficheTest() {
        let monElem = document.createElement('div')
        monElem.style.top = this.y + "px";
        monElem.style.left = this.x + "px";
        monElem.style.width = this.width + "px";
        monElem.style.height = this.height + "px";
        monElem.style.backgroundColor = this.backgroundColor;
        monElem.style.padding = "5px";
        monElem.style.color = this.textColor;
        monElem.innerHTML = textContent;
        document.body.appendChild(monElem);
    }
}



/*

class ClasseTest {
    x;
    y;
    vitesse;
    couleur;

    constructor(x, y, vitesse, couleur) {
        this.x = x;
        this.y = y;
        this.vitesse = vitesse;
        this.couleur = couleur;
    }

    changeVitesse(vitesse) {
        this.vitesse = vitesse;
    }

    changePlace(x, y) {
        this.x = x;
        this.y = y;
    }

    changeCouleur(coul) {
        this.couleur = coul;
    }

    afficheTest() {
        let monElem = document.createElement('div')
        monElem.style.position = "fixed";
        monElem.style.top = this.y + "px";
        monElem.style.left = this.x + "px";
        monElem.style.width = "150px";
        monElem.style.height = "150px";
        monElem.style.backgroundColor = this.couleur;
        monElem.style.padding = "5px";
        monElem.style.color = "black";
        monElem.innerHTML = "Je suis un objet de test, j'avance à " + this.vitesse + " Vroum";
        document.body.appendChild(monElem);
    }
}

monTest = new ClasseTest(100, 200, 30, 'red');
monTest.afficheTest();



*/