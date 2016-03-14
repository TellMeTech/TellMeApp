angular.module('tellme')
    .controller('startControll', ['$scope', '$state', '$ionicSlideBoxDelegate', '$ionicHistory', '$ionicGesture', function ($scope, $state, $ionicSlideBoxDelegate, $ionicHistory, $ionicGesture) {

        $scope.startImages = [
            {
            index:1,
            imageUrl:"images/startPage/start1.png"
            }, {
                index: 2,
                imageUrl: "images/startPage/start2.png"
            }, {
                index: 3,
                imageUrl: "images/startPage/start3.png"
            }
        ];
        

        $scope.slideHasChanged = function (index) {
            if (index == 2) {
                $timeout(function () {
                    $ionicSlideBoxDelegate.$getByHandle('slide2').stop();
                }, 3000);
                
            }
        }
        
        $scope.repeatDone = function () {
            $ionicSlideBoxDelegate.update();
        }
        //跳转到首页
        $scope.goToHome = function () {
            $state.go('menu');
        }
    }]);