// 1-Masala;

// let number = prompt("a sonini kiriting");

// if(a > 0){
//     alert(a + 1);
// }else{
//     alert(a - 2);
// }

// 2-Masala;

// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting");
// let c = prompt("c sonini kiriting");

// let musbat = 0;
// let mainfiy = 0;


// if(a > 0){
//     musbat++;
// }
// if(a < 0){
//     mainfiy++;
// }
// if(b > 0){
//     musbat++
// }
// if(b < 0){
//     mainfiy++
// }
// if(c > 0){
//     musbat++
// }
// if(c < 0){
//     mainfiy++
// }

// console.log("Musbat sonlar soni, =", musbat, "Manfiy sonlar soni");

// 3-Masala;

// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting");
// let c = prompt("c sonini kiriting");

// let katta = Math.max(a, b);
// let kichik = Math.min(a, b);
// let orta = katta - kichik;

// console.log("katta", katta, "kichik"= kichik);

// 4-Masala;

// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting");
// let c = prompt("c sonini kiriting");

// if( a === b && b !== c){
//     alert("Tartib raqam c ")
// }else if( a === c && a !== b ){
//     alert("Tartib raqam b")
// }else if(b === c && a !== c){
//     alert("tartib raqam c")
// }else{
//     alert("Tartib raqam yo'q")
// }

// 5-Masala;

// let x = prompt("x sonini kiriting");

// if(x < -2 && x > 2){
//    alert(2 * x)
// }else{
//     alert(-3 * x)
// }

// 6-Masala;

// let number = prompt("raqam kiriting");

// if( number > 0 && number % 2 !== 0){
//         alert("Musbat toq")
// }else if( number > 0 && number % 2 === 0){
//        alert("Musbat juft")
// }else if(number = 0){
//     alert(0)
// }else if(number < 0 && number % 2 === 0){
//     alert("Musbat juft son")
// }else if(number < 0 && number % 2 !==0){
//     alert("Manfiy toq")
// }

// 7-Masala;

let day = prompt("Hafta kunlarini kiriting");


switch (day) {
    case 1:
        alert("Dushanba")
        break;
    case 2:
        alert("Seshanba")
        break;
    case 3: 
        alert("Chorshanba")
        break;
    case 4: 
        alert("Payshanba");
        break;
    case 5: 
        alert("Juma");
        break;
    case 6: 
        alert("shanba")
        break;
    case 7: 
        alert("Yakshanba")                        
    default:
        alert("Hafta kunlarini kiriting");
        break;
}
