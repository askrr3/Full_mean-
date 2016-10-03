
function VehicleConstructor(name, wheels, passengers){
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;

  this.makeNoise = function(event){
    console.log(event);
  }
  this.busPassenger = function(number){
    console.log(passengers += number)
  }

}
// var bike = new VehicleConstructor("joe", 2, 1)
// console.log(bike.makeNoise('ringging'));
// console.log(bike.wheels)

// bike.makeNoise('ringring')
//
var sedan = new VehicleConstructor("liam", 4, 4)
sedan.makeNoise('honk honk')

// var bus = new VehicleConstructor("bus", 8, 50)
// bus.busPassenger(30)
// bus.busPassenger(10)
// bus.busPassenger(10)
