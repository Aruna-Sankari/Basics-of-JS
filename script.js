 // Basics 
console.log("welcome");
console.log(12389);
console.log(18.25);
console.log(true);
console.log([87, 12, 94, 13]);
console.log({ fname: "aruna", lname: "sankari" });
console.table({ fname: "aruna", lname: "sankari" });
// console.error("sample error");
// console.warn("custom sample warning");
// console.clear(); // it cleares the console screen

// 1.Variable Scope 

// Var(Global Scope)
if (true) {
    var msg = "HELLO WORLD";
}
console.log(msg);

// let(local scope)
if (true) {
    let a = "HII";
    console.log(a);
}

// const(local scope)
if (true) {
    const b = "Hurrah";
    console.log(b);
}

// 2.Variable Redeclaration

var a = 25;
var a = 45;
console.log(a);

// let c=28;
// let c=24;
// console.log(c); // error

// const v=12;
// const v=89;
// console.log(v); // error

// 3.Reassignment 

var d = 98;
d = 19;
console.log(d);

let s = 87;
s = 23;
console.log(s);

// const t=18;
// t=73;
// console.log(t); // error

// Object Reassignment //
const student = { name: "arun", age: 32 };
console.log(student);
student.name = "arumugam";
console.log(student);
console.log(student.name);

// Typeof (Primitive Datatype)//
var a = 25.5;
console.log(typeof a);  // Number

let names = "aruna";
console.log(typeof names);  // String

var isMarried = true;
console.log(typeof isMarried); // Boolean

let phone = null;
console.log(typeof phone); // Object

const r = undefined;
console.log(typeof r); // undefined

//Non-Primitive Datatype //
var courses = ["c", "c++", "java", "python"];
console.log(typeof courses);   // object

let stu = { name: "banu", age: 24 };
console.log(typeof stu);  // object

// Type Conversion //
var w = String(25);
console.log(w, typeof w); // Number to String

// Array //
let a1 = [1, 2, 3, 4, 5];
console.log(a1, typeof a1);  // object
a1 = a1.toString();
console.log(a1, typeof a1);  // string

// String to Number

let a3 = "123";
console.log(a3, typeof a3);
a3 = Number(a3);
console.log(a3, typeof a3);

let a4 = "tiya";
console.log(a4, typeof a4);
a4 = Number(a4);
console.log(a4, typeof a4);

// ParseInt(string to number)
let a5 = "35";
console.log(a5, typeof a5);
a5 = parseInt(a5);
console.log(a5, typeof a5);

// Type Coercion
let h = "25";
let j = 10;
console.log(h + j);
h = Number(h);
console.log(h + j);

// Math function

//Round()
console.log(Math.round(4.3));
console.log(Math.round(8.9));

//Ceil()
console.log(Math.ceil(7.4));
console.log(Math.ceil(8.8));

// Floor()
console.log(Math.floor(2.7));
console.log(Math.floor(5.8));

//Sqrt()
console.log(Math.sqrt(4));
console.log(Math.sqrt(4.2));

//trunc()
console.log(Math.trunc(3.7));
console.log(Math.trunc(4.3));

//abs()
console.log(Math.abs(12));
console.log(Math.abs(-12));

//Pow()
console.log(Math.pow(4, 2));
console.log(Math.pow(2, 3));

//Min()
console.log(Math.min(13, 45));
console.log(Math.min(3.4, 8.7));
console.log(Math.min(-23, -15));

//Max()
console.log(Math.max(36, 89));
console.log(Math.max(3.97, 9.63));
console.log(Math.max(-27, -89));

//random()
console.log(Math.random(3));
console.log(Math.random(7.6));
console.log(Math.random(-4));

//sign()
console.log(Math.sign(18));
console.log(Math.sign(-7));
console.log(Math.sign(0));

//Exponentiation
let c = 2 ** 3;
console.log(c);

//Comparison Operator

//Double Equal
let t1 = 10;
let t2 = 26;
console.log(t1 == t2);
t1 = 90;
t2 = 90;
console.log(t1 == t2);
t1 = 24;
t2 = "24";// string
console.log(t1 == t2);

//Strict Equality(===)
e1 = 24;
e2 = 89;
console.log(e1 === e2);

e1 = 29;
e2 = 29;
console.log(e1 === e2);

e1 = 97;
e2 = "97";
console.log(e1 === e2);

