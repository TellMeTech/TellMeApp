angular.module('tellme')
    .controller('menuControll', ['$scope', '$state',  function ($scope, $state) {
        $scope.home = function () {
            $state.go('menu.home');
        }
        $scope.discovery = function () {
            $state.go('menu.discovery');
        }
        $scope.check = function () {
            $state.go('menu.check');
        }
        $scope.member = function () {
            $state.go('menu.member');
        }

   }])