//object literal

var mhs1 = {
    nama: 'muhaemin',
    nim: '3984948',
    email: 'muha@yahoo.com',
    jurusan: 'teknik makan'
}


//object dengan declaration function

function kumpulanMhs(nama, nim, email, jurusan) {
    var mhs2 = {};
    mhs2.nama = nama;
    mhs2.nim = nim;
    mhs2.email = email;
    mhs2.jurusan = jurusan;
    return mhs2;

}

var mhs3 = kumpulanMhs('mahmud', '08348', 'mahmud@gmial.com', 'teknik ruang dan waktu')


//object constructor function

function mhs4(nama, nim, email, jurusan) { //--> tidak perlu menggunakan var dan return
    //tidak menggunakan var 
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
    //tidak menggunakan return

}

var mhs5 = new mhs4('nanang', '3838940', 'nanang@gmail.com', 'teknik menghilang')
/*-----------------------------
KESIMPULAN:
ketika menggunakan object constructor function
anggap saja di dalam functionya ada VAR & RETURN
yang sebenernya ini dibuatkan oleh javascript dan harus menggunakan NEW
------------------------------- */