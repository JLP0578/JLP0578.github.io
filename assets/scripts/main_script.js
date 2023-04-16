let id_LIconMenu = _id('LIconMenu');
let id_menu = _id('menu');
let cn_Prompt = _cn('Prompt');

window.addEventListener("DOMContentLoaded", () => {
    console.info("DOM fully loaded and parsed, start");
    // prompt();
    loader();





});

function loader() {
    if(islocalServer()) {
        console.info("It's a local server!");
        emulDisabledLoadScreen();
    } else {
        disabledLoadScreen();
    }
}

function islocalServer(){
    let result = false;
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === "") {
        result = true;
    }
    
    return result;
}

function emulDisabledLoadScreen() {
    setTimeout(() => {
        disabledLoadScreen();
    },1000);
}

function disabledLoadScreen() {
    _id("Loader").classList.remove('loader');
    _id("Loader").classList.add('displayNone');
    _id("PromptLoader").classList.remove('Prompt');
}

// Ferme le menu quand on choisie une catégorie
function CloseMenu(){
    _id("LIconMenu").src = "./icon/menu-mobile.png";
    _id("menu").classList.remove('displayBlock');
    _id("menu").classList.add('displayNone');
}

// Animation menu
_id('LIconMenu').addEventListener('click', function () {
    //ouverture
    if (_id('menu').classList.contains('displayNone')) {

        // change le logo menu
        _id("LIconMenu").src = "./assets/images/action-icons/close-mobile.png";

        //affiche
        _id("menu").classList.remove('displayNone');
        _id("menu").classList.add('displayBlock');
    }
    // fermeture
    else if (_id('menu').classList.contains('displayBlock')) {
        // change le logo menu
        _id("LIconMenu").src = "./assets/images/action-icons/menu-mobile.png";

        //affiche
        _id("menu").classList.remove('displayBlock');
        _id("menu").classList.add('displayNone');
    }
});