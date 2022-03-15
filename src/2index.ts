//? : 있던가 없던가
//타입스크립트 : 변수의 타입, 함수의 타입 등을 사전에 선언해 잘못된 작업을 사전에 방지해줌
//자바는 제한이 없어서 쉽게 쉽게 작성할 수 있지만 타입스크립트보단 실수확률도 올라가고 잘못된 타입을 사용해 오류가 발생 할 수도 있음
// interface Human {
//   // function 하나하나 타입을 선언하면 귀찮 / interface 사용
//   //javascript에서는 인터페이스를 사용하지 않음
//   name: string;
//   age: number;
//   gender: string;
// }

class Human {
  //js코드가 인터페이스 스면 ts측면에서 안전, 하지만 react, node, express, 에서 쓸때는 class로 사용하는게 좋음
  public name: string;
  public age: number;
  public gender: string;
  //생성자 메소드 : 클래스가 호출될때 마다 생성됨,
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    // 클래스 속성 = 생성자 name
  }
}

const lynn = new Human("lyne", 22, "female");
// const person = {
//   name: "nicolas",
//   gender: "male",
//   age: 22,
// };

const sayHI = (person: Human): string => {
  //:void :어떤 값을 받을지 선언 지금은 string으로 선언
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHI(lynn));

export {};
