var tambah = function (a, b) { //? a,b adalah peremeter
    tambah = a + b;
    return tambah;
}
console.log("hasil dari per tambahan = " + tambah(50, 50)); //TODO 50,50 adalah argument

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

