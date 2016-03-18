angular.module('tellme')
    .controller('hotelCartControll', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {

        $scope.count = 1;

        $scope.goBack = function () {
            $ionicHistory.goBack();
        }
        $scope.sub = function () {
            if ($scope.count > 1) {
                $scope.count--;
            }
        }
        $scope.add = function () {
            if ($scope.count < 1000) {
                $scope.count++;
            }
        }

        $scope.order = function () {
            $state.go('hotelOrder');
        }
        
    }])
