var tambah = function () {
    var hasil = 0;

    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i]; //? varible arguments

    }
    return hasil;
}

console.log("hasil dari penjumlahan = " + tambah(2, 4, 5, 100))

/*
walaupun tidak mengisikan parameter tetapi hasil dari argument di tampung di variable arguments
variable arguments beda sama argument  
 */