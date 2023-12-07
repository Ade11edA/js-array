// let x = 3;

// console.log(x);
// let a = [8,45,356,38,0];
// console.log(a);
// console.log(a.length);
// a.push(100);
// console.log(a[100]); // undefined

// let b = ["car", "truck", "bike"];
// console.log(b);

// console.log(b[1]);

// for (let i = 0; i<b.length; i++){
//     console.log("woo", i, b[i])
// }

let rectangle = {width: 25, height: 50, area: () =>{25*50}}

let person1 = {name: 'Adel', age: 15}
let person2 = {name: 'Kawther', age: 15}
let person3 = {name: 'Liz', age: 14}

let people = [person1, person2, person3]
console.log((person1.age + person2.age + person3.age) / 3);

let sum = 0;
for (let i = 0; i<people.length; i++){
    sum += people[i].age;
}
console.log(sum / people.length);