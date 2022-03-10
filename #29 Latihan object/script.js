/*-------------------------
sopir     = Mahfud MD
trayek    = Jakarta - Bandung
penumpang = kosong
kas       = Rp. 0,-
 --------------------------*/
//objectnya
function angkot(supir, trayek, penumpang, kas) {
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;


    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }


    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert('Penumpang Masih Kosong');
            return false;
        }
        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

//inisialisai object baru
var angkot1 = new angkot('Mahfud MD', ['RS', 'Diasingkan'], [], 0);
var angkot2 = new angkot('Matheus Joko', ['Lapas', 'Sita aset'], [], 0);