var practitioners = [
  {
    "profession": "Psicólogo",
    "room": "1",
    "name": "Luciana",
    "phone": "555551234",
    "email": "lu@espacoequilibre.com"
  },
  {
    "profession": "Desenvolvedor",
    "room": "2",
    "name": "Juliana",
    "phone": "555554242",
    "email": "ju@espacoequilibre.com"
  },
  {
    "profession": "Estudante",
    "room": "1",
    "name": "Manuela",
    "phone": "555554321",
    "email": "manu@espacoequilibre.com"
  }
];

$.each(practitioners, function(i, pract){ 
  var tdName     = '<td>' + pract.name + '</td>';
  var tdProf     = '<td>' + pract.profession + '</td>';
  var tdPhone    = '<td>' + pract.phone + '</td>';
  var tdButtons  = '<td class="text-right">'
      tdButtons += '<button class="btn btn-default btn-xs" aria-label="editar" data-toggle="modal" href="#crudform">';
      tdButtons += '<span class="glyphicon glyphicon-edit" aria-hidden="true"> </span> </button>';
      tdButtons += '<button class="btn btn-default btn-xs" aria-label="remover">';
      tdButtons += '<span class="glyphicon glyphicon-trash" aria-hidden="true"> </span></button></td>';
  var $tr = $('<tr>' + tdName + tdProf + tdPhone + tdButtons + '</tr>');
  
  $('#practitioners').append($tr);
});
