angular.module('equilibre').controller('modalCtrl', function ($scope, $uibModalInstance, person) {

   $scope.professions = ['Fisioterapeuta','Médico','Nutricionista','Psicólogo']
   $scope.rooms = ['1','2','3','4']

   $scope.person = person;

   $scope.ok = function () {
      console.log("OK");
      $uibModalInstance.close(person);
   };

   $scope.cancel = function () {
      console.log("cancel");
      $uibModalInstance.dismiss('cancel');
   };
});
