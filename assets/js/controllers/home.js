controllers.homePage = function(params){
    utils.render(
        "page-content",
        templates.home()
    );
};

controllers.showLoader = function(element) {
    utils.render(
        element,
        templates.loader()
    );
};