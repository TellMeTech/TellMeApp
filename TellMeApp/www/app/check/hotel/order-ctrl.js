angular.module('tellme')
    .controller('hotelOrderControll', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {

        $scope.goBack = function () {
            $ionicHistory.goBack();
        }

        //$scope.search = function () {
        //    $state.go('search');
        //}
        $scope.pay = function () {
            
        }
        
    }])