//Not Equal(!=)
e1 = 26;
e2 = 26;
console.log(e1 != e2);

e1 = 95;
e2 = 89;
console.log(e1 != e2);

//Relational Operator
let r1 = 20;
let r2 = 80;
console.log(r1 > r2);
console.log(r1 < r2);
console.log(r1 >= r2);
console.log(r1 <= r2);

r1 = 10;
r2 = 10;
console.log(r1 >= r2);
console.log(r1 <= r2);

// Logical Operator

// AND Operator(&&)
let mark1 = 45;
let mark2 = 20;
console.log(mark1 >= 35 && mark1 <= 100);
console.log(mark2 >= 35 && mark2 <= 100);

//OR Operator(||)
let d1 = 6;
console.log(d1 == 6 || d1 == 5);
d1 = 10;
console.log(d1 == 9 || d1 == 8);

//NOT Operator(!)
let w1 = true;
console.log(!w1);
w1 = false;
console.log(!w1);

//Conditional(or)Ternary Operator
let age = 15;
const result = age >= 18 ? "Eligible" : "Not Eligible";
console.log(result);

age = 23;
const result1 = age >= 18 ? "Eligible" : "Not Eligible";
console.log(result1);

//Handling Null Values
function welcome(name) {
    const res = name ? name : "No name";
    console.log("welcome" + " " + res);
}
welcome(); // No Value
welcome("Aruna");
welcome(null); // No Value

//Conditional Chains
let avg = 98;
avg = 88;
avg = 79;
const res1 = avg >= 90 ? "A Grade" : avg >= 80 ? "B Grade" : "C Grade";
console.log("Grade:", res1);

// Bitwise Operator

//Bitwise AND(&)
let y1 = 2;
let y2 = 3;
console.log(y1 & y2);

y1 = 12;
y2 = 24;
y1 &= y2;
console.log(y1);

//Bitwise OR(|)
y1 = 12;
y2 = 24;
console.log(y1 | y2);
y1 |= y2;
console.log(y1);

//Bitwise NOT(~)
y1 = 29;
console.log(~y1);

//Bitwise XOR(^)
y1 = 2;
y2 = 3;
console.log(y1 ^ y2);

// Left Shift
y1 = 5;
y2 = 2;
console.log(y1 << y2);

// Nullish Coalescing Operator(??)
y1 = null ?? "no value";
console.log(y1);
y1 = "arun" ?? "no value";
console.log(y1);

y2 = 45 ?? 25;
console.log(y2);
y2 = 78 ?? 25;
console.log(y2);

y2 = null ?? 28;
console.log(y2);

//Nullish Coalescing Assignment Operator(??=)
const u = { name: "arun" };
console.log(u);
console.log(u.name);
console.log(u.city);

// New key in Object
u.city ??= "Kadayam";
console.log(u.city);
console.log(u);

//Increment(or)Decrement
y1 = 2;
y1++;
console.log(y1);

y2 = 5;
y2--;
console.log(y2);

//Prefix Increment(or)Postfix Increment(++y1),(y1++)
y1 = 5;
y2 = ++y1;
console.log(y1, y2);

y1 = 3;
y2 = y1++;
console.log(y1, y2);

//Prefix Decrement(or)Postfix Decrement(--y1),(y1--)
y1 = 10;
y2 = --y1;
console.log(y1, y2);

y1 = 18;
y2 = y1--;
console.log(y1, y2);

// CONDITIONAL STATEMENTS

//IF STATEMENT

age = 27;
// age=13;
if (age >= 18) {
    console.log("you are eligible to vote");
}

// age=prompt("Enter your age:")
// if (age!=null && age >= 18) {
//     console.log("you are eligible to vote");
// }

//IF ELSE STATEMENT

// age=prompt("Enter your age:");
// if(age>=18){
//     console.log("you are eligible to vote");
// }
// else{
//     console.log("you are not eligible")
// }

// ELSE IF LADDER
let number = 1;
// number=-14;
// number=0;
if (number < 0) {
    console.log(number, "is Negative Number");
}
else if (number > 0) {
    console.log(number, "is Positive Number");
}
else {
    console.log("Given number is zero");
}

