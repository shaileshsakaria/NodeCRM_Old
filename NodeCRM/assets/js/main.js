var app = angular.module('app', ['app-two']);
app.run(['$rootScope', '$state', '$stateParams', '$http', '$localStorage', '$modal', '$timeout', '$filter',
function ($rootScope, $state, $stateParams, $http, $localStorage, $modal, $timeout, $filter) {

    // keep user logged in after page refresh
    $rootScope.authorizationToken = $localStorage.token || {};

    //Setting local Time format
    $rootScope.rootdateFormat = "MM/dd/yyyy";

    $rootScope.ApiURL = _configRootUrl;

    // Attach Fastclick for eliminating the 300ms delay between a physical tap and the firing of a click event on mobile browsers
    //FastClick.attach(document.body);

    // Set some reference to access them from any scope
    $rootScope.authorizationToken = $localStorage.token || {};
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
   
    if ($localStorage.userinfo) {
        $rootScope.userinfo = $localStorage.userinfo;
    }

    if ($rootScope.authorizationToken) {
        $http.defaults.headers.common['Authorization'] = $rootScope.authorizationToken;
    }

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

        if ($rootScope.authorizationToken)
            $http.defaults.headers.common['Authorization'] = $rootScope.authorizationToken;

        // verify is user logged in
        if (toState.data && toState.data.requiresLogin) {
            var data = $localStorage.token;
            if (!$localStorage.token) {
                e.preventDefault();
                $state.go(UrlConstant.User.Login);
            }
            else {

                var data = { "token": $localStorage.token };
                $http.post($rootScope.ApiURL + '/api/User/verifytoken', data).success(function (data, status) {
                    if (data) {
                        if (!data.loggedin)
                            $state.go(UrlConstant.User.Login);
                    }
                })
            }
        }
    });
    // GLOBAL APP SCOPE
    // set below basic information
    $rootScope.app = {
        name: 'Draw21.Net Admin', // name of your project
        author: 'Draw21.Net', // author's name or company name
        description: '', // brief description
        version: '1.0', // current version
        year: ((new Date()).getFullYear()), // automatic current year (for copyright information)
        isMobile: (function () {// true if the browser is a mobile device
            var check = false;
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                check = true;
            };
            return check;
        })(),
        layout: {
            isNavbarFixed: true, //true if you want to initialize the template with fixed header
            isSidebarFixed: true, // true if you want to initialize the template with fixed sidebar
            isSidebarClosed: false, // true if you want to initialize the template with closed sidebar
            isFooterFixed: false, // true if you want to initialize the template with fixed footer
            theme: 'theme-5', // indicate the theme chosen for your project
            logo: '/assets/images/logo/logo.png', // relative path of the project logo
        }
    };


    $rootScope.logout = function () {
        $localStorage.$reset();
        $state.go('login.signin');
    };


}]);
// translate config
//app.config(['$translateProvider',
//function ($translateProvider) {

//    // prefix and suffix information  is required to specify a pattern
//    // You can simply use the static-files loader with this pattern:
//    //$translateProvider.useStaticFilesLoader({
//    //    prefix: 'assets/i18n/',
//    //    suffix: '.json'
//    //});

//    // Since you've now registered more then one translation table, angular-translate has to know which one to use.
//    // This is where preferredLanguage(langKey) comes in.
//    $translateProvider.preferredLanguage('en');

//    // Store the language in the local storage
//    $translateProvider.useLocalStorage();

//    // Enable sanitize
//    $translateProvider.useSanitizeValueStrategy('sanitize');

//}]);
// Angular-Loading-Bar
// configuration
//app.config(['cfpLoadingBarProvider',
//function (cfpLoadingBarProvider) {
//    cfpLoadingBarProvider.includeBar = true;
//    cfpLoadingBarProvider.includeSpinner = false;

//}]);

app.factory('authHttpResponseInterceptor', ['$q', '$location', '$localStorage', '$rootScope', function ($q, $location, $localStorage, $rootScope) {
    return {
        response: function (response) {
            if (response.status === 401) {
                $localStorage.$reset();
                //$rootScope.user = undefined;
                $location.path('/signin');//.search('returnTo', $location.path());
                //console.log("Response 401");
            }
            return response || $q.when(response);
        },
        responseError: function (rejection) {
            if (rejection.status === 401) {
                $localStorage.$reset();
                //console.log("Response Error 401",rejection);
                $location.path('/signin');//.search('returnTo', $location.path());
            }
            return $q.reject(rejection);
        }
    }
}]);

app.filter('NumberTrunc', function () {
    return function (Number, Precision) {
        return (Math[(Number * Math.pow(10, Precision)) < 0 ? 'ceil' : 'floor'](Number * Math.pow(10, Precision))) / Math.pow(10, Precision).toFixed(Precision);
    };
});