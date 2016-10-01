app.factory('productFactory', ['$http', function($http){

  function productFactory(){
    this.addproduct = function(product, callback){
      $http.post('/addproduct', product).then(function(returned_data){
        callback(returned_data.data)
      })
    }
    this.getproduct = function(){
      $http.get('/getproduct').then(function(returned_data){
        callback(returned_data.data)
      })
    }
  }
///why?????????
  return new productFactory()

}])
