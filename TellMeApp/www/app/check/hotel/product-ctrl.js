angular.module('tellme')
    .controller('hotelProductControll', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {

        $scope.goBack = function () {
            $ionicHistory.goBack();
        }

        $scope.cart = function () {
            $state.go('hotelCart');
        }

        $scope.order = function () {
            $state.go('hotelOrder');
        }
        
    }])
