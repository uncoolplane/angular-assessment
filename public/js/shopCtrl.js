angular.module('angular').controller('shopCtrl', function($scope, shopService, $location) {
  $scope.init = function () {
    $scope.getProducts();
  }

  $scope.getProducts = function () {
    // shopService.getProducts().then(function(response) {
    //   $scope.products = response;
    // })
    $scope.products = shopService.getProducts();
  }

  $scope.redirectTo = function (id) {
    $location.path('/product/' + id);
  }

  $scope.init();
})
