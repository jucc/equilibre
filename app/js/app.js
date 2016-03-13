angular.module("equilibre", ["ui.bootstrap"]);

angular.module("equilibre").controller("navCtrl", function($scope) {
  $scope.navCollapsed = true;
});

angular.module("equilibre").controller("patientsCtrl", function($scope, dataService) {
  $scope.open = function() {
    console.log("open");
  };

  dataService.getPatients(function(response) {
    console.log(response.data);
    $scope.patients = response.data;
  });
});

angular.module("equilibre").service("dataService", function($http) {

  this.getPatients = function(sucessCallback) {
    $http.get('mock/patients.json').then(sucessCallback)
  };

  this.getPractitioners = function(sucessCallback) {
    $http.get('mock/practitioners.json').then(sucessCallback)
  };
});
