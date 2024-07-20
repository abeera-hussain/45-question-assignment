function createCar(manufacturer, model, optional) {
    return {
        manufacturer,
        model,
        ...optional
    };
}
const myCar = createCar("toyota", "corolla", { color: "black", year: "2022" });
console.log(myCar);
export {};
