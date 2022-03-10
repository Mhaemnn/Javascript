var totalKaryawan = 10;
var idKaryawan = 1;


for (idKaryawan = 1; idKaryawan <= totalKaryawan; idKaryawan++) {
    if (idKaryawan <= 6) {

        console.log('Karyawan yang ' + 'No' + idKaryawan + ' bekarja dengan baik');

    } else if (idKaryawan === 8 || idKaryawan === 10) { //TODO tidak harus menggunakan else if 2x cukup menggunakan operasi logika
        console.log('Karyawan yang ' + 'No' + idKaryawan + ' sedang libur');

    } else {
        console.log('Karyawan yang ' + 'No' + idKaryawan + ' sedang dengan baik')
    }
}


// kurag efektif
/*
var totalKaryawan = 10;
var idKaryawan = 1;


for (idKaryawan = 1; idKaryawan <= totalKaryawan; idKaryawan++) {
    if (idKaryawan <= 6) {

        console.log('Karyawan yang ' + 'No' + idKaryawan + ' bekarja dengan baik');

    } else if (idKaryawan === 7) {
        console.log('Karyawan yang ' + 'No' + idKaryawan + ' lagi sakit')

    } else if (idKaryawan === 8) {
        console.log('Karyawan yang ' + 'No' + idKaryawan + ' sedang libur');

    } else if (idKaryawan === 9) {
        console.log('Karyawan yang ' + 'No' + idKaryawan + ' lagi sakit')
    } else {
        console.log('Karyawan yang ' + 'No' + idKaryawan + ' sedang libur')
    }
}

 */
