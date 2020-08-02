class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender  = gender;
        this.interests = interests;
    }

    greeting() {
        console.log(`Hi! I'm ${this.name.first}`)
    };

    farewell() {
        console.log(`${this.name.first} has left the building. Bye for now!`)
    }
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting()

let leia = new Person('Leia', 'Organa', 19, 'female', ['Governament']);
leia.farewell()

class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
        // this.name = {
        //     first,
        //     last
        // };

        super(first, last, age, gender, interests);

        // this.age = age;
        // this.gender = gender;
        // this.interests = interests;
        this.subject = subject;
        this.grade = grade;
    }
}

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5)
snape.greeting();
snape.farewell();
snape.age
snape.subject