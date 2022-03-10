//TODO syntax sederhana
/*
if(kondisi 1){
    aksi 1
} else if{ //? else if ini bisa banyak
    aksi 2
} else{
    aksi 3
}
 */

var angka = prompt('Masukan angka:')

if (angka % 2 === 0) {
    alert(angka + 'adalah bilangan GENAP')
} else if (angka % 2 === 1) {
    alert(angka + 'adalah bilangan GANJIL')
}
else {
    alert('yang dimasukan bukan angka')
}