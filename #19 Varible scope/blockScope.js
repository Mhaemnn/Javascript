//scope global / default
var buku = 'sejarah';

var kotak = function () {
    //ini adalah scope local didalam function,
    var buku = 'kimia';
    console.log("1. ini isi dari scope local = " + buku); //kimia

    if (true) {
        //kita tidak bisa mendeklarasikan ulang buku
        //untuk block statement karena dianggap
        //di dalam scope yang sama dengan function buku
        buku = 'fisika';
        console.log("2. ini isi dari scope local = " + buku); //fisika

    }
    else (
        console.log("bukan varible scope")
    )

    console.log("2. ini isi dari scope local = " + buku)//fisika

}
kotak();

console.log("3. ini isi dari scope global = " + buku);