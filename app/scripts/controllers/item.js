'use strict';

/**
 * @ngdoc function
 * @name ahpwnApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the ahpwnApp
 */
angular.module('ahpwnApp')
.controller('SearchItemCtrl', function ($scope, $resource, ItemService, RealmService, ItemStore)
{
    $scope.item = ItemStore;

    $scope.getItem = function ()
    {
        ItemService.get(
        {
            region: RealmService.getRegion(),
            realm: RealmService.getRealm(),
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

.controller('RealmCtrl', function ($scope, RealmService){
    $scope.realm = RealmService.getRealm();
    $scope.region = RealmService.getRegion();

    $scope.setRealm = function ()
    {
        console.log('setting realm');
        RealmService.setRealm($scope.realm);
        console.log(RealmService.getRealm());
    };

    $scope.setRegion = function ()
    {
        console.log('setting region');
        RealmService.setRegion($scope.region);
        console.log(RealmService.getRegion());
    };
});
