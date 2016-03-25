angular.module('equilibre').controller('practsCtrl', function(dataService, $uibModal) {

   var self = this;

   dataService.getPractitioners(function(response) {
      self.practs = response.data;
   });

   self.open = function (person) {

      var modalInstance = $uibModal.open({
         animation: true,
         templateUrl: 'templates/modalPractitioner.html',
         controller: 'modalCtrl',
         controllerAs: 'modal',
         resolve: {
            person: function() { return person; }
         }
      });

      modalInstance.result.then(function (editedPerson) {
         self.edited = editedPerson;
         console.log(editedPerson.name);
      });
   };

   self.add = function() {
      console.log("Adding");
      self.open({});
   };

   self.edit = function(pract) {
      console.log ("Editing " + pract.name);
      self.open(pract);
   }

   self.delete = function(pract, index) {
      console.log ("Deleting " + pract.name + " - " + index);
   }
});
