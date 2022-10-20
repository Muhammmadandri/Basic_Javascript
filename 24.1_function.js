//calling function
function hello() {
    alert("Hello There");
}

//Using parameter
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

//function return
function addNumbers(a, b) {
    var c = a + b;
    return c;
}
document.write(addNumbers(40, 2));

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