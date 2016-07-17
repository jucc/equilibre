// https://github.com/angular-ui/ui-router/wiki/URL-Routing
angular.module("equilibre").config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
                                   function($stateProvider, $urlRouterProvider, $locationProvider) {
   $stateProvider
      .state('home', {
         url: '/home',
         templateUrl: 'home.html'
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
   $locationProvider.html5Mode(true);
}]);
