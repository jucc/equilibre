var patients = [
  { "name": "Ronald",
    "phone": "55554242",
    "mobile": "555554242",
    "email": "ronald@espacoequilibre.com",
    "birthdate": "1985-10-31",
    "reference": "Fernando",
    "consulting" : [
      {
        "practitioner": "Juliana",
        "lastVisit" : "2016-02-22",
        "cost": 100,
        "firstCost": 200
      }
    ]
  },
  { "name": "Claudio",
    "phone": "55551234",
    "mobile": "555556789",
    "email": "claudio@espacoequilibre.com",
    "birthdate": "1964-05-18",
    "reference": "Manuel",
    "consulting" : [
      {
        "practitioner": "Luciana",
        "lastVisit" : "2016-02-26",
        "cost": 200,
        "firstCost": 300
      },
      {
        "practitioner": "Manuela",
        "lastVisit" : "2016-02-22",
        "cost": 100,
        "firstCost": 200
      }
    ]
  },
  { "name": "Adriana",
    "phone": "55559012",
    "mobile": "555550987",
    "email": "didi@espacoequilibre.com",
    "birthdate": "1969-03-19",
    "reference": "Cici",
    "consulting" : [
      {
        "practitioner": "Luciana",
        "lastVisit" : "2016-02-26",
        "cost": 200,
        "firstCost": 300
      },
      {
        "practitioner": "Juliana",
        "lastVisit" : "2016-02-22",
        "cost": 100,
        "firstCost": 200
      }
    ]
  },
  { "name": "Aracy",
    "phone": "55555678",
    "mobile": "555559876",
    "email": "cici@espacoequilibre.com",
    "birthdate": "1969-03-19",
    "reference": "Cici",
    "consulting" : [
      {
        "practitioner": "Luciana",
        "lastVisit" : "2016-02-26",
        "cost": 200,
        "firstCost": 300
      },
      {
        "practitioner": "Juliana",
        "lastVisit" : "2016-02-22",
        "cost": 100,
        "firstCost": 200
      },
      {
        "practitioner": "Manuela",
        "lastVisit" : "2016-02-23",
        "cost": 100,
        "firstCost": 200
      }
    ]
  }
];

$(document).ready(function() {
   $.each(patients, function(i, patient){

     var tdName     = '<td>' + patient.name + '</td>';
     var tdMail     = '<td>' + patient.email + '</td>';
     var tdMobile   = '<td>' + patient.mobile + '</td>';
     var tdButtons  = '<td class="text-right">'
         tdButtons += '<button class="btn btn-default btn-xs" aria-label="editar" data-toggle="modal" href="#crudform">';
         tdButtons += '<span class="glyphicon glyphicon-edit" aria-hidden="true"> </span> </button>';
         tdButtons += '<button class="btn btn-default btn-xs" aria-label="remover">';
         tdButtons += '<span class="glyphicon glyphicon-trash" aria-hidden="true"> </span></button></td>';
     var $tr = $('<tr>' + tdName + tdMail + tdMobile + tdButtons + '</tr>');

     $('#patients').append($tr);
   });
});
