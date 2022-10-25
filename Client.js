export class Client {
    #cpf;
    name;

    #password;

    // Constructor method
    constructor(name, cpf) {
        this.name = name;
        this.#cpf = cpf;
    }

    // Getters
    get cpf() {return this.#cpf;}
    get name() {return this.name;}
    get password() {return this.#password;}

    set password(key) {
        this.#password = key;
    }

    authenticate(key){
        return (key == this.password);
    }

}