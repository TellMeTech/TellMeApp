angular.module('tellme')
    .controller('hotelProductControll', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {

        $scope.goBack = function () {
            $ionicHistory.goBack();
        }

        //$scope.search = function () {
        //    $state.go('search');
        //}
        
    }])
