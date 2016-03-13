angular.module("equilibre").controller("patientsCtrl", function($scope, dataService, $uibModal) {

   dataService.getPatients(function(response) {
      $scope.patients = response.data;
   });

   $scope.open = function () {
      var modalInstance = $uibModal.open({
         animation: true,
         templateUrl: 'templates/modalPatient.html',
         controller: 'modalCtrl'
      });
   };

   $scope.add = function() {
      console.log("Adding");
      $scope.open();
   };

   $scope.edit = function(patient) {
      console.log ("Editing " + patient.name);
      $scope.open();
   }

   $scope.delete = function(patient, index) {
      console.log ("Deleting " + patient.name + " - " + index);
   }

});
