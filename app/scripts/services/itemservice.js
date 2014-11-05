'use strict';

/**
 * @ngdoc service
 * @name ahpwnApp.ItemService
 * @description
 * # ItemService
 * Factory in the ahpwnApp.
 */

angular.module('ahpwnApp')
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
});
