angular.module('equilibre').controller('modalCtrl', function ($scope, $uibModalInstance) {

   $scope.ok = function () {
      console.log("OK");
      $uibModalInstance.close();
   };

   $scope.cancel = function () {
      console.log("cancel");
      $uibModalInstance.dismiss('cancel');
   };
});
