import bcrypt from 'bcryptjs';
const data ={
    users:[
        {
            name:'Anjitha',
            email:'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,

        },
        {
            name:'unni',
            email:'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,

        }

    ],
    products:[
        {
            // _id:'1',
            name:'Allen Solly Shirt',
            slug:'allen solly shirt',
            category:'Shirts',
            image:'/images/image1.png',
            price: 120,
            countInStock: 10,
            brand:'Allen Solly',
            rating:4.5,
            numReviews: 10,
            description:'high quality shirt',
        },
        {
            // _id:'2',
            name:'Adidas Fit shirt',
            slug:'adidas-fit-shirt',
            category:'Shirts',
            image:'/images/image2.png',
            price: 250,
            countInStock: 0,
            brand:'Adidas',
            rating:4,
            numReviews: 10,
            description:'high quality product',

        },
        {
            // _id:'3',
            name:'Adidas Fit Pant',
            slug:'adidas-fit-pant',
            category:'pants',
            image:'/images/image3.png',
            price: 65,
            countInStock: 5,
            brand:'puma',
            rating:4.5,
            numReviews: 10,
            description:'high quality product',
        
        },
        {
            // _id:'4',
            name:'maxi Dress',
            slug:'casual-long-maxi-dress',
            category:'casual',
            image:'/images/images.jpeg',
            price: 250,
            countInStock: 20,
            brand:'kayra',
            rating:4,
            numReviews: 10,
            description:'high quality product',
        },
    ],
};

export default data;