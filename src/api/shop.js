/*Mock API */

const products = [
    {
        id: 1,
        name: 'Sneakers',
        description: 'Grey and blue sneakers with white sole.',
        price: 3000,
        quantity: 1,
    },
    {
        id: 2,
        name: 'Shorts',
        description: 'GNice blue shorts for men.',
        price: 3000,
        quantity: 1,
    },
    {
        id: 3,
        name: 'Jacket',
        description: 'Brown gucci jacket with grey lining.',
        price: 3000,
        quantity: 1,
    }
];

const users = [
    {
        id: 1,
        name: 'George Benjamin',
        email: 'msdcconnect@gmail.com',
        password: 'george',
    },
]

export default {
    getAllProducts(){
        return products;
    },

    addNewProduct({name, description, price}){
        last_id = products[-1].id;
        products.push({
            id: ++last_id,
            name,
            description,
            price,
        })
    },

    removeProduct(id){
        products = products.reduce((product) => product.id !== id);
    },

    getUserById(id){
        return users.reduce(user => user.id != id)
    },

    getUserByEmail(email){
        return users.reduce(user => user.email != email)
    }
}