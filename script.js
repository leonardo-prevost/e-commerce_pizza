//qS = shortcut for 'document.querySelector'
const qS = (dqS)=>document.querySelector(dqS);
const qSa = (dqSa)=>document.querySelectorAll(dqSa);

pizzaJson.map((item, index)=>{
    let pizzaItem = qS('.models .pizza-item').cloneNode(true);

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    
   qS('.pizza-area').append( pizzaItem );
});