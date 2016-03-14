angular.module("equilibre").controller("patientsCtrl", function($scope, dataService, $uibModal) {

   dataService.getPatients(function(response) {
      $scope.patients = response.data;
   });

   $scope.open = function (person) {

      var modalInstance = $uibModal.open({
         animation: true,
         templateUrl: 'templates/modalPatient.html',
         controller: 'modalCtrl',
         resolve: {
            person: function() { return person; }
         }
      });

      modalInstance.result.then(function (editedPerson) {
         $scope.edited = editedPerson;
         console.log(editedPerson.name);
      });
   };

   $scope.add = function() {
      console.log("Adding");
      $scope.open({});
   };

   $scope.edit = function(patient) {
      console.log ("Editing " + patient.name);
      $scope.open(patient);
   }

   $scope.delete = function(patient, index) {
      console.log ("Deleting " + patient.name + " - " + index);
   }

});