avg = 92;
// avg=88;
// avg=75;
// avg=14;
if (avg >= 90 && avg <= 100) {
    console.log("A Grade");
}
else if (avg >= 81 && avg <= 89) {
    console.log("B Grade");
}
else if (avg >= 71 && avg <= 79) {
    console.log("C Grade");
}
else {
    console.log("D Grade");
}

// Nested If
let tam = 97;
let eng = 86;
let maths = 80;
let total = tam + eng + maths;
console.log("Total:", total);
avg = total / 3;
console.log("Average:", avg);
if (tam >= 35 && eng >= 35 && maths >= 35) {
    console.log("Result:Pass")
    if (avg >= 90 && avg <= 100) {
        console.log("A Grade");
    }
    else if (avg >= 80 && avg <= 90) {
        console.log("B Grade");
    }
    else if (avg >= 80 && avg <= 90) {
        console.log("B Grade");
    }
    else if (avg >= 70 && avg <= 80) {
        console.log("B Grade");
    }
    else {
        console.log("D Grade");
    }
}
else {
    console.log("Result:Fail");
    console.log("Grade:No Grade");
}

//SWITCH STATEMENT
let num = 2;
// num = 4;
switch (num) {
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    default:
        console.log("four");
        break;
}

//COMBINING CASE STATEMENT
let letter = 'a';
// letter='g';
// letter='I';
switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log(letter, "is an vowel");
        break;
    default:
        console.log(letter, "is not an vowel");
        break;
}

//WHILE LOOP
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//DO WHILE LOOP
let table = 2;
limit = 5;
i = 1;
do {
    console.log(table + "x" + i + "=" + (table * i));
    i++;
}
while (i <= limit);

//FOR LOOP
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let arr = [];
for (let i = 0; i <= 100; i++) {
    arr.push(i);
}
console.log(arr);

//NESTED FOR LOOP
let nums = [];
for (let i = 0; i < 3; i++) {
    nums.push([]);
    for (let j = 0; j < 3; j++) {
        nums[i].push(j);
    }
}
console.log(nums);
console.table(nums);

//To Print Name
let name = ["arun", "ram", "sam", "raja"];
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

//FOR OF LOOP(ARRAY)
for (let names of name) {
    console.log(names);
}

//FOR IN LOOP(OBJECT)
user = { name: "aruna", age: 23, city: "tenkasi", contact: 9812367091 };
for (let prop in user) {
    console.log(prop);
    console.log(prop + ":" + user[prop]);
}

//Looping over objects by converting to an array
let arr_key = Object.keys(user);
console.log(arr_key); // Key Values
console.table(arr_key);

let arr_value = Object.values(user);
console.log(arr_value);
console.table(arr_value);

for (let i = 0; i < arr_key.length; i++) {
    console.log(arr_key[i] + ":" + arr_value[i]);
}

// Break Statement
for (i = 1; i <= 10; i++) {
    console.log(i);
    if (i == 5) {
        break;
    }
}

//Continue Statement
for (let i = 0; i <= 10; i++) {
    if (i == 8) {
        continue;
    }
    console.log(i);
}

//To Print Even Number
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

//To Print Even Number
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}

//Label Block

// find the first occurence of names start with 'R'
let groups = [["Ram", "Sam", "Ravi"],
["Kumar", "Tiya", "Sundar"],
["Rajesh", "Sara", "Rahul"]];

for (let group of groups) {
    inner:
    for (let member of group) {
        if (member.startsWith('R')) {
            console.log("found one starting with R:", member);
            break inner;
        }
    }
}

//STRING METHODS

//CONCATENATION
let first_name = "Aruna";
let last_name = "Sankari";
res = first_name + " " + last_name;
console.log(res);

res = first_name.concat(' ', last_name);
console.log(res);

//APPEND 
res = "Aruna";
res += " Sankari";
console.log(res);

//ESCAPING STRING
t = "she can't run";
console.log(t);
t = 'she can\'t run'; //(\)Escape Character
console.log(t);

//LENGTH
t = first_name.length;
console.log(t);

//TOUPPERCASE()
t = first_name.toUpperCase();
console.log(t);

//TOLOWERCASE()
t = last_name.toLowerCase();
console.log(t);

//INDEX OF()
t = first_name.indexOf('r');
console.log(t);

//LAST INDEXOF()
t = last_name.lastIndexOf('a');
console.log(t);

//CHAR AT()
t = first_name.charAt(2);
console.log(t);

