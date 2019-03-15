// Your code here
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    const sound = "meow!";
    return `${this.name} says ${sound}`;
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    const sound = "woof!";
    return `${this.name} says ${sound}`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    if (this.sex === 'male') {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      const sound = 'squawk!';
      return `${this.name} says ${sound}`;
    }
  }
}