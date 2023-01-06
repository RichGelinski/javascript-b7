let cars = [
    {brand: "Fiat", year: 2022},
    {brand: "BMW", year: 2018},
    {brand: "Ferrari", year: 2020}
]

/*
cars.sort((a,b) => {   //ordenação lógica (buble sort)
    if (a.year > b.year) {
        return 1
    } else if (a.year < b.year) {
        return -1
    } else {
        return 0
    }
})
*/

cars.sort((a,b) => {  //ordenação simplificada 
    return a.year - b.year
})

console.log(cars)