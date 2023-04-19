import faker from 'faker'

// let products = ''

// for(let i = 0; i<=100 ; i++){
//     const name = faker.commerce.productName()
//     products += `<div>${name}</div>`
// }

// document.querySelector('#dev-products').innerHTML = products

const mount = (el) =>{
    let products = ''

    for(let i = 0; i<=100 ; i++){
        const name = faker.commerce.productName()
        products += `<div>${name}</div>`
    }
    el.innerHTML = products
    //document.querySelector('#dev-products').innerHTML = products
}

//Context situtation #1
// we are running this file in devlopment isolation
// we are using local index.html file
// which defenitely has an element with an id of 'dev-product
// we want to immediately render our app into element


if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-products')

    //Assuming our container doesnt have an element with id 'dev-products'

    if(el){

    //We are probably running in isolation
    
        mount(el)
    }
}



// Context situation #2
// we are running this file in development or production through the container app
// No guarantee that an element with an id of 'dev-products'
//WE DO NOT WANT try to immediately render the app

export { mount };