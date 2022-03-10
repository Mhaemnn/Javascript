//ini adalah scope global/default
var buku = 'sejarah';


function kotak() {
    //ini adalah local scope, dan kita
    //dapat mendeklarasikan varible buku secara local

    var buku = 'kimia';
    console.log("1. ini adalah isi dari varible scope local = " + buku) //kimia
}

kotak();
console.log("2. ini adalah isi dari varible scope global = " + buku)


/*
PENJELASAN
=============
1. jika console.log yang no 2 di hilangkan maka browser akan menampilkan kimia
2. jika consele.log yang no 1 di hilangkan maka browser akan menampilkan kimia
3. jika var yang ada di scope local dihilangkan browser akan menampilkan kima 2" nya
4. jika var yang ada di scope global dihilangkan browser akan menampikan kimia - sejarah,
    dalam hal ini yang didulukan yang local baru ke global dan js secara otomatis membuatkan var
 */