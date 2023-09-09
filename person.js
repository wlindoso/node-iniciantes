// Instalar nodemon: npm install nodemon | nodemon -g | nodemon --save-dev
class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `My name is ${this.name}!`;
    // return `Hello, my name is ${this.name}!`;
  }
}

module.exports = {
  Person,
};
