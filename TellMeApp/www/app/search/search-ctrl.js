angular.module('tellme')
    .controller('searchControll', ['$scope', '$state', '$ionicHistory', '$window', function ($scope, $state, $ionicHistory, $window) {
        $scope.goBack = function () {
            $ionicHistory.goBack();
        }
        
    }])
