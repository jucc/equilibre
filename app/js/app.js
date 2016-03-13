angular.module("equilibre", ["ui.bootstrap"]);

angular.module("equilibre").controller("navCtrl", function($scope) {
  $scope.navCollapsed = true;
});

//TODO DRY - there's a lot of repeated code between patients and practitioners

angular.module("equilibre").controller("patientsCtrl", function($scope, dataService) {

  dataService.getPatients(function(response) {
    $scope.patients = response.data;
  });

  $scope.add = function() {
   console.log("Adding");
  };

  $scope.edit = function(patient) {
   console.log ("Editing " + patient.name);
  }

  $scope.delete = function(patient, index) {
   console.log ("Deleting " + patient.name + " - " + index);
  }

});


angular.module("equilibre").controller("practsCtrl", function($scope, dataService) {

  dataService.getPractitioners(function(response) {
    $scope.practs = response.data;
  });

  $scope.add = function() {
   console.log("Adding");
  };

  $scope.edit = function(pract) {
   console.log ("Editing " + pract.name);
  }

  $scope.delete = function(pract, index) {
   console.log ("Deleting " + pract.name + " - " + index);
  }

});


angular.module("equilibre").service("dataService", function($http) {

  this.getPatients = function(sucessCallback) {
    $http.get('mock/patients.json').then(sucessCallback)
  };

  this.getPractitioners = function(sucessCallback) {
    $http.get('mock/practitioners.json').then(sucessCallback)
  };
});
