controllers.showAllEvents = function(data, params){
    const allEvents = JSON.parse(data);

    const templateContext = [];
    for (let i = 0; i < allEvents.length; i++){
        const post = allEvents[i];
        const item = {
            "link": utils.get_link(post),
            "title": post.post.replace(/-/g, " "),
            "snippet": post.snippet,
            "published_on": post.added_on,
        };
        templateContext.push(item);
    }

    //get all events
    const finalContent = templates.allEvents(templateContext);

    utils.render(
        "page-content",
        finalContent
    );
};

controllers.showLoader = function(element) {
    utils.render(
        element,
        templates.loader()
    );
};