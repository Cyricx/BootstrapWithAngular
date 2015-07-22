angular.module("TicketApp").controller("ManageTicketController", [
    '$scope',
    '$route',
    'TicketService',
    'TicketCategoryService',
    function ($scope, $route, TicketService, TicketCategoryService) {
        var id = $route.current.params.id;

        $scope.title = "Manage Ticket #" + id;

        //$scope.item = TicketService.getItem(id);

        //Fix to parse json dates
        TicketService.getItem(id).$promise.then(function (response) {
            response.SprintDate = new Date(response.SprintDate);
            $scope.item = response;
        });

        $scope.categories = TicketCategoryService.getList();
    }
]);