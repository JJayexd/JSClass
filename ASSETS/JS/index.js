export class VisitCard {
    constructor(firstname, surname, email, birthdate, position, gender) {
        this.firstname = firstname;
        this.surname = surname;
        this.email = email;
        this.birthdate = birthdate;
        this.position = position;
        this.gender = gender;
    }

    present() {
        console.log(`Fornavn: ${this.firstname}`);
        console.log(`Efternavn: ${this.surname}`);
        console.log(`Email: ${this.email}`);
        console.log(`Fødselsdato:${this.birthdate}`);
        console.log(`Stilling: ${this.position}`);
        console.log(`Køn: ${this.gender}`);
    }
}

const person1 = new VisitCard('Jens', 'Jørgen', 'jensj@gmail.com', '4/06/1994', 'Bager', 'Male');
const person2 = new VisitCard('Søren', 'Jørgensen', 'sørenbo@gmail.com', '7/12/2000', 'Tømrer', 'Male');
const person3 = new VisitCard('Emil', 'Jørgensen', 'kontakt.emilbj@gmail.com', '30/06/2003', 'Webudvikler', 'Male');

// person1.present();

export class Car {
    constructor(brand, model, propellant, range, color, year, kilometers, desc, price) {
        this.brand = brand
        this.model = model
        this.propellant = propellant
        this.range = range
        this.color = color
        this.year = year
        this.kilometers = kilometers
        this.desc = desc
        this.price = price
    }

    present () {
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Propellant: ${this.propellant}`);
        console.log(`Range: ${this.range}`);
        console.log(`Color: ${this.color}`);
        console.log(`Year: ${this.year}`);
        console.log(`Kilometers: ${this.kilometers}`);
        console.log(`Description: ${this.desc}`);
        console.log(`Price: ${this.price}`);
    }
}

const car1 = new Car('Tesla', 'Model 3', 'Electric', '?', 'White', '2020', '10000', 'This is a Tesla Model 3', '100000 USD');

car1.present();