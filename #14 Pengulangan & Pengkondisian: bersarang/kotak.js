function kotak(panjang) {
    var hasil = '';
    for (var i = 0; i < panjang; i++) {
        for (var j = 0; j < panjang; j++) {
            hasil += '*';
        }
        hasil += '\n';
    }
    return hasil;
}

console.log(kotak(10))