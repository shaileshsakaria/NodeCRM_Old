'use strict';
/** 
  * controller for login
*/

app.controller('loginCtrl', ['$scope', '$http', '$state', '$localStorage', '$rootScope', 'dataConstant',
function ($scope, $http, $state, $localStorage, $rootScope, dataConstant) {
    //angular.element('#username').trigger('focus');
    $scope.loginDisable = false;
    $scope.login = function () {
        if ($scope.Email == null || $scope.Password == null) {
            return;
        }
        var user = {
            Email: $scope.Email,
            Password: $scope.Password
        };
        $scope.loginDisable = true;
        $scope.cgPromise = $http.post($rootScope.ApiURL + '/api/User/login', user).success(function (data, status) {
            if (data.status == dataConstant.SuccessStatus) {
                if (data.loggedin) {
                    var userData = data.user;
                    $localStorage.token = data.token; //set token in local storage
                    $localStorage.userinfo = userData; // set user info in local storage
                    $rootScope.userinfo = userData; // set user in root scope
                    $rootScope.authorizationToken = data.token; // set token in root scope
                    $http.defaults.headers.common['Authorization'] = $rootScope.authorizationToken;
                    $state.go('app.customer');
                }
                else {
                    $scope.ErrorMsg = data.Message;
                }
            }
            $scope.loginDisable = false;
        });
    };

    $scope.checkIfEnterKeyWasPressed = function ($event) {
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
            $scope.login();
        }

    };
}]);