let x = 3;

console.log(x);
let a = [8,45,356,38,0];
console.log(a);
console.log(a.length);
a.push(100);
console.log(a[100]); // undefined

let b = ["car", "truck", "bike"];
console.log(b);

console.log(b[1]);

for (let i = 0; i<b.length; i++){
    console.log("woo", i, b[i])
}