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
// TODO
class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    };
};
class Rabbit extends Animal {
    constructor(name, age) {
        super(name, age, true)
    }
    eat() {
        return `${this.name} sedang makan!`;
    }
}
class Eagle extends Animal {
    constructor(name, age) {
        super(name, age, false)
    }
    fly() {
        return `${this.name} sedang terbang!`;
    }
}
const myRabbit = new Rabbit("Labi", 2);
const myEagle = new Eagle("Elo", 4);


/**
 * Jangan hapus kode di bawah ini
 */

module.exports = {
    Animal, Rabbit, Eagle, myRabbit, myEagle,
};


/**
 * Jangan hapus kode di bawah ini
 */

module.exports = {
    Animal, Rabbit, Eagle, myRabbit, myEagle,
};


//HOW TO SOLVE (imperatif)
const name = ['nana', 'nunu', 'nini', 'nanang'];

const newNamesBaru = [];

for (i = 0; i < name.length; i++) {
    newNamesBaru.push(`${name[i]}`);
}

console.log(newNamesBaru)


//WHAT DO SOLVE (deklaratif)
const names = ['saha', 'suhu', 'sihi', 'sahur'];
const newNamaBaru = names.map((names) => `${names}!`);

console.log(newNamaBaru);


// PURE FUNCTION
let PI = 3.14;
const hitungLuasLingkaran = (jariJari) => {
    return PI * (jariJari * jariJari);
};

console.log(hitungLuasLingkaran(4));

PI = 5;
console.log(hitungLuasLingkaran(4));

//sama seperti yang di atas
const hitungLuasLingkaranBaru = (jariJari) => {
    return 3.14 * (jariJari * jariJari);
};

console.log(hitungLuasLingkaranBaru(4))
console.log(hitungLuasLingkaranBaru(8))


const creatPersonWhitAge = (age, person) => {
    person.age = age;
    return person;
};

const person = {
    name: "nana"
};

const newPerson = creatPersonWhitAge(22, person);
console.log({ person, newPerson })


//merubah menjadi pure dengan destructuring object
const humanAge = (age, human) => {
    return { ...human, age };
};

const human = {
    name: "siragar"
}

const newHuman = humanAge(22, human);
console.log(({ human, newHuman }))


const ngaran = ['asep', 'otong', 'udin'];

const ngaranPanjang = ngaran.map((ngaran) => `${ngaran}`);

console.log({ ngaran, ngaranPanjang })



//mengubah nilai dari sebuah object 

const user = {
    firstName: "juragan",
    lastName: "emang",
}

const renameLastNameUser = (newLastName) => {
    user.lastName = newLastName;
}

renameLastNameUser('empang', user);
console.log(user);

//MENGGUNAKAN FUNCTIONAL PROGRAMMING

const hewan = {
    ngaranHarep: "burung",
    ngaranTukang: "manuk"
}

const ngaranHewan = (newHewan, hewan) => {
    return { ...hewan, ngaranTukang: newHewan }
};

const newSato = ngaranHewan('mangkluk', hewan);
console.log(newSato);



















