'use strict';
/**
 * Clip-Two Main Controller
 */
app.controller('AppCtrl', ['$rootScope', '$scope', '$state', '$localStorage', '$window', '$document', '$timeout', 'urlConstant', '$modal', '$http',
function ($rootScope, $scope, $state, $localStorage, $window, $document, $timeout, urlConstant, $modal, $http) {
    // Loading bar transition
    // -----------------------------------
    var $win = $($window);

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        //start loading bar on stateChangeStart
        //cfpLoadingBar.start();

    });
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

        //stop loading bar on stateChangeSuccess
        event.targetScope.$watch("$viewContentLoaded", function () {

            //cfpLoadingBar.complete();
        });

        // scroll top the page on change state

        //$document.scrollTo(0, 0);

        if (angular.element('.email-reader').length) {
            angular.element('.email-reader').animate({
                scrollTop: 0
            }, 0);
        }

        // Save the route title
        $rootScope.currTitle = $state.current.title;
    });

    // State not found
    $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
        //$rootScope.loading = false;
        console.log(unfoundState.to);
        // "lazy.state"
        console.log(unfoundState.toParams);
        // {a:1, b:2}
        console.log(unfoundState.options);
        // {inherit:false} + default options
    });

    $rootScope.pageTitle = function () {
        return $rootScope.app.name + ' - ' + ($rootScope.currTitle || $rootScope.app.description);
    };

    // save settings to local storage
    if (angular.isDefined($localStorage.layout)) {
        $scope.app.layout = $localStorage.layout;

    } else {
        $localStorage.layout = $scope.app.layout;
    }
    $scope.$watch('app.layout', function () {
        // save to local storage
        $localStorage.layout = $scope.app.layout;
    }, true);

    //global function to scroll page up
    $scope.toTheTop = function () {

        //$document.scrollTopAnimated(0, 600);

    };

    // Function that find the exact height and width of the viewport in a cross-browser way
    var viewport = function () {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        };
    };
    // function that adds information in a scope of the height and width of the page
    $scope.getWindowDimensions = function () {
        return {
            'h': viewport().height,
            'w': viewport().width
        };
    };
    // Detect when window is resized and set some variables
    $scope.$watch($scope.getWindowDimensions, function (newValue, oldValue) {
        $scope.windowHeight = newValue.h;
        $scope.windowWidth = newValue.w;
        if (newValue.w >= 992) {
            $scope.isLargeDevice = true;
        } else {
            $scope.isLargeDevice = false;
        }
        if (newValue.w < 992) {
            $scope.isSmallDevice = true;
        } else {
            $scope.isSmallDevice = false;
        }
        if (newValue.w <= 768) {
            $scope.isMobileDevice = true;
        } else {
            $scope.isMobileDevice = false;
        }
    }, true);
    // Apply on resize
    $win.on('resize', function () {
        $scope.$apply();
    });

    $scope.LogOut = function () {
        $state.go('login.signin');
        $localStorage.$reset();
    }

    $scope.showMessage = function (errorMessage, type) {
        if (errorMessage == undefined)
            return;
        // type : success,warning,danger,info
        new PNotify({
            title: '',
            text: errorMessage,
            shadow: true,
            opacity: 1,
            addclass: "stack_top_right",
            type: type,
            stack: {
                "dir1": "down",
                "dir2": "left",
                "push": "top",
                "spacing1": 10,
                "spacing2": 10
            },
            width: "290px",
            delay: 1400
        });
    };
}]);
