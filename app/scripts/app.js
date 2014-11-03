'use strict';

/**
 * @ngdoc overview
 * @name examApp
 * @description
 * # examApp
 *
 * Main module of the application.
 */
angular
  .module('examApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/exams', {
        templateUrl: 'views/exams.html',
        controller: 'ExamsCtrl'
      })
      .when('/exam/:examId/sessions', {
        templateUrl: 'views/sessions.html',
        controller: 'SessionsCtrl'
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl'
      })
      .when('/month/:date', {
        templateUrl: 'views/sessions.html',
        controller: 'MonthCtrl'
      })
      // .when('/sessions', {
        // templateUrl: 'views/sessions.html',
        // controller: 'SessionsCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
