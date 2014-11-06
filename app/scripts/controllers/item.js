'use strict';

/**
 * @ngdoc function
 * @name ahpwnApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the ahpwnApp
 */

angular.module('ahpwnApp')
.controller('RealmCtrl', function ($scope, RealmService)
{
    $scope.regions = [ 'us', 'eu' ];
    $scope.types = [ 'item', 'pet' ];

    $scope.region = $scope.regions[0];
    $scope.realm = 'dalaran';
    $scope.type = $scope.types[0];
    $scope.id = '72092';

    $scope.get = function ()
    {
        RealmService.get(
        {
            region: $scope.region,
            realm: $scope.realm,
            type: $scope.type,
            id: $scope.id
        })
        .$promise.then(function (givenItem)
        {
            $scope.data = angular.toJson(givenItem, true);
        },
        function (error)
        {
            if (error.data)
            {
                $scope.data = angular.toJson(error.data, true);
            }
        });
    };

    $scope.get();
})

.controller('GlobalCtrl', function ($scope, GlobalService)
{
    $scope.types = [ 'item', 'pet' ];

    $scope.type = $scope.types[0];
    $scope.id = '72092';

    $scope.get = function ()
    {
        GlobalService.get(
        {
            type: $scope.type,
            id: $scope.id
        })
        .$promise.then(function (givenItem)
        {
            $scope.data = angular.toJson(givenItem, true);
        },
        function (error)
        {
            if (error.data)
            {
                $scope.data = angular.toJson(error.data, true);
            }
        });
    };

    $scope.get();
});
