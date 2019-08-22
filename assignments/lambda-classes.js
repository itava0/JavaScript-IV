// CODE here for your Lambda Classes
class Person {
  constructor(attributes){
    this.name = attributes.name
    this.age = attributes.age
    this.location = attributes.location
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}//this closes the person

class Instructor extends Person {
  constructor(InstructorAttr){
    super(InstructorAttr);
    this.specialty = InstructorAttr.specialty
    this.favLanguage = InstructorAttr.favLanguage
    this.catchPhrase = InstructorAttr.catchPhrase
   }
   demo() {
     return `Today we are learning about ${this.favLanguage}`
   }
   grade() {
     return `${this.name} receives a perfect score on ${this.favLanguage}`
   }
  }

  class Student extends Instructor {
    constructor(StudentAttr){
      super(StudentAttr);
      this.previousBackground = StudentAttr.previousBackground
      this.className = StudentAttr.className
      this.favSubjects = StudentAttr.favSubjects
    }
    listsSubjects() {
      return this.favSubjects;
    }
    PRAssignment() {
      return `${this.name} has submitted a PR for ${this.favLanguage}`;
    }
    sprintChallenge() {
      return `${this.name} has begun sprint challenge on ${this.favLanguage}`;
    }
  }

  class PM extends Instructor {
    constructor(PMAttr){
      super(PMAttr);
      this.gradClassName = PMAttr.gradClassName
      this.favInstructor = PMAttr.favInstructor
    }
    standUp(channel) {
      debugger;
      return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student) {
      return `${this.name} debugs ${student}'s code on ${this.favLanguage}`
    }
  }

  const carlos = new Person({
    name: 'Carlos',
    location: 'Paterson',
    age: 26,
  });

  const igor = new Instructor({
    name: 'Igor',
    location: 'Charlotte',
    age: 42,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
  });

  const ivan = new Student({
    name: 'Ivan',
    previousBackground: 'car salesman',
    className: 'CS132',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    favLanguage: 'JavaScript'
  });

  const mike = new PM({
    name: 'Mike',
    location: 'Boston',
    age: 27,
    gradClassName: 'CS1',
    favInstructor: 'Sean',
    favLanguage: 'JavaScript'
  });

console.log(carlos.speak());
console.log(igor.demo());
console.log(igor.grade());
console.log(ivan.listsSubjects());
console.log(ivan.PRAssignment());
console.log(ivan.sprintChallenge());
console.log(mike.standUp('Avengers'));
console.log(mike.debugsCode('Ivan'));

// console.log(daughter.work());
// console.log(daughter.study());
// console.log(grandson.work());
// console.log(grandson.study());
// console.log(grandson.play());