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
})

.controller('RealtimeCtrl', function ($scope)
{
    var statsInterval = 3; // minutes
    var updateInterval = 2; // seconds
    var smoothingFactor = 0.1;
    //var client = new Faye.Client('http://rt-us1.herokuapp.com');
    var searchItems = [ 72092, 72093, 72988 ];
    var items = {};

    //for (var i = 0; i < searchItems.length; i++)
    //{
        //var id = searchItems[i];

        //client.subscribe('/items/' + id, function (price)
        //{
            //console.log(id, price);

            //if (!items[id])
            //{
                //items[id] =
                //{
                    //id: id,
                    //current: price,
                    //priceCount: 1,
                    //shiftAt: 10,
                    //iterator: 0,
                    //prices: [price]
                //};
            //}
            //else
            //{
                //items[id].prices.push(price);
                //items[id].priceCount++;
            //}
        //});
    //}

    // Calculate shift stats
    //setInterval(function ()
    //{
        //Object.keys(items).forEach(function (id)
        //{
            //items[id].shiftAt = Math.round(((60 * statsInterval) / items[id].priceCount) / updateInterval);
            //items[id].priceCount = 0;
        //});
    //}, 60 * statsInterval * 1000);

    // Push new price
    //setInterval(function ()
    //{
        //Object.keys(items).forEach(function (id)
        //{
            //if (items[id].iterator > items[id].shiftAt)
            //{
                //items[id].iterator = 0;
                //items[id].prices.shift();
            //}

            //if (items[id].prices.length > 0)
            //{
                //var newPrice = (items[id].prices[0] * smoothingFactor) + (items[id].current * (1 - smoothingFactor));
                //items[id].current = newPrice;

                //console.log(id, Math.round(items[id].current));

                //items[id].iterator++;
            //}
        //});
    //}, updateInterval * 1000);
});
