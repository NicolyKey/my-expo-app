export default categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/icons8-pizza-96.png')
    },
    {
        id: 2,
        name: 'Cupcake',
        image: require('../assets/cupcake.png')
    },
    {
        id: 3,
        name: 'Hamburguer',
        image: require('../assets/ihamburger.png')
    },
    {
        id: 4,
        name: 'Fish',
        image: require('../assets/tropical-fish.png')
    },
    {
        id: 5,
        name: 'Spaghetti',
        image: require('../assets/spaghetti.png')
    },
    {
        id: 6,
        name: 'takeout',
        image: require('../assets/takeout-box.png')
    },
    {
        id: 7,
        name: 'Drink',
        image: require('../assets/tropical-drink.png')
    },
]

export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'Soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'Papa Johns',
            image: require('../assets/pizza-prato.jpeg'),
            description: 'Welcome to Bella Notte Pizzeria, a charming eatery nestled in the heart of downtown. As you step inside, the warm aroma of freshly baked pizza fills the air, inviting you to indulge in a culinary experience like no other. The rustic decor, featuring exposed brick walls and wooden beams, creates a cozy atmosphere perfect for family gatherings or a casual night out with friends',
            lng: 38.2145602,
            lat: -85.5324269,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Pizza',
                    description: 'Cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/pizza-prato.jpeg'),
                },
                {
                    id: 2,
                    name: 'Lasanha',
                    description: 'lasanha',
                    price: 10,
                    image: require('../assets/lasanha.jpeg'),
                },
                {
                    id: 3,
                    name: 'Esfirra',
                    description: 'Esfirra',
                    price: 10,
                    image: require('../assets/esfirra.jpeg'),
                },
            ],
        },
        {
            id: 1,
            name: 'Papa Johns',
            image: require('../assets/pizza-prato.jpeg'),
            description: 'Hot and spicy pizzas',
            lng: 38.2145602,
            lat: -85.5324269,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Pizza',
                    description: 'Cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/pizza-prato.jpeg'),
                },
                {
                    id: 2,
                    name: 'Lasanha',
                    description: 'lasanha',
                    price: 10,
                    image: require('../assets/lasanha.jpeg'),
                },
                {
                    id: 3,
                    name: 'Esfirra',
                    description: 'Esfirra',
                    price: 10,
                    image: require('../assets/esfirra.jpeg'),
                },
            ],
        },
        {
            id: 1,
            name: 'Papa Johns',
            image: require('../assets/pizza-prato.jpeg'),
            description: 'Hot and spicy pizzas',
            lng: 38.2145602,
            lat: -85.5324269,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Pizza',
                    description: 'Cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/pizza-prato.jpeg'),
                },
                {
                    id: 2,
                    name: 'Lasanha',
                    description: 'lasanha',
                    price: 10,
                    image: require('../assets/lasanha.jpeg'),
                },
                {
                    id: 3,
                    name: 'Esfirra',
                    description: 'Esfirra',
                    price: 10,
                    image: require('../assets/esfirra.jpeg'),
                },
            ],
        },
    ],
};