angular.module("equilibre", ['ui.bootstrap', 'ui.router', 'ui.calendar'])

// https://github.com/angular-ui/ui-router/wiki/URL-Routing

   .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
         .state('home', {
            url: '/home',
            templateUrl: 'login.html'
         })
         .state('login', {
            url: '/login',
            templateUrl: 'login.html'
         })
         .state('admin', {
            url: '/admin',
            templateUrl: 'admin.html'
         })
         .state('appointments', {
            url: '/consultas',
            templateUrl: 'appointments.html'
         })
         .state('rooms', {
            url: '/salas',
            templateUrl: 'rooms.html'
         })
         .state('patients', {
            url: '/pacientes',
            templateUrl: 'patients.html',
            controller: 'patientsCtrl',
            controllerAs: 'people'
         })
         .state('practitioners', {
            url: '/profissionais',
            templateUrl: 'practitioners.html',
            controller: 'practsCtrl',
            controllerAs: 'people'
         })
      ;
      $urlRouterProvider.otherwise('home');
   }])

   .service("dataService", function($http) {

      this.getPatients = function(successCallback) {
         $http.get('mock/patients.json').then(successCallback)
      };

      this.getPractitioners = function(successCallback) {
         $http.get('mock/practitioners.json').then(successCallback)
      };
   });
;
