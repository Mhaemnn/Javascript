var totalKendaran = 10;
var kendaranBerop = 6;
var noKendaran = 1;

while (noKendaran <= kendaranBerop) {
    console.log('Kendaran No. ' + noKendaran + 'beroperasi dengan baik')

    noKendaran++;
}

for (noKendaran = kendaranBerop + 1; noKendaran <= totalKendaran; noKendaran++) {
    console.log('Kendaran No. ' + noKendaran + 'beroperasi tidak dengan baik')
}