angular.module('angular').service('shopService', function($http) {
  this.products = [{"id":"jvmquxr","desc":"Solid Black","image":"https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fhat-1.jpg?alt=media&token=af7620f5-e9a1-4108-939c-472c48307528","price":"45","title":"Mountains Baseball Cap"},{"id":"9ad1jor","desc":"Solid Black","image":"https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fhat-2.jpg?alt=media&token=7401ac35-408b-4f10-8749-3dd6378f4198","price":"45","title":"Mountains Baseball Capp"},{"id":"gqwu3di","desc":"Combo Set","image":"https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fcombo-tee.jpg?alt=media&token=068eefa0-d83f-497f-9809-5d0272a1639d","price":"55","title":"Combo T-shirt Set"},{"id":"fav2t9","desc":"Solid Blue","image":"https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-1.jpeg?alt=media&token=0fbf36a3-a477-49f7-aa99-2bdb1030c449","price":"25","title":"Ripple Effect"},{"id":"rpy14i","desc":"Two Shirt Set","image":"https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-3.jpeg?alt=media&token=4dec772a-65ec-481b-bc60-a7c80f5b2c38","price":"33","title":"Two T Shirt Set"},{"id":"4866flxr","desc":"Solid Black","image":"https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-4.jpeg?alt=media&token=1e1b81c8-a24f-4d34-85e4-153e4d00470e","price":"25","title":"Black T Shirt"},{"id":"27kqpvi","desc":"","image":"https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-5.jpeg?alt=media&token=c27be083-eb5b-4a1f-98be-780f234fb5ce","price":"24","title":"Momentum"}];

  var self = this;
  this.getProducts = function () {
    return self.products;
  }

  // this.getProducts = function() {
  //     return $http({
  //       method: 'GET',
  //       url: 'http://practiceapi.devmounta.in/products'
  //     }).then(function(response) {
  //       console.log('shopService', response.data);
  //       return response.data;
  //     })
  //   }

  this.getProduct = function (id) {
    let products = self.products;
    for (var i = 0; i < products.length; i++) {
      if(products[i].id == id) {
        return products[i];
      }
    }
  }

//http://practiceapi.devmounta.in/products/ + the id
  // this.getProduct = function (id) {
  //     return $http({
  //       method: 'GET',
  //       url: 'http://practiceapi.devmounta.in/products/' + id
  //     }).then(function(response) {
  //       console.log('shopService', response.data);
  //       return response.data;
  //     })
  // }

})
