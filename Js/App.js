function title2(){
        let tab = [];
        let div = document.getElementById("main-content");
        let titleH1Span = document.getElementsByClassName('cursor');
        titleH1Span[0].style.display = 'none';
        let titleH2 = div.getElementsByTagName('h2')[0];
        let span = document.createElement('span');
        span.className  = "cursor";
        span.innerHTML = "_";
        span.style.fontSize = "larger"
        titleH2.appendChild(span);

}



function docReady() {
    // see if DOM is already available
    let docState = document.readyState;
    if (docState == "complete" || docState == "interactive") {
     
        setTimeout(()=>{

            title2();
            // Le texte tu H2
            let h2 = "Je m'appelle Mehana Abdelmoula";
            let tab = h2.split('');

            let i = 0;
            let intervalId = null;
            let div = document.getElementById("main-content");
            let titleH2 = div.getElementsByTagName('h2')[0];
            let span = titleH2.innerHTML;

            function finish() {
                clearInterval(intervalId);
            
            }

            function bip() {
                if(i >= tab.length) finish();
                else {	
                    let span1 = titleH2.getElementsByClassName('cursor')[0];
                    span1.remove();
                    titleH2.innerHTML = titleH2.innerHTML+ tab[i] + span;
                }	
                i++;
            }

            function start(){
                intervalId = setInterval(bip, 200);
            }
            start();
            
        }, 5000);
    }
    else {
        document.addEventListener("DOMContentLoaded", ()=>{ docReady()});
    }
}   
docReady();