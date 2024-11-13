class VisitCard {
    constructor(firstname, surname, email, birthdate, position, gender) {
        this.firstname = firstname;
        this.surname = surname;
        this.email = email;
        this.birthdate = birthdate;
        this.position = position;
        this.gender = gender;
    }

    present() {
        // console.log(`${this.firstname} ${this.surname}, ${this.email}, ${this.birthdate}, ${this.position}, ${this.gender}`);
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

person1.present();
