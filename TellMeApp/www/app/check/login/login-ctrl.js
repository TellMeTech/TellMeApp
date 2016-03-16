angular.module('tellme')
    .controller('loginControll', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        $scope.goBack = function () {
            $ionicHistory.goBack();
        }
        $scope.register = function () {
            $state.go('register');
        }
    }])
