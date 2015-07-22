﻿angular.module("TicketApp").service("TicketService", [
    '$resource',
    function ($resource) {
        //A service can be thought of as a repository.
        //it returns an object

        //the $resource service will give us a resourceAccessObject
        //When you call the resource method you can pass the url, parameters and configuration
        var resourceAccessObject = $resource('http://localhost:3383/api/tickets');

        return {
            getList: function () {
                //return ['Ticket One', 'Ticket Two', 'Ticket Three'];
                return resourceAccessObject.query();
            }
        };
    }
]);