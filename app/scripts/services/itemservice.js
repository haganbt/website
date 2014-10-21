'use strict';

/**
 * @ngdoc service
 * @name ahpwnApp.ItemService
 * @description
 * # ItemService
 * Factory in the ahpwnApp.
 */

angular.module('ahpwnApp')
.factory('ItemService', function ($resource)
{
    var baseUrl = 'http://us1.ahpwn.com/v1';
    return $resource(baseUrl + '/:region/:realm/item/:item',
    {
        region: '@region',
        realm: '@realm',
        item: '@item'
    });
})

.factory('ItemStore', function ()
{
    return {
        id: 1,
        name: 'Test',
        marketPrice: 1,
        historicalPrice: 2,
        quantity: 3
    };
})

.factory('Item', function ()
{
    return { region: 'us', realm: 'dalaran' };
})

.factory('Salad', function ()
{
    return { msg: 'tacos' };
})

.factory('RealmService', function ()
{
    var region = 'us';
    var realm = 'dalaran';

    var delegator = {};

    delegator.setRegion = function (givenRegion)
    {
        region = givenRegion;
    };

    delegator.setRealm = function (givenRealm)
    {
        realm = givenRealm;
    };

    delegator.getRegion = function ()
    {
        return region;
    };

    delegator.getRealm = function ()
    {
        return realm;
    };

    return delegator;
});