//CHARCODEAT()
t = first_name.charCodeAt(1);
console.log(t);

//SUBSTR()
t = first_name.substr(2, 3);
console.log(t);

//SUBSTRING()
let text = "01234567890";
console.log(text.substring(0, 4));

text1 = text.substring(4);
console.log(text1);

text1 = text.substring(4, 0);
console.log(text1);

text1 = text.substring(26, 32);
console.log(text1);

//SLICE()
text2 = text.slice(3, 6);
console.log(text2);

text2 = text.slice(8, 3);
console.log(text2);

text2 = text.slice(27, 34);
console.log(text2);

text2 = text.slice(-3);
console.log(text2);

//SPLIT()
let text3 = "Tutor Joes Computer Education";
textt = text3.split(" ");
console.log(textt);
console.table(textt);

//REPLACE()
let g = "Iam from Tenkasi";
console.log(g.replace("Tenkasi", "Kadayam"));

//INCLUDES()
const pets = ["cat", "dog", "bat"];
console.log(pets.includes('rabbit'));
console.log(pets.includes('dog'));

//TRIM()
let word = " Welcome ";
console.log("Before Trim:", word.length);
word1 = word.trim();
console.log("After Trim:", word1.length);

//PADSTART()
let p = "7";
console.log(p.padStart(4, '$'));

//PADEND()
p = "A";
console.log(p.padEnd(6, '#'));

//LONG LITERAL
let longstring = "C is a Powerful general-purpose programming language \
developed at T's Bell laboratories of USA in 1972 \
it was designed and written by Dennis Ritchie..";
console.log(longstring);

//CHARCODE
console.log(String.fromCharCode(67));

/////////////END OF STRING METHODS///////////////////////

//TEMPLATE STRING LITERAL
let f_name = "nandhini";
let ag = 22;
let city = "Kadayam";
let role = "web designer";
let output = "";
output += `<table border=1 cellspacing=5 cellpadding=8 align=center style="margin-top:220px">
<tr>
<th>Name</th>
<td>${f_name}</td>
</tr>
<tr>
<th>Age</th>
<td>${ag}</td>
</tr>
<tr>
<th>City</th>
<td>${city}</th>
</tr>
<tr>
<th>Role</th>
<td>${role}</td>
</tr>
</table>`;
document.body.innerHTML = output;

//ARRAY
let ar = [10, 20, 30, 40];
console.log(ar);
console.table(ar);
console.log(ar[2]);

//CONSTRUCTOR
ar = new Array(10, 20, 30);
// console.log(ar);
console.table(ar);

ar = new Array("hi", 90.45, 61, true, { m1: 95, m2: 89, m3: 82 });
// console.log(ar);
console.table(ar);

//ARRAY METHODS

//FOREACH()
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
n.forEach((value) => {
    console.log(value);
})
n.forEach((value, index) => {
    console.log("Index:" + index + " " + "Value:" + value);
})

//FOREACH IN OBJECT
let people = [{ full_name: "Arun", age: 22, city: "Kadayam", salary: 10000 },
{ full_name: "Rani", age: 28, city: "NGL", salary: 40000 },
{ full_name: "Maha", age: 30, city: "Tenkasi", salary: 20000 }];
people.forEach((value, index) => {
    console.log(value.full_name + " " + index);
});

//MAP()
let sqrt = n.map((e) => {
    return Math.sqrt(e);
})
console.log(sqrt);

sqrt = n.map((e) => {
    return e * e;
})
console.log(sqrt);

//OBJECT IN MAP
//METHOD-1
let eligible_status = people.map((peoples) => ({
    name: peoples.full_name,
    age: peoples.age,
    city: peoples.city,
    salary: peoples.salary,
    status: user.age >= 18 ? "Eligible" : "Not Eligible"
}));
console.table(eligible_status);

//METHOD-2
eligible_status = people.map((peoples) => ({
    ...peoples,
    status: user.age >= 18 ? "Eligible" : "Not Eligible"
}));
console.table(eligible_status);

//SLICE()
console.log(n.slice());
console.log(n.slice(2));
console.log(n.slice(2, 6));

//SPLICE()
// n=[1,2,3,4,5,6,7,8,9,10];
let removed_elements = n.splice(4);
console.log(removed_elements);
console.log("After Splice:", n);

let n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removed_elements = n1.splice(4, 5);
console.log(removed_elements);
console.log("After Splice:" + n1);

