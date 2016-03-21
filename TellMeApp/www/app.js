angular.module('tellme', ['ionic','ionicLazyLoad'])
    .run(['$ionicPlatform', '$rootScope', '$location', '$ionicPopup', '$ionicHistory', function ($ionicPlatform, $rootScope, $location, $ionicPopup, $ionicHistory) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
        window.addEventListener('native.keyboardshow', function () {
            document.querySelector('div.tabs').style.display = 'none';
            angular.element(document.querySelector('ion-content.has-tabs')).css('bottom', 0);
        });
        window.addEventListener('native.keyboardhide', function () {
            var tabs = document.querySelectorAll('div.tabs');
            angular.element(tabs[0]).css('display', '');
        });

        $ionicPlatform.registerBackButtonAction(function (e) {
            function showConfirm() {
                var confirmPopup = $ionicPopup.confirm({
                    title: '<strong>退出应用?</strong>',
                    template: '你确定要退出应用吗?',
                    okText: '退出',
                    cancelText: '取消'
                });

                confirmPopup.then(function (res) {
                    if (res) {
                        ionic.Platform.exitApp();
                    } else {
                        // Don't close  
                    }
                });
            }
            //判断处于哪个页面时双击退出
            if ($location.path() == '/menu/home') {
                if ($rootScope.backButtonPressedOnceToExit) {
                    ionic.Platform.exitApp();
                } else {
                    $rootScope.backButtonPressedOnceToExit = true;
                    showConfirm('再按一次退出系统');
                    setTimeout(function () {
                        $rootScope.backButtonPressedOnceToExit = false;
                    }, 2000);
                }
            }
            else if ($ionicHistory.backView()) {
                $ionicHistory.goBack();
            } else {
                $rootScope.backButtonPressedOnceToExit = true;
                showConfirm('再按一次退出系统');
                setTimeout(function () {
                    $rootScope.backButtonPressedOnceToExit = false;
                }, 2000);
            }
            e.preventDefault();
            return false;
        }, 101);

        var onDeviceReady = function () {
            //判断是否用户登录
            var userId = window.localStorage.getItem('userId');
            if (!userId) {
                //没有，则设置为游客，id为0
                window.localStorage.setItem('userId', 0);
            }
            var appLaunchCount = window.localStorage.getItem('launchCount');

            if (appLaunchCount) {
            } else {
                window.localStorage.setItem('launchCount', 1);
            }
            setTimeout(function () {
                navigator.splashscreen.hide();
            }, 4000);

        }
        document.addEventListener("deviceready", onDeviceReady, false);

    }])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$ionicConfigProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider) {
            $ionicConfigProvider.tabs.position('bottom');
            //禁止侧滑后退事件
            $ionicConfigProvider.views.swipeBackEnabled(false);
            $stateProvider
             //测试
            .state('test', { url: '/test', templateUrl: 'app/test/test.html', controller: 'testControll' })
            //首次启动页面
            .state('start', { url: '/start', templateUrl: 'app/start/start.html', controller: 'startControll' })
            //定位
            .state('location', { url: '/location', templateUrl: 'app/map/location/location.html', controller: 'locationControll' })
            //搜索
            .state('search', { url: '/search', templateUrl: 'app/search/search.html', controller: 'searchControll' })
            //发现详情
            .state('discoveryDetail', { url: '/discoveryDetail?did', templateUrl: 'app/discovery/detail/detail.html', controller: 'discoryDetailController' })
            //登录
            .state('login', { url: '/login', templateUrl: 'app/check/login/login.html', controller: 'loginControll' })
            //注册
            .state('register', { url: '/register', templateUrl: 'app/check/register/register.html', controller: 'registerControll' })
            //酒店
            .state('hotel', { url: '/hotel', templateUrl: 'app/check/hotel/hotel.html', controller: 'hotelControll' })
            //酒店banner
            .state('hotelBanner', { url: '/hotelBanner', templateUrl: 'app/check/hotel/banner.html', controller: 'hotelBannerControll' })
            //酒店超市
            .state('hotelSupermarket', { url: '/hotelSupermarket', templateUrl: 'app/check/hotel/supermarket.html', controller: 'hotelSupermarketControll' })
            //酒店商品
            .state('hotelProduct', { url: '/hotelProduct', templateUrl: 'app/check/hotel/product.html', controller: 'hotelProductControll' })
            //酒店购物车
            .state('hotelCart', { url: '/hotelCart', templateUrl: 'app/check/hotel/cart.html', controller: 'hotelCartControll' })
            //酒店订单
            .state('hotelOrder', { url: '/hotelOrder', templateUrl: 'app/check/hotel/order.html', controller: 'hotelOrderControll' })
            //用户收藏
            .state('memberCollection', { url: '/memberCollection', templateUrl: 'app/member/collection/collection.html', controller: 'memberCollectionControll' })
            //菜单
            .state('menu', { url: '/menu', templateUrl: 'app/menu/menu.html', controller: 'menuControll' })
                //服务指南
                .state('menu.home', { url: '/home', views: { 'home-tab': { templateUrl: 'app/home/home.html', controller: 'homeControll' } } })
                //发现
                .state('menu.discovery', { url: '/discovery', views: { 'discovery-tab': { templateUrl: 'app/discovery/list/list.html', controller: 'discoryListController' } } })
                //入住
                .state('menu.check', { url: '/check', views: { 'check-tab': { templateUrl: 'app/check/center/center.html', controller: 'checkinCenterControll' } } })
                //会员
                .state('menu.member', { url: '/member', views: { 'member-tab': { templateUrl: 'app/member/center/center.html', controller: 'memberCenterControll' } } })

            ;
            var appLaunchCount = window.localStorage.getItem('launchCount');
            //需要进行页面测试，则修改下面的路由即可
            if (appLaunchCount) {
                $urlRouterProvider.otherwise('/menu');
            } else {
                $urlRouterProvider.otherwise('/start');
            }
            //}
            /*修改put 和 post 的数据传递方式*/
            $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

            /*修改默认的transformRequest 否则后台收不到值 */
            $httpProvider.defaults.transformRequest = [function (data) {

                var param = function (obj) {
                    var query = '';
                    var name, value, fullSubName, subName, subValue, innerObj, i;

                    for (name in obj) {
                        value = obj[name];

                        if (value instanceof Array) {
                            for (i = 0; i < value.length; ++i) {
                                subValue = value[i];
                                fullSubName = name + '[' + i + ']';
                                innerObj = {};
                                innerObj[fullSubName] = subValue;
                                query += param(innerObj) + '&';
                            }
                        } else if (value instanceof Object) {
                            for (subName in value) {
                                subValue = value[subName];
                                fullSubName = name + '[' + subName + ']';
                                innerObj = {};
                                innerObj[fullSubName] = subValue;
                                query += param(innerObj) + '&';
                            }
                        } else if (value !== undefined && value !== null) {
                            query += encodeURIComponent(name) + '='
                                       + encodeURIComponent(value) + '&';
                        }
                    }

                    return query.length ? query.substr(0, query.length - 1) : query;
                };

                return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
            }];
        }]);
