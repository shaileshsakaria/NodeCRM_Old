
(function () {
    'use strict';
    var serviceId = 'customerService';
    angular.module('app').factory(serviceId, ['$http', '$rootScope', customerService]);

    function customerService($http, $rootScope) {
        // Define the functions and properties to reveal.
        var service = {
            getCustomerLst: getCustomerLst
        };

        return service;

        function getCustomerLst(search) {
            var RequestedURL = $rootScope.ApiURL + '/api/Cutomer/list/' + search;
            return $http.get(RequestedURL)
            .then(function (data) {
                return data.data;
            }, function (e) {
                return e;
            });
        }

    }
})();
