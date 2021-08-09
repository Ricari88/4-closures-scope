const helloWorld = () =>{
    const hello = "Hello World"

    console.log(hello)
}

helloWorld()

var scope = "global variable"

const functionScope = ()=>{
    var scope = "now i am local"
    
    const func = () =>{
        return scope;
    }
    console.log(func())
}

functionScope()