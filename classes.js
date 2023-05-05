//1
class Car{
    constructor(make,model,year,isAvailable){
        this.make=make
        this.model=model
        this.year=year
        this.isAvailable=isAvailable
    }
    toggleAvailability(){
        this.isAvailable=!this.isAvailable

    }
    

}
let car1= new Car("BMW","legacy",2023,true)
console.log(car1);

car1.toggleAvailability()
console.log(car1);





class Rental{
    constructor(car,renterName,rentalStartDate,rentalEndDate){
        this.car=car;
        this.renterName=renterName;
        this.rentalStartDate=rentalStartDate;
        this.rentalEndDate=rentalEndDate;


    }
    calculateRentalDuration(){
        let day=24*60*60*1000;
        let sDate=new Date(this.rentalStartDate);
        let eDate= new Date(this.rentalEndDate);
        let x=Math.round(Math.abs((sDate-eDate)/day));
        return x;


    }
}
let car= new Car("Harrier","corolla","2023")
let rental= new Rental(car,"serah Mburu","2023-03-01","2023-03-05")
console.log(rental.calculateRentalDuration());






class MotorCar{
    constructor(make,model,year,isAvailable){
        this.make=make
        this.model=model
        this.year=year
        this.isAvailable=isAvailable
    }
}

class MotorRental{
    constructor(car,renterName,rentalStartDate,rentalEndDate){
        this.car=car;
        this.renterName=renterName;
        this.rentalStartDate=rentalStartDate;
        this.rentalEndDate=rentalEndDate;


    }
    calculateRentalDuration(){
        let day=24*60*60*1000;
        let sDate=new Date(this.rentalStartDate);
        let eDate= new Date(this.rentalEndDate);
        let x=Math.round(Math.abs((sDate-eDate)/day));
        return x;


    }
}
let motorcar= new MotorCar("v8","mazda","2023")
let motorrental= new MotorRental(car,"Liz Mburu","2023-03-01","2023-03-05")
let c=motorrental.calculateRentalDuration()
console.log(c);




class Questions{
    constructor(text,options,correctAnswer){
        this.text=text
        this.options=options
        this.correctAnswer=correctAnswer


    }
    checkAnswer(answer){
        return answer ===this.correctAnswer;

    }


}
let questions= new Questions("what is the capital city of Kenya?",["mombasa","kisumu","nairobi","kitale"]);
console.log(questions.checkAnswer("nairobi"));
console.log(questions.checkAnswer("kitale"));

