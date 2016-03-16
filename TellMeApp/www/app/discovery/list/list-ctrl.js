angular.module('tellme')
    .controller('discoryListController', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {
        $scope.goBack = function () {
            $ionicHistory.goBack();
        }

        $scope.search = function () {
            $state.go('search');
        }

        $scope.toDetail = function(did){
            $state.go('discoveryDetail', { 'did': did});
        }
    }])
