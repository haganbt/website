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
    var baseUrl = 'http://api.anzu.io/v1';
    return $resource(baseUrl + '/:region/:realm/item/:item',
    {
        region: '@region',
        realm: '@realm',
        item: '@item'
    });
})

.factory('ItemStore', function ()
{
    return {};
})

.factory('RealmStore', function ()
{
    return { region: 'us', realm: 'dalaran' };
});
