class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return `${this.name} says ${this.sound}!`;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, "meow");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "woof");
  }
}

class Bird extends Animal {
  constructor(name, sex) {
    super(name, "squawk");
    this.sex = sex;
  }

  speak() {
    if (this.sex === "male") return `It's me! ${this.name}, the parrot!`;
    else return super.speak();
  }
}