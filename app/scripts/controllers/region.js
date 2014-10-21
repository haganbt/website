'use strict';

angular.module('ahpwnApp')
.controller('RealmCtrl', function ($scope, $resource)
{
    var baseUrl = 'http://us1.ahpwn.com/v1';

    var Item = $resource(baseUrl + '/:region/:realm/item/:itemId',
    {
        region: '@region',
        realm: '@realm',
        itemId: '@itemId'
    });

    $scope.update = function ()
    {
        Item.get(
        {
            region: 'us',
            //realm: $scope.realm,
            realm: 'dalaran',
            itemId: $scope.itemId
        })
        .$promise.then(function (item)
        {
            $scope.item = item;
        });
    };

    $scope.realm = 'default';
});
