/* IF merupakan sebuah pernyataan yang digunakan untuk 
mengeksekusi sebuah perintah benar, jika pernyataan itu salah
maka perintah tersebut tidak akan dieksekusi */

//IF
var a = 5
if (a > 2) {
    console.log("Uang itu akan kembalian");
}

/*IF ELSE merupakan sebuah pernyataan yang digunakan untuk 
mengeksekusi sebuah perintah benar, jika perintah itu salah 
maka perintah tersebut akan dieksekusi oleh perintah ELSE*/

//IF ELSE
var Nilai = 7
if (Nilai > 10) {
    console.log("Nilai yang lebih dari 8 maka tidak akan diremedial");
} else {
    console.log("Nilai yang kurang dari 8 maka akan diremedial");
}

/* Switch case merupakan sebuah pernyataan yang digunakan untuk
membuat perntah yang banyak, perintah ini akan mempermudah jika 
program itu banyak.
*/
//Swicth case
var Kendaraan = 1;
switch (Kendaraan) {
    case 1:
        console.log("Motor")
        break;
    case 2:
        console.log("Mobil")
        break;
    case 3:
        console.log("Bus")
        break;
    case 4:
        console.log("Kapal")
        break;
    default:
        console.log("Pesawat")
}

var i = 1
var j = 4
var k = 1
    /* For digunakan untuk mengulang perintah variabel, jika 
    perintah itu benar.
    */
    // perulangan for
console.log("Perulangan For")
for (; i <= 5;) {
    console.log(i)
    i += 1
}

/* While sama dengan for, namun perintah ini lebih mudah dan ringkas*/
// perulangan while 
console.log("Perulangan While")
while (j <= 5) {
    console.log(j)
    j += 1
}

/* do while  akan melakukan sekali perulangan, lalu akan mengecek kondisi
di perulangan while */
// perulangan do while 
console.log("Perulangan do while")
do {
    console.log(k)
    k += 1
} while (k >= 5);