let n2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removed_elements = n2.splice(5, 3, 25, 36);
console.log(removed_elements);
console.log("After Splice:", n2);

n3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removed_elements = n3.splice(3, 4, [89, 25, 12]);
console.log(removed_elements);
console.log(n3);

n4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
n4.splice(4, 0, 100, 300);
console.log(n4);

//CONCAT()
let q1 = [10, 20, 30];
let q2 = [40, 50, 60];
let q3 = [70, 80, 90];
let q4 = q1.concat(q2, q3);
console.log(q4);

q4 = q2.concat(q3, 94, 81, 73.45, ['a', 'b', 'c'], { m1: 92, m2: 75, m3: 86 });
console.log(q4);
console.table(q4);

//SORT()
const namess = ["Riya", "Raju", "Mohan", "Meena"];
console.log(namess.sort());

//SORTING IN NUMBERS
//ASCENDING ORDER
num = [48, 2, 17, 29, 84, 12, 73, 1, 62];
num.sort((a, b) => {
    return a - b;
});
console.log(num);

//DESCENDING ORDER
num = [48, 2, 17, 29, 84, 12, 73, 1, 62];
num.sort((a, b) => {
    return b - a;
});
console.log(num);

//SORT IN OBJECT
//ASCENDING ORDER
people.sort((a, b) => {
    return a.age - b.age;
})
console.table(people);

//DESCENDING ORDER
people.sort((a, b) => {
    return b.age - a.age;
})
console.table(people);

people.sort((a, b) => {
    if (a.full_name > b.full_name) return 1;
    if (a.full_name < b.full_name) return -1;
    return 0;
})
console.table(people);

//FILL(value,start,end)
n = [1, 2, 3, 4, 5];
console.log("Before Fill:", n);
n.fill(45);
console.log("After Fill:", n);
n.fill('$');
console.log("After Fill :", n);

n1 = [1, 2, 3, 4, 5];
n1.fill(25, 3);
console.log("After Fill:", n1);
n1.fill(25, 0, 2);
console.log("After Fill:", n1);

//INCLUDES(value,start_index)
const products = ["pen", "pencil", "eraser", "box", "pen"];
console.log(products.includes("pen"));
console.log(products.includes("book"));
console.log(products.includes("pen", 3));
console.log(products.includes("pencil", 2));

//JOIN()
console.log(products.join());
console.log(products.join('|'));
console.log(products.join('#'));

//REVERSE()
n = [1, 2, 3, 4, 5];
n.reverse();
console.log(n);

//REVERSE IN OBJECT
const x = { 0: 10, 1: 20, 2: 30, 3: 40, length: 4 };
console.log("Before Reverse:", x);
Array.prototype.reverse.call(x);
console.log("After Reverse:", x);

//PUSH()
n = [11, 12, 13, 14, 15];
console.log(n.push(16, 17, 18)); //Length
console.log("Push:", n);

let users1 = ["Arun", "Ram", "Sam"];
let users2 = ["Ravi", "SK", "Kumar"];
users1.push(...users2);
console.log(users1);

//POP()
const users = ["Arun", "Ram", "Sam", "Kaviya"];
console.log(users.pop());
console.log(users);

//SHIFT()
console.log(users.shift());
console.log(users);

//UNSHIFT()
console.log(n.unshift(9, 10));  //Length
console.log(n);

//INDEXOF()
user = ["Subi", "Aruna", "Ram", "Vidya"];
console.log(user.indexOf("Aruna"));
console.log(user.indexOf("Arun"));

people = "Janani Sree";
console.log(people.indexOf("r"));
console.log(people.indexOf("a", 2));

//LASTINDEXOF
console.log(user.lastIndexOf("Vidya"));
let addr = "North street Kadayam";
console.log(addr.lastIndexOf('street'));

//EVERY() (AND GATE)==>Even
n = [18, 24, 76, 92];
res = n.every(e => e % 2 == 0);
console.log(res);

n = [18, 23, 76, 92];
res = n.every(e => e % 2 == 0);
console.log(res);

//SOME() (OR GATE) ==>Odd
n = [10, 1, 17, 3];
res = n.some(e => e % 2 !== 0);
console.log(res);

n = [18, 24, 56, 78];
res = n.some(e => e % 2 !== 0);
console.log(res);

