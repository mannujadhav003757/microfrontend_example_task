import faker from 'faker'
const carText = `<div> You have ${faker.random.number()} items in youre cart</div>`
document.querySelector('#dev-cart').innerHTML = carText;

const mount = (el) =>{
    const carText = `<div> You have ${faker.random.number()} items in youre cart</div>`
//document.querySelector('#dev-cart').innerHTML = carText;
    el.innerHTML=carText
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-cart')
    if(el){
        mount(el)
    }
}
export {mount}