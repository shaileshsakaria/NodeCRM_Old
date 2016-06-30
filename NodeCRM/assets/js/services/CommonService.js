
(function () {
    'use strict';
    var serviceId = 'CommonService';
    angular.module('app').factory(serviceId, ['$http', '$rootScope', CommonService]);

    function CommonService($http, $rootScope) {
        // Define the functions and properties to reveal.
        var service = {
            SaveSortPrefrence: SaveSortPrefrence,
            getUserPrefrence: getUserPrefrence,
            ShowHideColumn: ShowHideColumn,
            SaveColumnSequence: SaveColumnSequence,
            SetDefault: SetDefault,
            SaveColumnPinnedPosition: SaveColumnPinnedPosition
        };

        return service;

        function SaveSortPrefrence(data) {
            var RequestedURL = $rootScope.ApiURL + '/api/Utility/SaveSortPrefrence';
            return $http.post(RequestedURL, data)
            .then(function (data) {
                return data.data;
            }, function (e) {
                return e;
            });
        }

        function getUserPrefrence(data) {
            var RequestedURL = $rootScope.ApiURL + '/api/Utility/getUserPrefrence';
            return $http.post(RequestedURL, data)
            .then(function (data) {
                return data.data;
            }, function (e) {
                return e;
            });
        }

        function ShowHideColumn(data) {
            var RequestedURL = $rootScope.ApiURL + '/api/Utility/ShowHideColumn';
            return $http.post(RequestedURL, data)
            .then(function (data) {
                return data.data;
            }, function (e) {
                return e;
            });
        }

        function SaveColumnSequence(data) {
            var RequestedURL = $rootScope.ApiURL + '/api/Utility/SaveColumnSequence';
            return $http.post(RequestedURL, data)
            .then(function (data) {
                return data.data;
            }, function (e) {
                return e;
            });
        }

        function SetDefault(data) {
            var RequestedURL = $rootScope.ApiURL + '/api/Utility/SetDefault';
            return $http.post(RequestedURL, data)
            .then(function (data) {
                return data.data;
            }, function (e) {
                return e;
            });
        }


        function SaveColumnPinnedPosition(data) {
            var RequestedURL = $rootScope.ApiURL + '/api/Utility/SaveColumnPinnedPosition';
            return $http.post(RequestedURL, data)
            .then(function (data) {
                return data.data;
            }, function (e) {
                return e;
            });
        }
        
    }
})();
