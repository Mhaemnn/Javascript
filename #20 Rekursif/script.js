/*
for (i = 10; i >= 1; i--) {
    console.log(i)

}

looping ini bisa di ubah menggunakan fungsi rekursif
 */

function tampilAngka(n) {
    console.log(n);

    return tampilAngka(n - 1)
}

tampilAngka(10)