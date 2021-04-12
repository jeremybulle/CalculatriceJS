(function(){

    var windowHeight = window.innerHeight;
    var WindowWidth = window.innerWidth;
    var screenElem = document.getElementById("screen");
    var buttonTab = document.getElementsByTagName("button");
    var mainContainer = document.getElementById("container-main");

    mainContainer.style.fontSize = (WindowWidth*0.1) + "px";
    

    var getInput = (e) =>{
        if(screenElem.innerHTML === "0" || screenElem.innerHTML === "Error" || screenElem.innerHTML === "Not Implemented"){
            screenElem.innerHTML = e.currentTarget.innerHTML
        }else{
            screenElem.innerHTML += e.currentTarget.innerHTML
        }
        
    }

    var clearScreen = (e) => {
        screenElem.innerHTML = "0";
    }

    var displayResult = () => {
        if(screenElem.innerHTML.includes("/0")){
            screenElem.innerHTML = "Error";
        }else{
            screenElem.innerHTML = eval(screenElem.innerHTML);
        }
        
    }

    var reportResize = () =>{
        
        WindowWidth = window.innerWidth;
        mainContainer.style.fontSize = (WindowWidth*0.1) + "px";


    };

    var splitThousands = () =>{
        // if(screenElem.innerHTML.length > 3){
        //     var tempTab = new Array();
        //     for(var i =0; i < screenElem.innerHTML.length; i++){
        //         tempTab.push(screenElem.innerHTML[i]);
        //     }
        //     screenElem.innerHTML.split()
            
        //     var definitivArray = new Array();
        //     if(tempTab.length/3 >1){
        //         for(var i = tempTab.length-1; i >= 0; i--){
        //             definitivArray.unshift(tempTab[i]);
        //             if(i%3 === 0 && i != tempTab.length -1){
        //                 definitivArray.unshift("*");
        //             }
        //         }
        //     }


           
        //     screenElem.innerHTML = definitivArray.join('');
        // }
        screenElem.innerHTML = "Not Implemented";
    }

    if(buttonTab.length !=0){
        for(var i = 0 ; i < buttonTab.length; i++){
            if(buttonTab[i].id === "C" || buttonTab[i].id === "CE"){
                buttonTab[i].addEventListener("click",clearScreen);
            }
            else if(buttonTab[i].id === "="){
                buttonTab[i].addEventListener("click",displayResult);
            }else if(buttonTab[i].id == "Séparer millier *"){
                buttonTab[i].addEventListener("click",splitThousands);
            }
            else {
                buttonTab[i].addEventListener("click",getInput);
            }
            
        }
    }
    
    window.addEventListener('resize',reportResize);



})();