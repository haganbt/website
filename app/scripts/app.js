'use strict';

// ANZU.IO
// Deomitrus / Andrew Breja

angular
.module('ahpwnApp',
[
    'ngResource',
])

.factory('RealmService', function ($resource)
{
    var baseUrl = 'http://api.anzu.io/v1';
    return $resource(baseUrl + '/:region/:realm/:type/:id',
    {
        region: '@region',
        realm: '@realm',
        type: '@type',
        id: '@id'
    });
})

.factory('GlobalService', function ($resource)
{
    var baseUrl = 'http://api.anzu.io/v1';
    return $resource(baseUrl + '/global/:type/:id',
    {
        type: '@type',
        id: '@id'
    });
})

.controller('realmctrl', function ($scope, realmservice)
{
    $scope.regions = [ 'us', 'eu' ];
    $scope.types = [ 'item', 'pet' ];

    $scope.region = $scope.regions[0];
    $scope.realm = 'dalaran';
    $scope.type = $scope.types[0];
    $scope.id = '72092';

    $scope.get = function ()
    {
        realmservice.get(
        {
            region: $scope.region,
            realm: $scope.realm,
            type: $scope.type,
            id: $scope.id
        })
        .$promise.then(function (givenitem)
        {
            $scope.data = angular.tojson(givenitem, true);
        },
        function (error)
        {
            if (error.data)
            {
                $scope.data = angular.tojson(error.data, true);
            }
        });
    };

    $scope.get();
})

.controller('globalctrl', function ($scope, globalservice)
{
    $scope.types = [ 'item', 'pet' ];

    $scope.type = $scope.types[0];
    $scope.id = '72092';

    $scope.get = function ()
    {
        globalservice.get(
        {
            type: $scope.type,
            id: $scope.id
        })
        .$promise.then(function (givenitem)
        {
            $scope.data = angular.tojson(givenitem, true);
        },
        function (error)
        {
            if (error.data)
            {
                $scope.data = angular.tojson(error.data, true);
            }
        });
    };

    $scope.get();
});