//OBJECTS IN EVERY & SOME
user = [{ name: "Rani", age: 26 },
{ name: "Valli", age: 25 },
{ name: "Vijaya", age: 34 },
{ name: "Divya", age: 40 }];
res = user.every(e => e.age > 40);
console.log(res);

res = user.some(e => e.age >= 30);
console.log(res);

//PRIMITIVE DATATYPE

name = "ponraj";
console.log(typeof name);

a = 10;
console.log(typeof a);

let isStudent = true;
console.log(typeof isStudent);

let e;
console.log(e);

a = 10;
b = a;
console.log(a);
console.log(b);
a = 25;
console.log(a);
console.log(b);

//REFERENCE DATATYPE 

//OBJECT
user = { name: "Rani", age: 26 };
user1 = user;
console.log(user);
console.log(user1);
user.age = 21;
console.log(user);
console.log(user1);

//ARRAY
let arr1 = [10, 20, 30];
let arr2 = arr1;
console.log(arr1);
console.log(arr2);
arr1.push(40);
console.log(arr1);
console.log(arr2);

//OBJECT CLONE =>2 METHODS

//OBJECT.ASSIGN()
const obj1 = { a: 100, b: 200 };
const obj2 = { c: 300, d: 400 };
let obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

//SPREAD OPERATOR
obj3 = { ...obj1, ...obj2 };
console.log(obj3);

//ARRAY CLONE =>5 METHODS

//SPREAD OPERATOR
let originalarray = [1, 2, 3];
let clonedarray = [...originalarray];
console.log(clonedarray);

//SLICE()
clonedarray = originalarray.slice();
console.log(clonedarray);

//CONCAT()
clonedarray = [].concat(originalarray);
console.log(clonedarray);

//ARRAY FROM()
clonedarray = Array.from(originalarray);
console.log(clonedarray);

//JSON PARSE,JSON STRINGIFY
clonedarray = JSON.parse(JSON.stringify(originalarray));
console.log(clonedarray);

//DESTRUCTURING IN ARRAY

//1st Method
numbers = [10, 20, 30, 40, 50];
let [i1, i2, i3] = numbers;
console.log(i1);
console.log(i2);
console.log(i3);

[i1, i2, i3, , i5] = numbers;
console.log(i1);
console.log(i2);
console.log(i3);
console.log(i5);

//2nd method
[i1, i2, ...i3] = numbers;
console.log(i1);
console.log(i2);
console.log(i3);

//DESTRUCTURING IN OBJECT
let person = { fname: "subi", agg: 30, gender: "female" };
let { fname, agg, gender } = person;
console.log(fname);
console.log(agg);
console.log(gender);

//NESTED ARRAY
let nestedarray = [[1, 2], [3, 4], [5, 6]];
[[a, b], [c, d], [e, f]] = nestedarray;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

//NESTED OBJECT
let address = {
    street: "North Street",
    city1: "NGL",
    state: "TN",
    zip: 627891
}
let employee = {
    name1: "Lakshmi",
    age1: 58,
    gender1: "female",
    address
}
console.log(employee);
let { name1, age1, gender1, address: { street, city1, state, zip } } = employee;
console.log(name1);
console.log(age1);
console.log(gender1);
console.log(street);
console.log(city1);
console.log(state);
console.log(zip);

//DEFAULT PARAMETERS
let person1 = { fname1: "subi", agg1: 30 }
let { fname1, agg1, gender2 = "unknown" } = person1;
console.log(fname1);
console.log(agg1);
console.log(gender2);

let person2 = { fname2: "subi", agg2: 30, gender3: "female" }
let { fname2, agg2, gender3 = "male" } = person2;
console.log(fname2);
console.log(agg2);
console.log(gender3);

//CREATING OBJECTS

//OBJECT LITERAL
let pers = { Name: "riya", age: 26 };
console.log(pers);

//OBJECT CONSTRUCTOR
pers = new Object();
pers.name = "tiya";
pers.age = 89;
pers.role = "developer";
console.log(pers);

