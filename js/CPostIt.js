class Postit {
    backgroundColor;
    height;
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

/**
* Affichage textuel du postIt - Sérialisation du postIt
*/
   toString() {
    return '{"x":' + this.positionX + ',"y":' + this.positionY + ',"width":"' + this.width + '","height":' + this.height + '","backgroundcolor":' + this.backgroundColor + '","textcolor":' + this.textColor +'","textcontent":'+this.textcontent +'"}'
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

        if (document.getElementById("postit" + this.numpostit) == null) {

        monElem = document.createElement('div');
        creation = true;
        }
        else {

        monElem = document.getElementById("postit" + this.numpostit);
        }

        monElem.id = "postit" + this.numpostit;
        monElem.class = "classpostit"
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
        jdeAttachElem(monElem.id, "div", ["zoneContent"], "zoneContent"+this.numpostit) 
        jdeAttachElem(monElem.id, "div", ["basDroite"], "menBas"+this.numpostit) 

        jdeAttachElem("menBas"+this.numpostit, 'i', ["fas", "fa-arrows-alt"], "", () => {
            console.log("Move sur postIt");
            etatMove = true;
            idMove = this.numpostit;
        });
    
        jdeAttachElem("menBas"+this.numpostit, 'i', ["fas", "fa-bars"], "", () => {
            console.log("resize sur postIt");  
            etatResize = true;
            idResize = this.numpostit;
        });

        jdeAttachElem("menBas"+this.numpostit, 'i', ["fas", "fa-edit"], "", () => {
            console.log("content sur postIt");
            etatChangeContent = true;
            this.textContent = window.prompt('entrez un texte');
            console.log(this.textContent);
            jdeAttachElem("menBas"+this.numpostit, "p", ["content"], "content")
            document.getElementById("zoneContent"+this.numpostit).innerHTML = content;
        });
    }
}
