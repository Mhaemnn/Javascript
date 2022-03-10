/*
switch(ekspresi){
    case "nilai 1"
        aksi 1
    [break;]

    case "nilai 2"
        aksi 2
    [break;]

    case "nilai - n"
        aksi - n
    [break;]

    default:
        aksi default
    [break;]
}
 */

var angka = prompt('masukan angka:');

switch (angka) {
    case '1':
        alert('yang ada masukan angka 1');
        break;

    case '2':
        alert('yang ada masukan angka 2');
        break;

    case '3':
        alert('yang ada masukan angka 3');
        break
    default:
        alert('angka yang ada masukan salah');
        break;
}
