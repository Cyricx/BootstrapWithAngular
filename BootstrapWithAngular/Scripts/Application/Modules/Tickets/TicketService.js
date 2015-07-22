angular.module("TicketApp").service("TicketService", [
    function () {
        //A service can be thought of as a repository.
        //it returns an object

        return {
            getList: function () {
                return ['Ticket One', 'Ticket Two', 'Ticket Three'];
            }
        };
    }
]);