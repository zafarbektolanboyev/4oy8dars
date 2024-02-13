// function showNumber(param1) {
//   let a = 12;
//   param1(a);
// }

// [1, 2, 3].forEach((item, index, arr) => {
//   // console.log(item, index, arr);
// });

// [1, 2, 3].map(() => {});
// [1, 2, 3].sort(() => {});
// [1, 2, 3].filter(() => {});
// [1, 2, 3].find(() => {});
// [1, 2, 3].every(() => {});
// [1, 2, 3].some(() => {});
// [1, 2, 3].fill(() => {});
// [1, 2, 3].flat(() => {});
// [1, 2, 3].flatMap(() => {});
// [1, 2, 3].reduce(() => {});

// function a() {
//   return function () {
//     return "hello world";
//   };
// }

// console.log(a()());

// objects

// let aKey = "age1";

// let person = {
//   car: undefined,
//   isMerried: null,
//   fullName: "Ahror Soliyev",
//   [aKey]: 20,
//   from: "Uzbekistan",
//   language: ["russian", "uzbek", "engilish"],
//   familiy: {
//     father: "Jamshidbek",
//     mother: "",
//     sister: "",
//   },
// };

// person.isMerried = {
//   fullName: "",
//   age: 20,
// };

// person.language.forEach();

// Object.freeze(person);

// person.familiy.sister = "Charos";
// person["car"] = "Velic";

// person.study = false;

// delete person.from;

// console.log(person);

// const personKeys = Object.keys(person);
// const personValues = Object.values(person);
// console.log(personKeys);
// console.log(personValues);

// let someKey = "familiy";

//// console.log(person.age);
// console.log(person[someKey]["father"]);

// function funcMisol(a, b, c) {
//   if (c == "+") {
//     console.log(a + b);
//   } else if (c === "-") {
//     console.log(a - b);
//   }
// }

// funcMisol(1, 2, "+");

// for of & for in & for
// const person = { fullName: "Ahror Soliyev", age: 20, from: "Uzbeksitan" };

// for (let key in person) {
//   console.log(person[key]);
// }

// console.log(Math);

/* const person = {
  fullName: "Ahror Soliyev",
  age: 20,
  smth: this,
  from: "Uzbeksitan",
  about: function () {
    return this;
  },
  innerObj: {
    a: 1,
    b: 2,
    c: 3,
    innerAbout: function () {
      return this;
    },
  },
};

const result1 = person.about();
const result2 = person.innerObj.innerAbout();
console.log(result1, result2);
*/

// const salaries = {
//   Jack: 24000,
//   Paul: 34000,
//   Monica: 55000,
// };

// // using for...in
// for (let i in salaries) {
//   // add a currency symbol
//   let salary = "$" + salaries[i];

//   // display the values
//   console.log(`${i} : ${salary}`);
// }

// Jack : $24000,
// Paul : $34000,
// Monica : $55000

// const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];

// function getAverageAge(arr) {
//   let allAge = 0;
//   arr.forEach((item) => {
//     allAge += item.age;
//   });
//   return allAge / people.length;
// }

// const result = getAverageAge(people);
// console.log(result);

// const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];

// function isMarried(arr) {
//   arr.forEach((person) => {
//     if (person.age > 25) {
//       person.isMarried = true;
//     } else {
//       person.isMarried = false;
//     }
//   });

//   return arr;
// }

// console.log(isMarried(people));

const people = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
];

// function getNameMaxMinAge(arr) {
//   let max = 0;
//   let min = 0;

//   let minName = "";
//   let maxName = "";

//   for (let item of arr) {
//     if (item.age > max) {
//       max = item.age;
//       maxName = item.name;
//     } else if (min === 0 || min >= item.age) {
//       min = item.age;

//       minName = item.name;
//     }
//   }

//   return { minName, maxName };
// }

// const result = getNameMaxMinAge(people);
// console.log(result);

const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    alreadyRead: false,
  },
  {
    title: "Dunyo ishlari",
    author: "O'tkir Hoshimov",
    alreadyRead: true,
  },
  {
    title: "Vaqtning qadri",
    author: "Abdulfattoh Abu G'udda",
    alreadyRead: false,
  },
];

function alreadyRead(books) {
  books.forEach((book) => {
    if (book.alreadyRead) {
      console.log(`${book.author}ning ${book.title} kitobi o'qiglan`);
    } else {
      console.log(`${book.author}ning ${book.title} kitobi o'qilmagan`);
    }
  });
}

alreadyRead(books);
