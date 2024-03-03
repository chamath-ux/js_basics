class Person{

    constructor(name, age, email)
    {
        this.name = name;
        this.age = age;
        this.email = email;
        this.regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    }

    get userName() //getter (name)
    {
        return this.name;
    }

    set userName(str) // setter (name)
    {
        this.name = str;
    }

    get userEmail() // getter (email)
    {
        return this.email
    }

    get checkEmail() //getter (check email validation)
    {
        
        return this.regex.test(person.userEmail);
    }

}

const person = new Person('chamath',30,'chamath.rmc@gmail.com');

person.userName = 'Ranuka';
console.log(person.checkEmail);