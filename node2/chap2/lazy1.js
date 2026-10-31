let a = 3, b = 0;
console.log(a || b);
console.log(a && b);
console.log(b || a);
console.log(b && a);

let person1 = { name: "홍길동" }, person2 = null;
console.log(person1 && person1.name);
console.log(person2 && person2.name);