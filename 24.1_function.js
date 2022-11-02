//calling function
function hello() {
    alert("Hello There");
}

//Using Function 1
function sayHello(name) {
    alert("Hi, " + name);
}
sayHello("Andri");

//Using parameter 2
function myAlert(txt) {
    alert("Hello" + txt);
}
myAlert("Test");

//multiple parameter
function test(x, y) {
    if (x > y) {
        document.write(x);
    } else {
        document.write(y);
    }
}
test(5, 8);

//function return 1
function addNumbers(a, b) {
    var c = a + b;
    return c;
}
document.write(addNumbers(40, 2));

//Function return 2
function myFunction(a, b) {
    return console.log(a * b);
}
var x = myFunction(5, 6);

//alert Box
alert("Do you really want to leave this page");

//prompt Box
var name = prompt("Enter your name:");
alert("andri");

//confirm box
var result = confirm("Apakah kamu serius keluar");
if (result == true) {
    alert("terimakasih telah datang");
} else {
    alert("Terimakasih telah menetap disini");
}

/*
 */
var color = 2; {
    console.log(color == 1 ? "Light" :
        (color == 2 ? "Dark" :
            (color == 3 ? "Nocture" :
                color == 4 ? "terminal : Indigo")))
}

/* buatlah function menampikan nama, membuat program pengingat
membuat program tentang pemenang dengan 3 kondisi tim 1 menang karena menang dari tim 2
tim 2 menang dari tim 1 dan seri sam dengan tim 2.*/
//membuat function calculate avarage "5,6,7=6" dan "3=6=9/3=6"
//membuat function convert"amount contoh 110 dikeluarkan dari 100 *1.1=110