angular.module("equilibre").directive("eqnavbar", function() {
  return {
    templateUrl: "templates/eqnavbar.html",
    controller: "navCtrl",
    replace: false
  };
});
