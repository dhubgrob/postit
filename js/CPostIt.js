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
        monElem.setAttribute("id", "testPostit");
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


// affichage de la pile de postit
monTest = new Postit('red', 'yellow', '', 200, 200, 40, 100);
monTest.afficheTest();

// création d'un événement : si on clique sur la pile de postit...
document.getElementById('testPostit').addEventListener('mousedown', event => {
// on crée une copie du postit
    let monNouvelElem = document.createElement('div');
    monNouvelElem.setAttribute("id", "newPostit");
    monNouvelElem.style.position = "fixed";
    monNouvelElem.style.top = monTest.positionY + "px";
    monNouvelElem.style.left = monTest.positionX + "px";
    monNouvelElem.style.width = monTest.width + "px";
    monNouvelElem.style.height = monTest.height + "px";
    monNouvelElem.style.backgroundColor = monTest.backgroundColor;
    monNouvelElem.style.padding = "5px";
    monNouvelElem.style.color = monTest.textColor;
    monNouvelElem.style.borderRadius = "5px";
    monNouvelElem.innerHTML = monTest.textContent;
    monNouvelElem.style.zIndex = 1000;
    document.body.appendChild(monNouvelElem);
// avec un logo delete dessus. Marche pas top

/*

    let logoDelete = document.createElement('div');
    logoDelete.setAttribute("id", "logo-delete");
    logoDelete.style.position = "fixed";
    logoDelete.style.backgroundImage = "url('img/delete.jpg')";
    logoDelete.style.backgroundSize = 'contain';
    logoDelete.style.top = (monTest.positionY + 50) + "px";
    logoDelete.style.left = (monTest.positionY + 50) + "px";
    logoDelete.style.width = "15px";
    logoDelete.style.height = "15px";
    logoDelete.style.zIndex = 1001;
    document.getElementById('newPostit').appendChild(logoDelete);
*/    
// on lui applique une fonction pour le clic de départ sur la pile de postit
    moveAt(event.pageX, event.pageY);

function moveAt(pageX, pageY) {
    monNouvelElem.style.left = pageX - monNouvelElem.offsetWidth / 2 + 'px';
    monNouvelElem.style.top = pageY - monNouvelElem.offsetHeight / 2 + 'px';
   // logoDelete.style.left = pageX - monNouvelElem.offsetWidth / 2 + 'px';
    // logoDelete.style.top = pageY - monNouvelElem.offsetHeight / 2 + 'px';
  }
  

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  monNouvelElem.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    monNouvelElem.onmouseup = null;
  };

});


