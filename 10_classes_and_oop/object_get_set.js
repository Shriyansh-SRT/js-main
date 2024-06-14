const User = {
    _email: 'shri@gmail.com',
    _password: 'ajajaja',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value; 
    }
}

console.log(User.email);
const pri = Object.create(User);
console.log(pri.email);