export class Employee {
    #name;
    #cpf;
    #salary;
    #bonus;
    #password;

    constructor(name, cpf, salary){
        this.#name = name;      // Assignement directly
        this.#cpf = cpf;        // Assignement directly
        this.salary = salary;   // Assignement by setter
        this.bonus = 1.0;       // Assignement by setter
    }
    
    // Getter
    get bonus() {return this.#bonus;}
    get cpf() {return this.#cpf;}
    get name() {return this.#name;}
    get password() {return this.#password;}
    get salary() {return this.#salary;}

    // Setters
    set bonus(value) {
        this.#bonus = value;
    }

    set password(key) {
        this.#password = key;
    }

    set salary(value) {
        this.#salary = value;
    }

    // passwordRegistration and the setter method password() do the same thing, but the meaning is different.
    // Second level of encapsulation: the setter password is calling inside the passwordRegistration().
    passwordRegistration(key){
        this.password = key;    // Assignement by setter
    }

    authenticate(key){
        return (key == this.password)
    };
}