console.log("Hello world ! buy console");   //console
alert("This is hello by alert");            // thông báo

// let-var -> variable
if (true) {
    let name = "Minh"  // bên trong 1 khối lệnh
    var ten = "Zip" // được sử dụng rộng hơn
}
console.log("name: " + name);   //  k tìm ra
console.log("ten: " + ten);     //  Zip 

// so sánh
let x = '100';
console.log(x == '100');    //true
console.log(x === 100);     //false

let y = 100;
console.log(y == '100');    //true
console.log(y === 100);     // true

// const
const PI = 3.14;            // biến không thể bị gán cho 1 biến khác (Immutable)
console.log(`PI = ${PI}`);

