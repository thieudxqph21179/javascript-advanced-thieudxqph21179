const Car = function(make,speed){
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function (){
    this.speed +=10;
    console.log(`${this.make} đang chạy với vận tốc ${this.speed} km/h `);
};
Car.prototype.brake = function (){
    this.speed -=5;
    console.log(`${this.make} đang chạy với vận tốc ${this.speed} km/h `);
};

const EV = function(make , speed , charge){
    Car.call(this,make,speed);
    this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo){
    this.charge = chargeTo;
};
EV.prototype.accelerate = function(){
    this.speed +=20;
    this.charge --;
    console.log(`${this.make} đang chạy với vận tốc ${this.speed} km/h, với mức pin là ${this.charge}% `);

};
const tesla = new EV('Tesla',120,23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();