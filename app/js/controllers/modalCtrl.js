angular.module('equilibre').controller('modalCtrl', function ($uibModalInstance, person) {

   var self = this;

   self.professions = ['Fisioterapeuta','Médico','Nutricionista','Psicólogo']
   self.rooms = ['1','2','3','4']

   self.person = person;

   self.ok = function () {
      console.log("OK");
      $uibModalInstance.close(person);
   };

   self.cancel = function () {
      console.log("cancel");
      $uibModalInstance.dismiss('cancel');
   };
});
