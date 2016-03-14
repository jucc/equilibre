angular.module('equilibre').controller('practsCtrl', function($scope, dataService, $uibModal) {

   dataService.getPractitioners(function(response) {
      $scope.practs = response.data;
   });

   $scope.open = function (pract) {
      var modalInstance = $uibModal.open({
         animation: true,
         templateUrl: 'templates/modalPractitioner.html',
         controller: 'modalCtrl'
      });
   };

   $scope.add = function() {
      console.log("Adding");
      $scope.open({});
   };

   $scope.edit = function(pract) {
      console.log ("Editing " + pract.name);
      $scope.open(pract);
   }

   $scope.delete = function(pract, index) {
      console.log ("Deleting " + pract.name + " - " + index);
   }
});
