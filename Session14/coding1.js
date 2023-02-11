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
const bmw = new Car('BMW',120);
const mec = new Car('Mercedes',95);
console.log(bmw);
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
mec.accelerate();
mec.brake();