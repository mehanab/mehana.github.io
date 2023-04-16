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

class setAnnouncer
{
    constructor(element) {
        this.element = element;
    }
    
    setStyle() 
    {
        if (this.element instanceof HTMLCollection) 
        {
            for(let item of this.element)
            {
                item.style.strokeDashoffset = 1;
            }
            
        }else{
            this.element.style.strokeDashoffset = 1;
        }
    }

    setListener()
    {
        if (this.element instanceof HTMLCollection) 
        {
            window.addEventListener("load", (event) => {
                for(let item of this.element)
                {
                    item.style.strokeDashoffset = 0;
                }  
            }, {once: true});

        }else{
            this.element.style.strokeDashoffset = 0;
        }
    }
}



function docReady() {
    // see if DOM is already available
    let docState = document.readyState;
    if (docState == "complete" || docState == "interactive") {

        let announcer_filled = document.getElementsByClassName("announcer_filled");
        let announcer = new setAnnouncer(announcer_filled);
        announcer.setStyle();
        announcer.setListener();
        

        setTimeout(()=>{
            document.getElementById("by_announcer").style.display ="none";
            let div = document.getElementById("main-content");
            let writeBonjour = new WritingInterval(div.getElementsByTagName('h1')[0]);
            let writePresentation = new WritingInterval(div.getElementsByTagName('h2')[0]);
            let writeProf = new WritingInterval(div.getElementsByTagName('p')[0]);

            // let announcer_text = document.getElementsByClassName("announcer_text")
            
            // for (let item of announcer_text) 
            // {
            //     item.style.opacity = 0;
            // }
    
            setTimeout(()=>{
                // for (let item of announcer_text) 
                // {
                //     item.style.opacity = 1;
                // }
                let rec_filled = document.getElementsByClassName("filled")[0];
                rec_filled.style.strokeDashoffset = 1;
                rec_filled.style.strokeDashoffset = 0;
                writeBonjour.setDisplay();
                writeBonjour.start();
                setTimeout(()=>{
                    writePresentation.setDisplay();
                    writePresentation.start(); 
                    setTimeout(()=>{
               
                        writeProf.setDisplay();
                        writeProf.start(); 
                    },  1000);
                },  500);
                 
            }, 500);
            
        }, 3000);
            
    }
    else {
        document.addEventListener("DOMContentLoaded", ()=>{ docReady()});
    }
}   
docReady();