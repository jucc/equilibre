/*
* Callbacks and options for fullcalendar.js
* TODO turn this into a controller and switch to angular directives
*/

angular.module("equilibre").service("dataService", function($http) {

   this.getPatients = function(successCallback) {
      $http.get('mock/patients.json').then(successCallback)
   };

   this.getPractitioners = function(successCallback) {
      $http.get('mock/practitioners.json').then(successCallback)
   };
});

$(document).ready(function()
{
   $('#calendar').fullCalendar({ // initialize the calendar when the page is ready

      // options
      header:
      {
         left: 'prev, next, today',
         center: 'title',
         right: 'month, agendaWeek, agendaDay'
      },
      defaultView: 'agendaWeek',
      editable: true,
      lang: 'pt-br',
      minTime: '07:00:00',
      maxTime: '22:00:00',

      // options specific to each view
      views: {
         month: {
         },
         agendaWeek: {
            hiddenDays: [ 0 ],   // hides sundays to save space in week view
            titleFormat: 'DD/MM' // because portuguese tends to be so verbose
         },
         agendaDay: {
         }
      },

      // data
      events: mockEventList,

      // callbacks
      eventClick: function() {
      }
   })
});
