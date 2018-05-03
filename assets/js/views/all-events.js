views.allEvents = function(data, params){
    const eventsData = 'events.json';
    controllers.showLoader("page-content");
    controllers.showAllEvents(eventsData);
};