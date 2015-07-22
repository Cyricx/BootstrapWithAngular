﻿angular.module("TicketApp").service("TicketService", [
    '$resource',
    function ($resource) {
        //A service can be thought of as a repository.
        //it returns an object

        //the $resource service will give us a resourceAccessObject
        //When you call the resource method you can pass the url, parameters and configuration
        var resourceAccessObject = $resource('http://localhost:3383/api/tickets/:TicketID',
            { id: '@TicketID' },
            { save: { method: "PUT" }, create: { method: "POST" } }
            );

        return {
            getList: function () {
                //return ['Ticket One', 'Ticket Two', 'Ticket Three'];
                return resourceAccessObject.query();
            },
            updateItem: function (item) {
                return item.$save();
            },
            getItem: function (id) {
                return resourceAccessObject.get({ TicketID: id });
            }
        };
    }
]);