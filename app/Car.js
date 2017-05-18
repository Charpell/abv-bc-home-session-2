var Car = module.exports = function (name='General', model='GM',type){

	let speed = 0;
	this.name = name;
	this.model = model;
	this.type = type;
	this.isSaloon = true;
  
	if ((this.name === "Porshe") || (this.name === 'Koenigsegg')){
		this.numOfDoors = 2;
	}else{
		this.numOfDoors = 4;
	}
	

	if (this.type === 'trailer'){
		this.numOfWheels = 8;
		this.isSaloon = false;
		this.speed = '0 km/h';
	}else{
		this.numOfWheels = 4;
	}



	Car.prototype.drive = function(moving_speed){
		  if (moving_speed === 5){

		  	this.speed = '250 km/h';


		  }else if (moving_speed == 7){
		  	this.speed = '77 km/h';

		  }

	}
}

var honda = new Car('Honda');

module.exports = Car;