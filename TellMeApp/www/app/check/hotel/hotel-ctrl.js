angular.module('tellme')
    .controller('hotelControll', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        
        $scope.location = function () {
            $state.go('location');
        }

        $scope.goBack = function () {
            $ionicHistory.goBack();
        }

        $scope.search = function () {
            $state.go('search');
        }

        $scope.banner = function () {
            $state.go('hotelBanner');
        }
        $scope.supermarket = function () {
            $state.go('hotelSupermarket');
        }
        
    }])
