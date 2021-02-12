/*********************************************************************/
/*  Init   */
/***********/
_id = function(id){return document.getElementById(id);};

_tn = function(tn){return document.getElementsByTagName(tn);};

_n  = function(n) {return document.getElementsByName(n);};

_ce  = function(el) {return document.createElement(el);};



/*********************************************************************/
/*  Event  */
/***********/

// Ferme le menu quand on choisie une catégorie
function CloseMenu(){
    _id("LIconMenu").src = "./icon/menu-mobile.png";
    _id("menu").classList.remove('displayBlock');
    _id("menu").classList.add('displayNone');
}

// Animation Prompt
function changeColumnColor(className,color) {
    let classes = document.getElementsByClassName(className);
    for(let i = 0; i < classes.length ; i++) {
        classes[i].style.backgroundColor = color;
    }
}

function prompt(){
    setTimeout(() => {
        changeColumnColor('Prompt','transparent');
        setTimeout(() => {
            changeColumnColor('Prompt','#23BBE4');
            prompt();
        },800);
    },800);
}
prompt();

/*********************************************************************/
/* Loader  */
/***********/
function LoaderFinish() {
    setTimeout(() => {
        _id("Loader").classList.remove('loader');
        _id("Loader").classList.add('displayNone');
        _id("PromptLoader").classList.remove('Prompt');
        if(screen.width > '992' && screen.height > '768'){
            _id("html").style.backgroundImage = 'url("./background-desktop-progressive.jpeg")';
        }else{
            _id("html").style.backgroundImage = 'url("./background-mobile-progressive.jpeg")';
        }
    },1000);
}
