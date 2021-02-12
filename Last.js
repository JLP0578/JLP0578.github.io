// Animation menu
_id('LIconMenu').addEventListener('click', function () {
    //ouverture
    if (_id('menu').classList.contains('displayNone')) {

        // change le logo menu
        _id("LIconMenu").src = "./icon/close-mobile.png";

        //affiche
        _id("menu").classList.remove('displayNone');
        _id("menu").classList.add('displayBlock');
    }
    // fermeture
    else if (_id('menu').classList.contains('displayBlock')) {
        // change le logo menu
        _id("LIconMenu").src = "./icon/menu-mobile.png";

        //affiche
        _id("menu").classList.remove('displayBlock');
        _id("menu").classList.add('displayNone');
    }
});
