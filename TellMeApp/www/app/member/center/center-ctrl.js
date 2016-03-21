angular.module('tellme')
    .controller('memberCenterControll', ['$scope', '$state', '$ionicHistory',function ($scope, $state, $ionicHistory) {
            $scope.collection = function () {
                $state.go('memberCollection');
            }
        }]);