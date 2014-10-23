'use strict';

/**
 * @ngdoc function
 * @name ahpwnApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the ahpwnApp
 */

angular.module('ahpwnApp')
.controller('SearchItemCtrl', function ($scope, $resource, ItemService, RealmStore, ItemStore)
{
    $scope.item = ItemStore;

    $scope.getItem = function ()
    {
        ItemService.get(
        {
            region: RealmStore.region,
            realm: RealmStore.realm.name,
            item: $scope.itemId
        })
        .$promise.then(function (givenItem)
        {
            ItemStore.name = givenItem.name;
            ItemStore.marketPrice = givenItem.marketPrice;
            ItemStore.historicalPrice = givenItem.historicalPrice;
            ItemStore.quantity = givenItem.quantity;
        });
    };
})

.controller('ItemCtrl', function ($scope, ItemStore)
{
    $scope.item = ItemStore;
})

.controller('Another', function ($scope, RealmStore)
{
    $scope.store = RealmStore;
})

.controller('RealmCtrl', function ($scope, RealmStore)
{
    $scope.realms = [
        { id: 1, name: 'dalaran' },
        { id: 2, name: 'ysera' }
    ];

    $scope.store = RealmStore;
});
