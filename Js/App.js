// Class to write
class WritingInterval {
    constructor(element) {
        this.element = element;
        this.tabOfstringToWrite = [];
        this.setTimeIntervalId = null;
        this.run = 0;
    }
    
    finish() {
        clearInterval(this.setTimeIntervalId);
        this.setTimeIntervalId = null;
    }

    setDisplay()
    {
        this.tabOfstringToWrite = this.element.innerText.split('');
        this.element.innerText = "";
        this.element.style.display = "block";
        //create span
        let span = document.createElement('span');
        span.className  = "cursor";
        span.innerHTML = "_";
        span.style.fontSize = "larger"
        this.element.appendChild(span);
        
    }
    start(){
        this.setTimeIntervalId = setInterval(()=> {
            if(this.run >= this.tabOfstringToWrite.length) 
            {
                this.finish();
            }else 
            {
                let span = this.element.getElementsByClassName('cursor')[0];
                if(span)
                {
                    span.remove();
                }
                
                this.element.innerHTML = this.element.innerHTML+ this.tabOfstringToWrite[this.run]
                 + span.outerHTML;
                 this.run++;
            }
        }, 40);
    }
}



function docReady() {
    // see if DOM is already available
    let docState = document.readyState;
    if (docState == "complete" || docState == "interactive") {

            // Le texte tu H2
            
            let div = document.getElementById("main-content");
            let writeBonjour = new WritingInterval(div.getElementsByTagName('h1')[0]);
            let writePresentation = new WritingInterval(div.getElementsByTagName('h2')[0]);
            let writeProf = new WritingInterval(div.getElementsByTagName('p')[0]);
            let time = 1000;

        setTimeout(()=>{
            writeBonjour.setDisplay();
            writeBonjour.start(); 
        }, time);

       
        setTimeout(()=>{
            writePresentation.setDisplay();
            writePresentation.start(); 
        },  time*4); 

        setTimeout(()=>{
           
            writeProf.setDisplay();
            writeProf.start(); 
        },  time*8);
    }
    else {
        document.addEventListener("DOMContentLoaded", ()=>{ docReady()});
    }
}   
docReady();