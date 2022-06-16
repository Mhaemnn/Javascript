function makeKapalapi() {
    checkstcok()
        .then((value) => {
            console.log(value);
            return checkstcok();
        })
        .then((value) => {
            console.log(value);
            return brewCoffee();

        })
        .then((value) => {
            console.log(value);
        })
        .catch((rejectionReason) => {
            console.log(rejectionReason)
        })
}

makeKapalapi();

const checkstcok = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                console.log("mesin kopi siap digunakan");
            } else {
                reject("maaf, mesin kopi sedang sibuk");
            }
        }, 1000);
    })
}

const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000
    },
    isCoffeeMachineBusy: false;
}