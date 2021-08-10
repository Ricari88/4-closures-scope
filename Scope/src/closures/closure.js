const moneyBox = (coins) =>{
    var saveCoins = 0

    saveCoins+=coins

    console.log(`MoneBox: $${saveCoins}`);
}

moneyBox(10);
moneyBox(5)


const moneyBox = ()=>{
    var saveCoins = 0
    const countCoins = (coins) =>{
        saveCoins+=coins;
        console.log(`moneybox $${saveCoins}`)
    }
    return countCoins
}

let myMoneyBox = moneyBox()
myMoneyBox(4)
myMoneyBox(6)
myMoneyBox(10)


//ejemplo en mozilla

function crearFunc(){
    var nombre = "Ricardo"
    function mostrarNombre() {
        console.log(nombre)
    }
    return mostrarNombre
}

var miFuncion = crearFunc()
miFuncion()