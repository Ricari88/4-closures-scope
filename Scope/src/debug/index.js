var a = "Hello"

function hello() {
    let b = "Hello world"
    const c = "Hello World!"

    if(true){
        let d = "Hello World!!"
        debugger
    }
}

hello();


const moneyBox = ()=>{
    debugger
    var saveCoins = 0
    const countCoins = (coins) =>{
        debugger
        saveCoins+=coins;
        console.log(`moneybox $${saveCoins}`)
    }
    return countCoins
}

let myMoneyBox = moneyBox()
myMoneyBox(4)
myMoneyBox(6)
myMoneyBox(10)