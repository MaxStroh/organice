//initialise globals
var templates = {};
var controllers = {};
var views = {};

window.onload = function(){
    //register router
    window.addEventListener(
        "hashchange",
        function(){utils.router()}
    );

    utils.router();
};
