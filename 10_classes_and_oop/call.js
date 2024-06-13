function setUsername(username){
    // complex DB calls
    this.username = username;
}

function createUser(username, email, password){
    setUsername.call(this,username);

    this.email = email;
    this.password = password;
}

const shri = new createUser('shrii', 'shrii@gmail.com','123');
console.log(shri);