(function () {
  'use strict';

  angular.module('App',['ui.router'])
  .config(route);

  route.$inject=['$stateProvider','$urlRouterProvider'];

  function route($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('about',{
      url:'/',
      templateUrl:'src/about.html'
    });
  }
})()
