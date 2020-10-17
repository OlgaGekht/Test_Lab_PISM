'use strict';

class User {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    alert(`Пользователь: ${this.name}, возраст: ${this.age} лет`);
  }

}

const user = new User("Оля", 19);
const userMan = new User("Дима", 20)
user.say(); // Оля
userMan.say(); //Дима