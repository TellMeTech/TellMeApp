angular.module('tellme')
    .controller('memberCollectionControll', ['$scope', '$state', '$ionicHistory',function ($scope, $state, $ionicHistory) {
            $scope.goBack = function () {
                $ionicHistory.goBack();
            }
        }]);