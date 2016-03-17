angular.module('tellme')
    .controller('hotelBannerControll', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        
        $scope.location = function () {
            $state.go('location');
        }

        $scope.goBack = function () {
            $ionicHistory.goBack();
        }

        $scope.search = function () {
            $state.go('search');
        }

        
    }])
