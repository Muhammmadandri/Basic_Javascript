var person = {
    name: "Andri",
    age: 17,
    favColor: "red",
    height: 49
};

/*
var orang = {
    nama: 'andri',
    kelas: 'rpl',
    warna: 'merah',
    function: warna() { warna: 'abu' }
}*/

//lesson 31
var person = {
    name: "andri",
    age: 17,
    warna: "merah"
};
var x = person.age;
var y = person['age'];
console.log(person.name);
console.log(person['name'])
console.log(person.name.length)

//lesson 32 method
/*var person = (name, age, favColor){
    this.name = name,
        this.age = age,
        this.favColor = favColor
}*/

//new merupakan instact object
var p1 = new person("Andri", 17, "red");
var p2 = new person("Abiel", 17, "blue");
console.log(p1['Andri']);
console.log(p1.name);

//soal 
/*var Kakak = new person("Andra", 17, "blue");
var Adik = new person("Andri", 17, "red");
var Ibu = new person("Mama", 50, "pink");
var Ayah = new person("Bapa", 53, "hijau");*/

console.log(Kakak['name']);
console.log(Adik.name);
console.log(Ayah['name']);
console.log(Ibu.name);

//lesson 35 method
function person(name, age) {
    this.name = name;
    this.age = age;
    this.changeName = fuction(name); {
        this.name = name;
    }
}

var p1 = new person('andri', 17)
console.log(p1.name)
p1.changeName(17)
console.log(p1.name)