
var person= {

    functionOne : function(x, y){
        var sum = 0;
          for(var i = x; i <= y; i++){
            sum += i
          }
          return sum
        },

    functionTwo : function(arr){
      var temp = 0;
      for(var i = 0; i < arr.length; i++){
        if (arr[i] < arr[i+1]){
          temp = arr[i]
        }
        return temp
      }
    },

    functionThree : function(arr){
      for (var i = 0; i < nums.length; i++){
        var sum = 0;
        var avg = 0;
        sum += (nums[i])
        }
      avg = sum/(nums.length)
    }
}
console.log(person.functionOne(1,2));
