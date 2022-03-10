/*
// pengkodisian if else
if (kondisi){
    aksi ====> kalukan aksi jika kondisi berniali true
}

...====> keluar dari block jika kondisi berniali false
 */
// TODO perbandingan didalam pengulangan for
//? syntax sederhananya
var totalMobil = 10;

for (var noMobil = 1; noMobil <= totalMobil; noMobil++) {
    if (noMobil <= 6) {
        console.log('Mobil No. ' + noMobil + ' beroperasi dengan baik')
    }
    else {
        console.log('Mobil No.' + noMobil + ' beroperasi berhenti/rusak')
    }
}