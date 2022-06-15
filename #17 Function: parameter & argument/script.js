const executorFunction = (resolve, reject) => {
    const isCoffeeMakeReady = true;
    if (isCoffeeMakeReady) {
        resolve("kopi berhasil di buat")
    } else {
        reject("mesin kopi tidak bisa digunakan")
    }
}