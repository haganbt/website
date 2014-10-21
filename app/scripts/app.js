'use strict';

/**
 * @ngdoc overview
 * @name ahpwnApp
 * @description
 * # ahpwnApp
 *
 * Main module of the application.
 */
angular
.module('ahpwnApp',
[
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
])

.config(function ($routeProvider)
{
    $routeProvider
    .when('/',
    {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .when('/about',
    {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    })
    .when('/item',
    {
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl'
    })
    .otherwise(
    {
        redirectTo: '/'
    });
});
