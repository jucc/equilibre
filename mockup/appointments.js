t0 = moment().format("YYYY-MM-DD");
t1 = moment().add(moment.duration(1, 'days')).format("YYYY-MM-DD");
t2 = moment().add(moment.duration(2, 'days')).format("YYYY-MM-DD");
t3 = moment().add(moment.duration(3, 'days')).format("YYYY-MM-DD");
t4 = moment().add(moment.duration(4, 'days')).format("YYYY-MM-DD");
t5 = moment().add(moment.duration(5, 'days')).format("YYYY-MM-DD");
t6 = moment().add(moment.duration(6, 'days')).format("YYYY-MM-DD");

var mockEventList = [
 {
   title: 'Feriado genérico',
   start: t0
 },
 {
   title: 'Juliana - Ronald',
   start: t0 + 'T09:00:00',
   end: t0 + 'T09:30:00'
 },
 {
   title: 'Luciana - Claudio',
   start: t0 + 'T09:00:00',
   end: t0 + 'T09:30:00'
 },
 {
   title: 'Manuela - Cici',
   start: t0 + 'T09:00:00',
   end: t0 + 'T10:00:00'
 },
 {
   title: 'Luciana - Adriana',
   start: t0 + 'T09:30:00',
   end: t0 + 'T11:00:00'
 },
 {
   title: 'Juliana - Cici',
   start: t2 + 'T15:00:00',
   end: t2 + 'T15:45:00'
 },
 {
   title: 'Manuela - Claudio',
   start: t1 + 'T11:00:00',
   end: t1 + 'T11:20:00'
 },
 {
   title: 'Luciana - Cici',
   start: t3 + 'T12:15:00'
 },
 {
   title: 'Click for Google',
   url: 'http://google.com/',
   start: t4 + 'T07:15:00',
   end: t4 + 'T07:35:00'
 }
 ]
