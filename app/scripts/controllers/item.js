'use strict';

/**
 * @ngdoc function
 * @name ahpwnApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the ahpwnApp
 */

angular.module('ahpwnApp')
.controller('SearchItemCtrl', function ($scope, ItemService, RealmStore, ItemStore)
{
    $scope.item = ItemStore;

    $scope.getItem = function ()
    {
        ItemService.get(
        {
            region: RealmStore.region,
            realm: RealmStore.realm,
            item: $scope.itemId
        })
        .$promise.then(function (givenItem)
        {
            ItemStore = givenItem;
        });
    };
})

.controller('ItemCtrl', function ($scope, ItemService, RealmStore, ItemStore)
{
    ItemService.get(
    {
        region: RealmStore.region,
        realm: RealmStore.realm,
        item: 72092
    })
    .$promise.then(function (givenItem)
    {
        $scope.item = givenItem;
        ItemStore = givenItem;
    });

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
