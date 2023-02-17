const c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)

pizzaJson.map((item, index) =>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true)
    //preencher as informações em pizzaitem

    c('.pizza-area').append(pizzaItem)
})