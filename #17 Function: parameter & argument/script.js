var tambah = function (a, b) { //? a,b adalah peremeter
    tambah = a + b;
    return tambah;
}
console.log("hasil dari per tambahan = " + tambah(50, 50)); //TODO 50,50 adalah argument



//
const youtClassName = (paramA, paramB) => {
    const self = {
        paramA,
        paramB
    };


    const yourSpecificAction = self => ({
        specificAction: {/* */ },
    });

}


// membuat kumpulan antribute, generic method, dan spesific method menjadi satu objek

const yourClassName = (paramA, paramB) => {
    const self = {
        paramA,
        paramB
    }

    const yourSpecificAction = self => ({
        specificAction: {/*do action A */ }
    });

    return Object.assign(self, yourGenericAction(self), yourSpecificAction(self),)
}

//PENDEKATAN OBJECT COMPOSTION
//[1] list of abstractions

const canSendMessage = self => ({
    sendMessage: () => console.log('seng message', self.message)
})

const cehckIsValidPhone = self => ({
    isValid: () => console.log("valid phone", self.from)
});
//[2] creaet object composition

const personalEnterprise = (from, message, store) => {
    //[3] attributes
    const self = {
        form,
        message,
        store
    };


    //[4] method
    const personalEnterpriseBehaviors = self => ({
        createCatalog: () => console.log("catalog has created:", self.store)
    });

    //[5] create object composition

    return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), cehckIsValidPhone(self));


};

const pe1 = personalEnterprise("pengirim@dicoding.com", "hei produk baru nih", "dicoding store");
pe1.createCatalog();
pe1.sendMessage();


//CONTOH PENGGUNAAN DATE
//parameter birtday dapat berupa milisecond ataupun date string

const myAge = birthday => {
    const birtday = new Date(birthday);
    const today = Date.now(); //today menghasilkan miliseconds saat ini 

    const diff_ms = today - birtday.getTime(); //menghitung selisih nilai miliseconds hari ini dan tanggal lahir
    const diffDate = new Date(diff_ms);

    return diffDate.getFullYear() - 1998; //1998 adalah representasi 0 dari dari miliseconds


}
console.log(myAge("2022-06-05"));







/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */


// TODO



/**
 * Jangan hapus kode di bawah ini
 */

module.exports = {
    Animal, Rabbit, Eagle, myRabbit, myEagle,
};
