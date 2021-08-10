const person = () =>{
    var saveName = "name"

    return{
        getName : ()=>{
            return saveName;
        },

        setName : (name)=>{
            saveName = name
        }
    };
};

newPerson = person()

console.log(newPerson.getName())
newPerson.setName("Ricardo")
console.log(newPerson.getName())