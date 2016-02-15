/*
 * Callbacks and options for fullcalendar.js
 */

$(document).ready(function() 
{
  $('#calendar').fullCalendar( // initialize the calendar when the page is ready
  {

    // options

    header: 
    {
      left: 'prev, next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    defaultView: 'agendaWeek',
    editable: true,
    lang: 'pt-br',

    // callbacks

    dayClick: function()
    {
      alert('a day has been clicked!');
    }
  })
});