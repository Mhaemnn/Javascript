// let array = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd'];

//splice(indexAwal, mauDihapBerapa, elementBaru1, elementBaru2,....)
array.splice(2, 0, 'mumu', 'mala') //dimuali dari index 2 tidak ada yang dihapus & menambahkan 2 element
console.log(array)


//slice(memotong array menjadi array yang baru)
let array = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd'];
var array1 = array.slice(2, 6);
console.log(array1.join())