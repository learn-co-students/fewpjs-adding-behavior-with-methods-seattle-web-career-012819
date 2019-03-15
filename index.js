class Cat {
  constructor(name, sex)  {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    return `${this.name} says meow!`
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    return `${this.name} says woof!`
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    if (this.sex === 'male') {
      return `It's me! ${this.name}, the parrot!`
    } else {
      return `${this.name} says squawk!`
    }
  }
}

// cat = new Cat("Sasha", "female")
// cat.speak()
//
// dog = new Dog("Rufio", "male")
// dog.speak()
//
// bird = new Bird("Pablo", "male")
// bird2 = new Bird("Mable", "female")
// bird.speak()
// bird2.speak()
