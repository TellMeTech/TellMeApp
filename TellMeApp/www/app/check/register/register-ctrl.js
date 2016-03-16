angular.module('tellme')
    .controller('registerControll', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        $scope.goBack = function () {
            $ionicHistory.goBack();
        }
    }])
