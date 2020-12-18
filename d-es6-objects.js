//Object property shorthand

const name = 'Vero'
const userAge = 32

const user = {
    name,
    age: userAge,
    location: 'Omaha'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label, stock} = product