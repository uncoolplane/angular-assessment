angular.module('angular').controller('productDetailsCtrl', function($scope, $location, shopService, $stateParams) {
  $scope.init = function () {
    var id = $stateParams.id;
    $scope.id = id;

    $scope.getProduct(id);
  }

  // $scope.getProduct = function (id) {
  //   shopService.getProduct(id).then(function (response) {
  //     $scope.product = response;
  //   })
  // }

  $scope.getProduct = function (id) {
    $scope.product = shopService.getProduct(id);
  }


  $scope.redirectTo = function (id) {
    $location.path('/product/' + id);
  }


  $scope.init();
})
