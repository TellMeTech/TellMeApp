angular.module('tellme')
    .controller('checkinCenterControll', ['$scope', '$state', function ($scope, $state) {
        
        $scope.search = function () {
            $state.go('search');
        }

        $scope.checkin = function () {
            $state.go('login');
        }
    }])
