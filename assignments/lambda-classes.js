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
   demo(subject) {
     return `Today we are learning about ${subject}`
   }
   grade(subject) {
    //  let studentGrade = Math.floor(Math.random() * 100) + 1;
     return `${this.name} receives a perfect score on ${subject}`
   }
  }

  class Student extends Person {
    constructor(StudentAttr){
      super(StudentAttr);
      this.previousBackground = StudentAttr.previousBackground
      this.className = StudentAttr.className
      this.favSubjects = StudentAttr.favSubjects
      this.grade = StudentAttr.grade
    }
    listsSubjects() {
      return this.favSubjects.forEach(function(currentValue){
        console.log(currentValue);
      });
    }
    PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
      return `${this.name} has begun sprint challenge on ${subject}`;
    }
    // graduate() {
    //   if( this.studentGrade >= 70) {
    //     return `Congratulations, you just Graduated from Lambda School.`;
    //   } else {
    //     return studentGrade;
    //   }
    // }
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
    previousBackground: 'insurance agent',
    className: 'WEB23',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });

  const mike = new PM({
    name: 'Mike',
    location: 'Boston',
    age: 27,
    gradClassName: 'CS1',
    favInstructor: 'Sean',
    favLanguage: 'JavaScript'
  });

ivan.listsSubjects();
console.log(carlos.speak());
console.log(igor.demo('Python'));
console.log(igor.grade('JavaScript'));
// console.log(ivan.graduate())
console.log(ivan.PRAssignment('JavaScript'));
console.log(ivan.sprintChallenge('Python'));
console.log(mike.standUp('Avengers'));
console.log(mike.debugsCode('Ivan'));