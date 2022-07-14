let person = {
  name: "Agon",
  age: 22,
};

// Dot Notation
person.name = "Mosh";

// Bracket Notation
let selection = "name";
person[selection] = "John";

// console.log(person.name);
console.log(person["name"]);
