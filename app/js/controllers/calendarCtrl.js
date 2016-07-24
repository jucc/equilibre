angular.module('equilibre').controller('calendarCtrl', function(){

   var self = this;

   this.uiConfig = {
      calendar: {
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
         events: mockEventList
      }
   };
});
