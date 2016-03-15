angular.module('tellme')
    .controller('homeControll', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        /*跳转“定位页面”*/
        $scope.goToLocation = function () {
            $state.go('location');
        }
        /*跳转“搜索页面”*/
        $scope.goToSearch = function () {
            $state.go('search');
        }
    }])
