var totalKaryawan = 10;
var idKaryawan = 1;

for (idKaryawan = 1; idKaryawan <= totalKaryawan; idKaryawan++) {
    if (idKaryawan <= 6 && idKaryawan !== 5) {
        console.log('Karyawan yang ' + 'No' + idKaryawan + ' bekarja dengan baik');
    }
    else if (idKaryawan === 8 || idKaryawan === 10 || idKaryawan === 5) {
        console.log('Karyawan yang ' + 'No' + idKaryawan + ' memilih untuk risgn');
    }
    else {
        console.log('Karyawan yang ' + 'No' + idKaryawan + ' mengambil untuk cuti');
    }

}