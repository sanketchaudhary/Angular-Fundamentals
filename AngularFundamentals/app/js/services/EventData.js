eventsApp.factory('eventData', function($http, $resource){
    return {
        // $http call to retrieve data
        /* getEvent: function(){
            return $http({method: 'GET', url: '/data/event/1'});
        } */

        getEvent: function(){
            return $resource('/data/event/:id', {id:'@id'}).get({id:1});
        }
    }
});