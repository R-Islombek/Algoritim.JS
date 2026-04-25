// 1-Masala;

// let number = prompt("berilgan soni kiriting");

// if(number > 0){
//     console.log(number + 1);
// }else{
//     console.log(number - 1);
// }

// 2-Masala 

// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting");
// let c = prompt("c sonini kiriting");

// let musbat = 0;
// let manfiy = 0;

// if (a > 0) {
//     console.log(musbat + 1);
// }
// if(a < 0){
//     console.log(manfiy - 1);
// }
// if(b > 0){
//     console.log(musbat + 1);
// }
// if(c > 0 ){
//     console.log(musbat + 1);
// }
// if(c < 0){
//     console.log(manfiy - 1);
// }

// console.log("Musbat sonlar soni", musbat, "Manfiy sonlar soni", manfiy);

// 3-Masala;

// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting");
// let c = prompt("c sonini kiriting");


// let katta = Math.max(a, b, c);
// let kichik = Math.min(a, b, c);

// console.log("Katta sonlar soni",m, "Kichik sonlar soni", kichik);

// 4-Masala;

// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting");
// let c = prompt("c sonini kiriting");

// if ( a === b && b !== c) {
//     console.log("Tartib raqam c", c);
// } else if(a === c && c !== b){
//     console.log("Tartib raqam", b);
// }else if(b === c, c !== a){
//     console.log("Tartib raqam", a);
// }

// 5-Masala;

// let x = prompt("x sonini kiriting");

// if (x < -2 || x > 2) {
//     console.log(x * 2);
// }else{
//     console.log(x * -3);
// }

// 6-Masala;

// let number = prompt("son kiriting");

// if (number % 2 === 0 && number > 0) {
//     alert("musbat juft")
// } else if(number % 2 !== 0 && number > 0 ){
//     alert("musbat toq")
// }else if(number % 2 === 0 && number < 0){
//     alert("manfiy juft")
// }else if(number % 2 !== 0 && number > 0){
//     alert("manfiy toq")
// }else{
//     alert(0)
// }

// 7-Masala;

// let day = +prompt("hafta kunini kiriting");

// if(day === 1){
//     alert("Dushanba")
// }else if(day === 2){
//     alert("Seshanba")
// }else if( day ===3 ){
//     alert("Chorshanba")
// }else if( day === 4){
//     alert("Payshanba")
// }else if(day === 5){
//     alert("Juma")
// }else if(day === 6){
//     alert("Shanba")
// }else if(day === 7){
//     alert("Yakshanba")
// }else{
//     alert("Hafta kunlarini kiriting")
// }

// 8-Masala;

// let a = 10;
// let b = 20;
// let result = +prompt("Son kiriting")

// if (result === 1) {
//      alert(a + b);
// } else if(result === 2){
//     alert(a - b);
// }else if(result ===3){
//     alert(a * b)
// }else if( result === 4){
//     alert(a / b);
// }

// 9-Masala

let n = +prompt("20-69 gacha son kiriting:");

let on = Math.floor(n / 10); 
let bir = n % 10;            
let natija = "";         


if (on === 2) { natija = "Yigirma"; }
else if (on === 3)
     { natija = "O'ttiz"; }
else if (on === 4)
     { natija = "Qirq"; }
else if (on === 5) 
    { natija = "Ellik"; }
else if (on === 6) 
    { natija = "Oltmish"; }

if (bir === 1) { natija += " bir"; }
else if (bir === 2) 
    { natija += " ikki"; }
else if (bir === 3)
     { natija += " uch"; }
else if (bir === 4) 
    { natija += " to'rt"; }
else if (bir === 5)
     { natija += " besh"; }
else if (bir === 6) 
    { natija += " olti"; }
else if (bir === 7) 
    { natija += " yetti"; }
else if (bir === 8) 
    { natija += " sakkiz"; }
else if (bir === 9) 
    { natija += " to'qqiz"; }

if (n >= 20 && n <= 69) {
    alert(natija + " yosh");
} else {
    alert("Faqat 20-69 oralig'ida kiriting!");
}
