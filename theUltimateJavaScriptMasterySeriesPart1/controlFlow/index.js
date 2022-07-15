// for
// while
// do-while

// for-in
const person = {
  name: "Agon",
  age: 22,
};

for (let key in person) {
  console.log(key, person[key]);
}

// Dot notation
// person.name

// Bracket Notation
// person['name']
let colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(index, colors[index]);
}

// for-of
for (let color of colors) {
  console.log(color);
}
