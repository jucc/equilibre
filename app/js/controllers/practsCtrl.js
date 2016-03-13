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
