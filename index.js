// Your code here
class Cat{
  constructor(name, gender){
    this.name = name;
    this.gender = gender;
  }

  speak(){
    return `${this.name} says meow!`
  }
}

class Dog{
  constructor(name, gender){
    this.name = name;
    this.gender = gender;
  }

  speak(){
    return `${this.name} says woof!`
  }
}

class Bird{
  constructor(name, gender){
    this.name = name;
    this.gender = gender;
  }

  speak(){
    if(this.gender === "female"){
      return `${this.name} says squawk!`
    }
    else{
      return `It\'s me! ${this.name}, the parrot!`
    }
  }
}
