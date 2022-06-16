const stock = {
    coffeeBeans: 250,
    water: 1000,
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("stock cukup, bisa membuat kopi");
        } else {
            reject("stock tidak cukup");
        }
    });

};

const handlesSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handlesFailure = rejectionReason => {
    console.log(rejectionReason)
}
checkStock().then(handlesSuccess, handlesFailure)


