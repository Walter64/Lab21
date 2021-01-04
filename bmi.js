class BMI {

    // initialise data in class-first method called
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }

    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}

// let assigns scope to variable
let MyBmi = new BMI(2, 90);
let calculatedBMI = MyBmi.calculateBMI();

console.log(calculatedBMI);