//this --> adalah keyword special yang yang secara otomatis didefiniskan pada setiap function
// var a = 20;
// console.log(this.a); //--> this / window



//review pembuatan object
//
//cara 1 --> function declaration
function halo() {
    console.log(this)
    console.log('1. halo menggunakan function declaration')
}
halo(); //--> this mengembalikan object global




//cara 2 --> object literal

var obj = { x: 90, nama: 'sugino' };
obj.helo = function () {
    console.log(this)
    console.log('2. halo menggunakan object literal');

}
obj.helo(); //--> this mengembalikan object yang bersangkutan




//cara 3 --> constructor
function Helo() {
    console.log(this)
    console.log('3. Halo menggunakan constructor')
}
new Helo() //-->mengembalikan object yang baru NEW  

/*----------------------
cara pemanggilan dari ketiga object di atas
sama yang membedakan adalah context nya
------------------------ */