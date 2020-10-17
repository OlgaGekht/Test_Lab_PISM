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

let user = new User("Оля", 19);
user.say(); // Оля