angular.module("TicketApp").controller("TicketController", [
    '$scope',
    'TicketService',
    function ($scope, TicketService) {
        $scope.quickTest = "Tickets coming soon!";
        $scope.tickets = TicketService.getList();
    }
]);