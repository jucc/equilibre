angular.module("equilibre").controller("patientsCtrl", function($scope, dataService) {

   dataService.getPatients(function(response) {
      console.log(response.data);
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
