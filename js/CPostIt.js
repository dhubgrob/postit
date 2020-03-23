class Postit {
    backgroundColor;
    heigth;
    width;
    textColor;
    textContent;
    positionX;
    positionY;
    numpostit;

    constructor(backgroundColor, textColor, textContent, height, width, positionX, positionY,numpostit) {
        this.backgroundColor = backgroundColor;
        this.height = height;
        this.width = width;
        this.textColor = textColor;
        this.textContent = textContent;
        this.positionX = positionX;
        this.positionY = positionY;
        this.numpostit = numpostit
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
        let monElem = document.createElement('div');
    
        let creation = false;

        if (document.getElementById('testpostit') == null) {

        monElem = document.createElement('div');
        creation = true;
        }
        else {

        monElem = document.getElementById('testpostit');
        }

        monElem.id = "testpostit";
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
        jdeAttachElem("testpostit", "div", ["zoneContent"], "zoneContent") 
        jdeAttachElem("testpostit", "div", ["basDroite"], "menBas") 

        jdeAttachElem("menBas", 'i', ["fas", "fa-arrows-alt"], "", () => {
            console.log("Move sur postIt");
            etatMove = true;
        });
    
        jdeAttachElem("menBas", 'i', ["fas", "fa-bars"], "", () => {
            console.log("resize sur postIt");  
            etatResize = true;
        });

        jdeAttachElem("menBas", 'i', ["fas", "fa-edit"], "", () => {
            console.log("content sur postIt");
            etatChangeContent = true;
            this.textContent = window.prompt('entrez un texte');
            console.log(this.textContent);
            jdeAttachElem("menBas", "p", ["content"], "content")
            document.getElementById("zoneContent").innerHTML = content;
        });
    }
}
