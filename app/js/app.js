angular.module("equilibre", ["ui.bootstrap"]);

angular.module("equilibre").controller("NavCtrl", function($scope) {
  $scope.navCollapsed = true;
});

angular.module("equilibre").controller("PatientsCtrl", function($scope) {
  $scope.open = function() {
   console.log("open");
  }
});
