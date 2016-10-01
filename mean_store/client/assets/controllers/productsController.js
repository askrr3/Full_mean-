app.controller('productsController', ['$scope', 'productFactory', '$cookies', '$location', function($scope, productFactory, $cookies, $location){

  $scope.user = {}
  $scope.product = []
  $scope.errormessage = {}

  if($cookies.getObject('user')){
    $scope.user = $cookies.getObject('user')
  } else {
    $location.url('/')
  }

  $scope.getproduct = function(){
    productFactory.getproduct(function(data){
      $scope.product.push(data)
    })
  }
  $scope.getproduct()


  $scope.addproduct = function(){
    console.log('inside the addproduct method');
    productFactory.addproduct($scope.product, function(data){
      console.log(data);
      $scope.errormessage = data.message


      // if(data.errors){
      //   for(data in data.errors){
      //     $scope.errormessage.push(data.errors[data].message)
      //   }
      // }
      //need a get product function to show all products
    })
  }
}])
