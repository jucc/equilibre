angular.module("equilibre").controller("patientsCtrl", function(dataService, $uibModal) {

   var self = this;

   dataService.getPatients(function(response) {
      self.patients = response.data;
      self.patients.forEach(function(entry) {
          entry.birthdate = new Date(entry.birthdate); //naive solution that converts this specific attribute to date
          entry.age = moment().diff(entry.birthdate, 'years');
      });
   });

   self.open = function (person) {

      var modalInstance = $uibModal.open({
         animation: true,
         templateUrl: 'templates/modalPatient.html',
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

   self.edit = function(patient) {
      console.log ("Editing " + patient.name);
      self.open(patient);
   }

   self.delete = function(patient, index) {
      console.log ("Deleting " + patient.name + " - " + index);
   }

});
