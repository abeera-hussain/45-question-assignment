
type car ={
    manufacturer:string,
    model:string,
    [key:string]:any;
}

function createCar(manufacturer:string,model:string,optional:Record<string,any>):car {
    return{
        manufacturer,
        model,
        ...optional
    }
}
const myCar:car = createCar("toyota","corolla",{color:"black",year:"2022"})
console.log(myCar);
