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

// I wear a shirt and a skirt = 
// she wears a skirt = dia mengenakan sebuah rok
/*
hat = topi
pants = celana
they wear pants and shirts = mereka mengenakan celana dan kemeja
clothes = pakaian
suit = setelan
they are not yout pants = ini bukan celanamu
our hat = topi kami
    
 */