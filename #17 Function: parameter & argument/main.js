function makeCoffee() {
    const coffee = getCoffee(); //asyc process menggunakan promise
    console.log(coffee);
}
makeCoffee();


//callback
function makeCake() {
    getCake(function (cake) {
        console.log(cake)
    })
}

makeCake();

//promise
function makeCake() {
    getCoffee().then(cake => {
        console.log(cake)
    })

}
makeCake()