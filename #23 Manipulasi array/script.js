/*
MANIPULASI ARRAY
================
1. menambahkan element pada array
2. menghapus element pada array
3. menampilkan seluruh isi array
 */


//menambahkan element pada array
// var campuran = [24, 50, false, 'python', true, 78, 'django'];

// console.log("array yang ditampilkan = " + campuran[2])


//menghapus element array

// var campuran = ['mamah', false, 234, 'bapa']

// campuran[2] = undefined;

// console.log(campuran)

//menampikan isi array
var campuran = ['mamah', false, 234, 'bapa'];


for (i = 0; i < campuran.length; i++) {
    console.log('array no ' + i + ':' + campuran[i])
}
