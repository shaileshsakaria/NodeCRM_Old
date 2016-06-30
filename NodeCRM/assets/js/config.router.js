'use strict';

/**
 * Config for the router
 */
app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', 'JS_REQUIRES', '$locationProvider',
function ($stateProvider, $urlRouterProvider, $httpProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, jsRequires, $locationProvider) {


    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;

    // LAZY MODULES

    //$ocLazyLoadProvider.config({
    //    debug: false,
    //    events: true,
    //    modules: jsRequires.modules
    //});

    $httpProvider.interceptors.push('authHttpResponseInterceptor');
    // APPLICATION ROUTES
    // -----------------------------------
    // For any unmatched url, redirect to /app/dashboard


    //$urlRouterProvider.otherwise("/app/dashboard");
    $urlRouterProvider.otherwise("/login/signin");
    //
    // Set up the states
    $stateProvider
        .state('app', {
            url: "/app",
            templateUrl: "assets/views/app.html",
            abstract: true
        })
        .state('app.dashboard', {
            url: "/dashboard",
            templateUrl: "assets/views/dashboard.html",
            title: 'Dashboard',
            data: { requiresLogin: true },
            //ncyBreadcrumb: { label: 'Dashboard' }
        })
         .state('app.customer', {
             url: "/customer",
             templateUrl: "assets/views/customer.html",
             title: 'Customer',
             data: { requiresLogin: true },
             //ncyBreadcrumb: {
             //    label: 'Customer'
             //}
         })
        //End Money Withdrawal Detail
	// Login routes
	.state('login', {
	    url: '/login',
	    template: '<div ui-view class="fade-in-right-big smooth"></div>',
	    abstract: true,
	    data: { requiresLogin: false }
	}).state('login.signin', {
	    url: '/signin',
	    templateUrl: "assets/views/login_login.html",
	    data: { requiresLogin: false }
	})



    // Generates a resolve object previously configured in constant.JS_REQUIRES (config.constant.js)
    //function loadSequence() {
    //    var _args = arguments;
    //    return {
    //        deps: ['$ocLazyLoad', '$q',
	//		function ($ocLL, $q) {
	//		    var promise = $q.when(1);
	//		    for (var i = 0, len = _args.length; i < len; i++) {
	//		        promise = promiseThen(_args[i]);
	//		    }
	//		    return promise;

	//		    function promiseThen(_arg) {
	//		        if (typeof _arg == 'function')
	//		            return promise.then(_arg);
	//		        else
	//		            return promise.then(function () {
	//		                var nowLoad = requiredData(_arg);
	//		                if (!nowLoad)
	//		                    return $.error('Route resolve: Bad resource name [' + _arg + ']');
	//		                return $ocLL.load(nowLoad);
	//		            });
	//		    }

	//		    function requiredData(name) {
	//		        if (jsRequires.modules)
	//		            for (var m in jsRequires.modules)
	//		                if (jsRequires.modules[m].name && jsRequires.modules[m].name === name)
	//		                    return jsRequires.modules[m];
	//		        return jsRequires.scripts && jsRequires.scripts[name];
	//		    }
	//		}]
    //    };
    //}
}]);

