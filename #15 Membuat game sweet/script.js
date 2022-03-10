var tanya = true
while (tanya) {
    //menangkap pilihan player hero anime
    var p = prompt('Pilihan: naruto uzumaki, tanjiro kamado, monkey D. luffy');
    //pilihan dari komputer
    //membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'naruto uzumaki';

    }
    else if (comp >= 0.34 && comp < 0.7) {
        comp = 'tanjiro kamado';

    }
    else {
        comp = 'monkey D. luffy';
    }

    var hasil = '';
    //menentukan rules
    if (p == comp) {
        hasil = ' SERI!!';
    }
    else if (p == 'tanjiro kamado') {
        // if(comp = 'naruto uzmaki'){
        //     hasil = 'MENANG!';
        // }
        // else{
        //     hasil = 'KALAH';
        // }

        hasil = (comp == 'naruto uzumaki') ? 'MENANG!' : 'KALAH!';
    }
    else if (p == 'naruto uzumaki') {
        hasil = (comp == 'tanjiro kamado') ? 'MENANG!' : 'KALAH!';
    }
    else if (p == 'monkey D. luffy') {
        hasil = (comp == 'tanjiro kamado') ? 'MENANG!' : 'KALAH!';
    }
    else {
        hasil = 'memasukan pilihan yang salah'
    }

    //menentukan hasil
    alert('kamu memilih :' + p + ' dan komputer memilih :' + comp + '\nMaka hasilnya: kamu ' + hasil)
    tanya = confirm('lagi!');


}
alert('terima kasih sudah bermain');
