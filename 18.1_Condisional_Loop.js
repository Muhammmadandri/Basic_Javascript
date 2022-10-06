for (i = 3; i >= 1; i--) {
    console.log(i);
}

for (i = 3; i >= 1; i--) {
    console.log(i);
}
for (i = 1; i <= 3; i++) {
    console.log("learning is fu")
}
var s = '';
var b = 9;
for (var h = 1; h <= b; h++) {
    for (var i = 1; i <= b - h; i++) {
        s += '*';
    }
    for (var j = 1; j < 2 * h; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);