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

.factory('RealmStore', function ()
{
    return { region: 'us', realm: 'dalaran' };
});
