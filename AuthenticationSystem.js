export class AuthenticationSystem {

    // Static methods
    static login(authenticatable, key){ //Duck typing Methodology
        if (AuthenticationSystem.isAuthenticatable(authenticatable)){
            return authenticatable.authenticate(key);
        }
        return false;
    }

    // isAuthenticable is a method to verify if the object has the autenticate() method
    static isAuthenticatable(authenticatable){
        return ("authenticate" in authenticatable) && (authenticatable.authenticate instanceof Function); // Operators 'in' and 'instanceOf'
    }
}