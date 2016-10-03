function VehicleConstructor(name, wheels, passengers, speed){
  var distance_travelled = 0
  var updateDistanceTravelled = function(){
    console.log(distance_travelled += speed);
  }
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.vin = Math.floor((Math.random() * 1999999999999) + 1)
  this.move = function(noise){
    updateDistanceTravelled();
    this.makeNoise(noise);
  }
  // return VehicleConstructor()
}

  VehicleConstructor.prototype.makeNoise = function(noise){
    console.log(noise)
  }
  VehicleConstructor.prototype.busPassenger = function(number){
    console.log(passengers += number)
  }

  VehicleConstructor.prototype.checkMiles = function(){
    console.log(distance_travelled)
  }

var sedan = new VehicleConstructor("liam", 4, 4, 99);
sedan.makeNoise('oyoyoyoy')

sedan.VehicleConstructor();
// console.log(sedan.checkMiles());

// var bike = new VehicleConstructor("joe", 2, 1)
// console.log(bike.makeNoise('ringging'));
// console.log(bike.wheels)
// bike.makeNoise('ringring')

// var sedan = new VehicleConstructor("liam", 4, 4, 99)
// console.log(sedan)
// sedan.makeNoise('honk honk')

// var bus = new VehicleConstructor("bus", 8, 50)
// bus.busPassenger(30)
// bus.busPassenger(10)
// bus.busPassenger(10)
