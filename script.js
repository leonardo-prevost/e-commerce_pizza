//qS = shortcut for 'document.querySelector'
//qSa = shortcut for 'document.querySelectorAll'
const qS = (dqS)=>document.querySelector(dqS);
const qSa = (dqSa)=>document.querySelectorAll(dqSa);

pizzaJson.map((item, index)=>{
    let pizzaItem = qS('.models .pizza-item').cloneNode(true);

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();

        let key = e.target.closest('.pizza-item').getAttribute('data-key');


        qS('.pizzaBig img').src = pizzaJson[key].img;
        qS('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        qS('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        qS('.pizzaInfo--actualPrice').innerHTML =`R$ ${pizzaJson[key].price.toFixed(2)}`;
        qSa('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            

            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        qS('.pizzaWindowArea').style.opacity = 0;
        qS('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            qS('.pizzaWindowArea').style.opacity = 1;
        },200)      
    });
    
   qS('.pizza-area').append( pizzaItem );
});