//USING CLASS
class Pers {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const pers1 = new Pers("rani", 35);
console.log(pers1);

//DOT NOTATION
console.log(pers.name);
pers.name = "aruna";
console.log(pers.name);

//BRACKET NOTATION
console.log(pers["name"]);
console.log(pers["age"]);

//DOT & BRACKET NOTATION
const prop = "name";  //Key("name") is assigned to the variable prop
console.log(pers[prop]);
console.log(pers.prop);

//ITERATING THROUGH OBJECTS=>4 methods

//FOR IN LOOP
const user3 = { name: "sneha", age: 35 };
console.log(user3);

for (let key in user3) {
    console.log(`${key}:${user3[key]}`)
}

//OBJECT.KEYS()
const keys = Object.keys(user3);
console.log(keys);

keys.forEach(key => {
    console.log(`${key}:${user3[key]}`)   //FOREACH()
})

//OBJECT.VALUES()
const values = Object.values(user3);
console.log(values);
values.forEach(value => {
    console.log(`${value}`)
});

//OBJECT.ENTRIES()
const entries = Object.entries(user3);
console.log(entries);

entries.forEach(entry => {
    console.log(`${entry[0]}:${entry[1]}`)
})

//FOR LOOP
for (let i = 0; i < entries.length; i++) {
    console.log(`${entries[i][0]}:${entries[i][1]}`)
}

//ARRAY OF OBJECT
const users5 = [{ name: "joe", age: 64, role: "designer" },
{ name: "valli", age: 23, role: "developer" },
{ name: "subi", age: 28, role: "data analyst" }];
console.log(users5);

//FOR OF LOOP
for (const user of users5) {
    console.log(user);
    console.log(user.name)
}

//FILTER
const olderuser = users5.filter(e => e.age >= 25);
console.log(olderuser);

//FUNCTION WITH RETURN STATEMENT
function add(a, b) {
    return a + b;
}
console.log(add(23, 45));
console.log(add(90, 14));

//WITHOUT RETURN STATEMENT
function mul(a, b) {
    console.log(a * b);
}
mul(3, 4);

//FUNCTION WITH ARBITARY ARGUMENTS
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sum(13, 14));
console.log(sum(27, 18, 93, 21));

//FUNCTION AS EXPRESSION(ANONYMOUS FUNCTION)
const add1 = function (a, b) {
    return a + b;
}
console.log(add1(2, 9));

//ARROW FUNCTION
const add2 = (a, b) => {
    return a + b;
}
console.log(add2(7, 13));

//ARROW FUNCTION WITH MAP()
numbers = [1, 2, 3, 4, 5];
let doublednumbers = numbers.map(e => e * 2);
console.log(doublednumbers);

//ARROW FUNCTION WITH FILTER()
const fruits = ["apple", "banana", "orange", "grape"];
const fruit = fruits.filter(e => e.length > 5);
console.log(fruit);

//REDUCE()
numbers = [1, 2, 3, 4, 5];
total = numbers.reduce((sum, number) => sum + number, 0);
console.log(total);

//ARROW FUNCTION AS A CLOSURE
let createCounter = () => {
    let count = 0;
    return () => {
        count++;
        return count;
    };
};
let counter = createCounter();
console.log(counter());
console.log(counter());

//BLOCK SCOPE(LET,CONST)
if (true) {
    let t5 = 10;
    console.log(t5);
}
// console.log(t5);

//GLOBAL SCOPE(VAR)
if (true) {
    var t6 = 25;
    console.log(t6);
}
console.log(t6);

//FUNCTION SCOPE
function myFunction() {
    var d10 = "raghu";
    console.log(d10);
}
myFunction();

//REST PARAMETER
function myFunction1(f,s,...rest){
    console.log(f);
    console.log(s);
    console.log(rest);
}
myFunction1(10,20,30,40,50,60);

//SPREAD OPERATOR
let myarray=[1,2,3];
let newarray=[...myarray,4,5];
console.log(newarray);

//PARAMETER DESTRUCTURING (OBJECT)
function sayHello({name}){
    console.log(`Hello ${name}!`);
}
const perss2={name:'arun'};
sayHello(perss2);

//PARAMETER DESTRUCTURING (ARRAY)
n=[1,2,3];
function add3([a,b,c]){
    return a+b+c;
}
console.log(add3(n));

//CALLBACK FUNCTION()
function mycallback(){
    console.log("Iam a callback function")
}

function test(fun){
    fun();
}
test(mycallback);

//SET TIMEOUT()
setTimeout(function(){
    console.log("Hello World");
},2000);

//SET INTERVAL()
setInterval(function(){
    console.log("Hii");
},3000);




























































































































































