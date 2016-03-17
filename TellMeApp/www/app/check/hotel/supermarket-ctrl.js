angular.module('tellme')
    .controller('hotelSupermarketControll', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {

        $scope.goBack = function () {
            $ionicHistory.goBack();
        }

        $scope.search = function () {
            $state.go('search');
        }

        $scope.product = function () {
            $state.go('hotelProduct');
        }
        
    }])
