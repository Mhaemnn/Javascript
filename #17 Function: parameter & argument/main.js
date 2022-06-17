function makeCoffee() {
    const coffee = getCoffee(); //asyc process menggunakan promise
    console.log(coffee);
}
makeCoffee();