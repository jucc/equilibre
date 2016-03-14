angular.module('equilibre').controller('modalCtrl', function ($scope, $uibModalInstance) {

   $scope.professions = ['Fisioterapeuta','Médico','Nutricionista','Psicólogo']
   $scope.rooms = ['1','2','3','4']

   $scope.ok = function () {
      console.log("OK");
      $uibModalInstance.close();
   };

   $scope.cancel = function () {
      console.log("cancel");
      $uibModalInstance.dismiss('cancel');
   };
});
