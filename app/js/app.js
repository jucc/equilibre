angular.module("equilibre", ['ui.bootstrap', 'ui.router']);

angular.module("equilibre").service("dataService", function($http) {

   this.getPatients = function(successCallback) {
      $http.get('mock/patients.json').then(successCallback)
   };

   this.getPractitioners = function(successCallback) {
      $http.get('mock/practitioners.json').then(successCallback)
   };
});
