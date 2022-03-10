//forEach --> tidak mengembalikan array//
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nama = ['muhaemin', 'rama', 'lexi', 'dpr', 'safari'];
let i;

for (i = 0; i < angka.length; i++) {
    console.log(angka[i])
}

//selain menggunakan for bisa menggunakan forEach 
// angka.forEach(function (e) {
//     console.log(e)
// })


//mengguanakan parameter
nama.forEach(function (e, i) {
    console.log('mahasiswa ke ' + i + ' adalah = ' + e)
})

//map --> mengembalikan array//
var angkaBaru = angka.map(function (e) {
    return e * 2;
});
console.log(angkaBaru.join('-'))


//sort--> mengurutkan isi array nya//

angka.sort()
console.log(angka.join('-'))


//filter -->mengembalika banyak niali

var angkaBaru1 = angka.filter(function (y) {
    return y > 5; // bisa == <= >= != dll
})
console.log(angkaBaru1.join('-'))


//find
var angkaBaru2 = angka.find(function (y) {
    return y > 5;
})
console.log(angkaBaru2)