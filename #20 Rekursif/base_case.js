function cetakAngka(n) {
    if (n === 0) { // if ini yang disebut dengan base case, jadi kondisi rekursifnya ketika seudah bernilai 0 maka akan berhenti
        return;
    }
    console.log("cetak angak no. " + n);
    cetakAngka(n - 1)
}

cetakAngka(10);