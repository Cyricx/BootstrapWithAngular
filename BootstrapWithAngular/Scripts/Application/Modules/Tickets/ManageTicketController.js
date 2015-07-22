angular.module("TicketApp").controller("ManageTicketController", [
    '$scope',
    '$route',
    'TicketService',
    function ($scope, $route, TicketService) {
        var id = $route.current.params.id;

        $scope.title = "Manage Ticket #" + id;

        //$scope.item = TicketService.getItem(id);

        //Fix to parse json dates
        TicketService.getItem(id).$promise.then(function (response) {
            response.SprintDate = new Date(response.SprintDate);
            $scope.item = response;
        });

    }
]);